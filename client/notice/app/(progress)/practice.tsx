import React, { useEffect, useState } from 'react';
import { ThreeNotes } from '@/components/Svgs';
import { GradientHeading, InfoText, StatusHeading } from '@/components/TextElements';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { containerStyles } from '@/components/styles';
import i18n from '@/constants/texts/Translations';
import { NotesData, NotePlay, RecordingStatus, Clef, PlayingStatus } from '@/types/noteTypes';
import { PlayedStatusIcon } from '@/components/Icons';
import { NotePlayImage } from '@/components/Images';
import {
  ScrollToTheSideButton,
  RecordGradientButton,
  PlayButton,
  BackButton,
} from '@/components/CustomButtons';
import { CLEFS } from '@/constants/texts/Notes';
import { Audio } from 'expo-av';
import { useGlobalSearchParams, router } from 'expo-router';
import NotFoundScreen from '../+not-found';
import { getNotesData, getNotes, doesClefOrNoteExist } from '../util/notesUtils';
import { unloadSound, loadSound, playSound, stopSound } from '../util/playSound';
import { startRecording, stopRecording } from '../util/recordSound';
import LoadView from '../loadingScreen';

interface PracticeProps {
  selectedClef?: string;
  selectedNoteName?: string;
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
    <VStack style={{ height: 58, opacity: isHidden ? 0 : 1, width: '100%', alignItems: 'center' }}>
      <InfoText displayedText={`${i18n.t(recordingStatus)}:`} status={recordingStatus} />
    </VStack>
  );
};

