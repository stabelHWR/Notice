import React, { useEffect, useState } from 'react';
import { ThreeNotes } from '@/components/Svgs';
import { BoldText, GradientHeading, StatusHeading } from '@/components/TextElements';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Audio } from 'expo-av';
import { containerStyles } from '@/components/styles';
import i18n from '@/constants/texts/Translations';
import {
  CloseButton,
  RecordGradientButton,
  ScrollToTheSideButton,
} from '@/components/GradientButton';
import { useRouter } from 'expo-router';
import soprano from '@/assets/instruments/soprano.json';
import { Note, NoteName, NotePlay, PlayingStatus, RecordingStatus } from '@/types/noteTypes';
import { PlayedStatusIcon } from '@/components/Icons';
import { NotePlayOnFluteImage } from '@/components/Images';
import { STANDARD_NOTES } from '@/constants/Notes';

interface PracticeProps {
  selectedNote?: Note;
}

interface EvaluatedRecordingBoxProps {
  evaluatedRecordingStatus: RecordingStatus;
}

const EvaluatedRecordingBox: React.FC<EvaluatedRecordingBoxProps> = ({
  evaluatedRecordingStatus,
}) => {
  const recordingStatus =
    evaluatedRecordingStatus === 'notRecordedInSession' ? 'notPlayed' : evaluatedRecordingStatus;
  const isHidden = evaluatedRecordingStatus === 'notRecordedInSession';

  return (
    <VStack style={{ height: 100, opacity: isHidden ? 0 : 1, width: '100%', alignItems: 'center' }}>
      {/* TODO: define status which you can do better and map them to desifned strings in i18n */}
      <BoldText displayedText={`${i18n.t('wrong')}:`} status={recordingStatus} />
    </VStack>
  );
};

//TODO: figure out how we are going to save the player status. Make a sperate file or save it in to the music files JSON. for now it is saved in the music files JSON
export default function Practice({ selectedNote }: PracticeProps) {
  const router = useRouter();
  const notesData = soprano.notes as Array<NotePlay>;
  const [currentNote, setCurrentNote] = useState(selectedNote ? selectedNote : notesData[0]);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(
    selectedNote ? notesData.findIndex((note) => currentNote.noteName === note.noteName) : 0
  );
  const [recording, setRecording] = useState<Audio.Recording>();
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [isRecording, setIsRecording] = useState(false);
  const [resultStatus, setResultStatus] = useState<RecordingStatus>('notRecordedInSession');

  //TODO: should we play the note after the recording has finished?
  //const pathToMP3 = "";

  useEffect(() => {
    (async () => {
      setCurrentNote(notesData[currentNoteIndex]);
      setIsRecording(false);
      setResultStatus('notRecordedInSession');
      if (isRecording) {
        await stopRecording();
      }
    })();
  }, [currentNoteIndex]);

  const changeNote = async (newIndex: number) => {
    if (isRecording) {
      await stopRecording();
      setIsRecording(false);
    }
    setCurrentNoteIndex(newIndex);
    setResultStatus('notPlayed');
  };

  const startRecording = async () => {
    try {
      if (recording) {
        console.log('Recording is already in progress');
        return;
      }
      if (permissionResponse) {
        if (permissionResponse.status !== 'granted') {
          console.log('Requesting permission..');
          await requestPermission();
        }
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        console.log('Starting recording..');
        const { recording: newRecording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
        setRecording(newRecording);
        console.log('Recording started');
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    console.log('Stopping recording..');
    if (recording) {
      await recording.stopAndUnloadAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
      });
      const uri = recording.getURI();
      console.log('Recording stopped and stored at', uri);
      setRecording(undefined);
    } else {
      console.log('No recording is in progress');
    }
  };

  const startOrStopRecording = async () => {
    const newIsRecording = !isRecording;
    setIsRecording(newIsRecording);

    if (newIsRecording) {
      console.log(newIsRecording, 'Starting');
      setResultStatus('notRecordedInSession');
      await startRecording();
    } else {
      console.log(newIsRecording, 'stopping');
      await stopRecording();
      const evaluatedRecordingResult: PlayingStatus = 'failed';
      setResultStatus(evaluatedRecordingResult);
    }
  };

  return (
    <VStack style={containerStyles.mainContainerForPages}>
      <CloseButton onPress={() => router.push('./home')} />
      <VStack style={containerStyles.mainCentralContainer}>
        <HStack space="md" style={containerStyles.horizontalCentralContainer}>
          {resultStatus === 'notRecordedInSession' ? (
            <GradientHeading
              type="heading"
              displayedText={
                STANDARD_NOTES.includes(currentNote.noteName as NoteName)
                  ? currentNote.noteName
                  : ''
              }
            />
          ) : (
            <StatusHeading
              type="heading"
              status={
                (resultStatus as RecordingStatus) !== 'notRecordedInSession'
                  ? resultStatus
                  : 'notPlayed'
              }
            />
          )}
          <PlayedStatusIcon status={resultStatus} />
        </HStack>
        <HStack
          space="md"
          style={[containerStyles.horizontalCentralContainer, { alignItems: 'center' }]}
        >
          {currentNoteIndex > 0 && !isRecording && (
            <ScrollToTheSideButton onPress={() => changeNote(currentNoteIndex - 1)} isLeft={true} />
          )}

          <NotePlayOnFluteImage noteName={currentNote.noteName} />

          {currentNoteIndex < notesData.length - 1 && !isRecording && (
            <ScrollToTheSideButton
              onPress={() => changeNote(currentNoteIndex + 1)}
              isLeft={false}
            />
          )}
        </HStack>
        {isRecording && <ThreeNotes width={100} height={100} />}
        <EvaluatedRecordingBox evaluatedRecordingStatus={resultStatus} />

        <RecordGradientButton isRecording={!isRecording} onPress={() => startOrStopRecording()} />
      </VStack>
    </VStack>
  );
}