const PracticePage: React.FC<PracticeProps> = ({ selectedClef, selectedNoteName }) => {
  const [currentlyDisplayedClef, setCurrentlyDisplayedClef] = useState<Clef>(
    selectedClef ? (CLEFS.find((clef) => selectedClef === clef) ?? CLEFS[0]) : CLEFS[0]
  );
  const [currentlyDisplayedClefIndex, setCurrentlyDisplayedClefIndex] = useState(0);
  const [notesData, setNotesData] = useState<NotesData>();
  const [playedNotes, setPlayedNotes] = useState<NotePlay[]>([]);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(
    selectedNoteName ? playedNotes.findIndex((note) => selectedNoteName === note.noteName) : 0
  );
  const [currentNote, setCurrentNote] = useState<null | NotePlay>(null);
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [permissionResponse] = Audio.usePermissions();
  const [isRecording, setIsRecording] = useState(false);
  const [resultStatus, setResultStatus] = useState<RecordingStatus>('notRecordedInSession');
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const notesData = await getNotesData(currentlyDisplayedClef);
      setNotesData(notesData);

      const newPlayedNotes = getNotes(notesData);
      setPlayedNotes(newPlayedNotes);

      if (isRecording && recording) {
        setRecording(null);
      }

      if (newPlayedNotes.length > 0) {
        const refreshedIndex = 0;
        setCurrentNoteIndex(refreshedIndex);
        setCurrentNote(newPlayedNotes[refreshedIndex]);
      } else {
        setCurrentNote(null);
      }

      setResultStatus('notRecordedInSession');
    };

    fetchNotes();
  }, [currentlyDisplayedClefIndex, currentlyDisplayedClef]);

  useEffect(() => {
    const setNewNote = async () => {
      if (currentNote) {
        setCurrentNote(playedNotes[currentNoteIndex]);
        setIsRecording(false);

        if (isRecording && recording) {
          setRecording(null);
        }

        if (sound) {
          unloadSound(sound);
        }

        if (playedNotes[currentNoteIndex]?.noteName) {
          const newSound = await loadSound(
            currentlyDisplayedClef,
            playedNotes[currentNoteIndex].noteName
          );
          setSound(newSound);
        }

        setResultStatus('notRecordedInSession');
      }
    };

    setNewNote();
  }, [currentNoteIndex, currentNote, playedNotes, currentlyDisplayedClef]);

  const changeNote = async (newIndex: number) => {
    if (newIndex >= playedNotes.length) {
      const newClefIndex = currentlyDisplayedClefIndex + 1;
      if (newClefIndex < CLEFS.length) {
        setCurrentlyDisplayedClefIndex(newClefIndex);
        setCurrentNoteIndex(0);
        setCurrentlyDisplayedClef(CLEFS[newClefIndex]);
      }
    } else {
      setCurrentNoteIndex(newIndex);
    }
    setRecording(null);
    setIsRecording(false);
    setResultStatus('notRecordedInSession');
  };

  const startOrStopRecording = async () => {
    const newIsRecording = !isRecording;
    setIsRecording(newIsRecording);

    if (newIsRecording) {
      setResultStatus('notRecordedInSession');
      const newRecording = await startRecording(recording, permissionResponse);
      setRecording(newRecording);
      stopSound(sound);
    } else {
      await stopRecording(recording);
      setRecording(null);
      const evaluatedRecordingResult: PlayingStatus = 'failed';
      setResultStatus(evaluatedRecordingResult);
    }
  };

  return (
    <>
      {!currentNote ? (
        <LoadView />
      ) : (
        <>
          <VStack style={{ marginTop: 40 }}>
            <HStack space="md" style={containerStyles.horizontalCentralContainer}>
              {resultStatus === 'notRecordedInSession' ? (
                <GradientHeading type="heading" displayedText={currentNote.noteName} />
              ) : (
                <StatusHeading
                  type="heading"
                  displayedText={currentNote.noteName}
                  status={
                    (resultStatus as RecordingStatus) !== 'notRecordedInSession'
                      ? resultStatus
                      : 'notPlayed'
                  }
                />
              )}
              {resultStatus !== 'notRecordedInSession' && resultStatus !== 'notPlayed' && (
                <PlayedStatusIcon status={resultStatus} style={{ marginTop: 25 }} />
              )}
            </HStack>
            {resultStatus === 'notRecordedInSession' && (
              <GradientHeading
                type="subheading"
                displayedText={notesData?.clef ? i18n.t(notesData?.clef) : ''}
              />
            )}
          </VStack>
          <VStack style={{ alignItems: 'center', marginTop: 10 }}>
            <HStack
              space="md"
              style={[
                containerStyles.horizontalCentralContainer,
                { alignItems: 'center', marginBottom: 10 },
              ]}
            >
              {currentNoteIndex > 0 && !isRecording && (
                <ScrollToTheSideButton
                  onPress={() => changeNote(currentNoteIndex - 1)}
                  isLeft={true}
                />
              )}

              <NotePlayImage
                noteName={currentNote.noteName}
                clef={currentlyDisplayedClef}
                size="large"
              />

              {currentNoteIndex < playedNotes.length - 1 && !isRecording && (
                <ScrollToTheSideButton
                  onPress={() => changeNote(currentNoteIndex + 1)}
                  isLeft={false}
                />
              )}
            </HStack>
            <VStack style={{ opacity: !isRecording ? 1 : 0 }}>
              <PlayButton onPress={() => playSound(sound)} />
            </VStack>
          </VStack>
          <VStack style={{ alignItems: 'center', marginTop: 2 }}>
            <VStack style={{ opacity: isRecording ? 1 : 0, marginTop: 5 }}>
              <ThreeNotes width={40} height={40} />
            </VStack>
            <EvaluatedRecordingBox evaluatedRecordingStatus={resultStatus} />
            <RecordGradientButton
              isRecording={!isRecording}
              onPress={() => startOrStopRecording()}
            />
          </VStack>
        </>
      )}
    </>
  );
};

//TODO: figure out how we are going to save the player status. Make a separate file or save it in to the music files JSON. for now it is saved in the music files JSON
export default function Practice() {
  const { selectedClef, selectedNoteName } = useGlobalSearchParams<{
    selectedClef?: string;
    selectedNoteName?: string;
  }>();

  const isClefAndNoteFound = doesClefOrNoteExist(selectedClef, selectedNoteName);
  if (!isClefAndNoteFound) {
    return <NotFoundScreen />;
  }

  return (
    <VStack style={containerStyles.mainContainerForPages}>
      <BackButton
        onPress={() =>
          router.push({
            pathname: './progress',
            params: { selectedClef: selectedClef },
          })
        }
      />
      <VStack style={containerStyles.mainCentralContainer}>
        <PracticePage selectedNoteName={selectedNoteName} selectedClef={selectedClef} />
      </VStack>
    </VStack>
  );
}

export { PracticePage };
