import React, { useEffect, useState } from 'react';
import { GestureResponderEvent, StyleSheet } from 'react-native';
import { GradientHeading } from '@/components/TextElements';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import i18n from '@/constants/texts/Translations';
import { containerStyles } from '@/components/styles';
import { ChartLine } from 'lucide-react-native';
import { router } from 'expo-router';
import { NormalIcon } from '@/components/Icons';
import { CustomPopUpModal, NoteModal } from '@/components/Modals';
import { secondaryColorNeonBlue, StatusColors } from '@/constants/Colors';
import { Clef, NotePlay, NotesData } from '@/types/noteTypes';
import { View } from 'react-native';
import { BackButton, InfoButton, RoundButton } from '@/components/CustomButtons';
import { CLEFS } from '@/constants/texts/Notes';
import { CustomReactDropdown } from '@/components/Inputs';
import { getNotesData, getNotes } from '../util/notesUtils';
import { setStatusColor } from '../util/statusSetters';

interface ColorDefinitionProps {
  color:
    | typeof StatusColors.error.background
    | typeof StatusColors.notPlayed.background
    | typeof StatusColors.success.background;
  displayedText: string;
}
interface NoteStructureProps {
  note: NotePlay;
  clef: Clef;
  index: number;
  onPress: (event: GestureResponderEvent) => void;
  setButtonPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
}

const ColorDefinition: React.FC<ColorDefinitionProps> = ({ color, displayedText }) => {
  return (
    <HStack space="md" style={containerStyles.horizontalCentralContainer}>
      <View style={[styles.round, { backgroundColor: color }]} />
      <GradientHeading type="subheading" displayedText={i18n.t(displayedText)} />
    </HStack>
  );
};

const NoteStructure: React.FC<NoteStructureProps> = ({
  note,
  index,
  onPress,
  setButtonPosition,
}) => {
  const marginRight = -(index * 50) + 280;
  //TODO figire out proper margins for the lines and the notes

  return (
    <VStack>
      <VStack
        style={{
          borderBottomColor: secondaryColorNeonBlue,
          borderBottomWidth: 2,
          width: 360,
          zIndex: 0,
          marginEnd: 2,
        }}
      />
      <View
        onLayout={(event) => {
          const { x, y } = event.nativeEvent.layout;
          setButtonPosition({ x, y });
        }}
      />
      <RoundButton
        displayedText={note.noteName}
        onPress={onPress}
        backgroundColor={setStatusColor(note.status)}
        style={{
          marginStart: marginRight,
          zIndex: 1,
        }}
      />
    </VStack>
  );
};

export default function Progress() {
  const NUMBER_OF_NOTES = 6;

  const [currentlyDisplayedClef, setCurrentlyDisplayedClef] = useState(Clef.Soprano);
  const [infoModalVisibility, setInfoModalVisibility] = useState(false);
  const [, setNotesData] = useState<NotesData | undefined>();
  const [playedNotes, setPlayedNotes] = useState<NotePlay[]>([]);
  const [currentlyDisplayedNote, setCurrentlyDisplayedNote] = useState<NotePlay>();
  const [noteModalVisibility, setNoteModalVisibility] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const LINE_OFFSET_FROM_BUTTON = 10;
  const linePosition = {
    x: buttonPosition.x + LINE_OFFSET_FROM_BUTTON,
    y: buttonPosition.y + LINE_OFFSET_FROM_BUTTON,
  };

  useEffect(() => {
    const fetchNotes = async () => {
      const notes = await getNotesData(currentlyDisplayedClef);
      setNotesData(notes);
      setPlayedNotes(getNotes(notes));
    };
    fetchNotes();
  }, [currentlyDisplayedClef]);

  const handleNoteButtonPress = async (note: NotePlay) => {
    setCurrentlyDisplayedNote(note);
    setNoteModalVisibility(true);
  };

  return (
    <VStack style={containerStyles.mainContainerForPages}>
      <BackButton onPress={() => router.push('../home')} />
      <VStack style={styles.mainProgressContainer}>
        <HStack space="md" style={containerStyles.horizontalCentralContainer}>
          <GradientHeading type="heading" displayedText={i18n.t('progress')} />
          <NormalIcon icon={ChartLine} style={{ marginLeft: 8 }} />
        </HStack>
        <VStack style={styles.tutorialContainer}>
          <InfoButton onPress={() => setInfoModalVisibility(!infoModalVisibility)} />
        </VStack>
        <CustomReactDropdown
          value={currentlyDisplayedClef}
          setValue={setCurrentlyDisplayedClef}
          selectedItems={CLEFS}
        />
        <CustomPopUpModal
          modalVisibility={infoModalVisibility}
          setModalVisibility={setInfoModalVisibility}
        >
          <GradientHeading type="subheading" displayedText={i18n.t('colors')} />
          {Object.entries(StatusColors).map(([status, config]) => (
            <ColorDefinition
              displayedText={i18n.t(status)}
              color={config.background}
              key={status}
            />
          ))}
        </CustomPopUpModal>
        <VStack style={{ marginTop: '10%' }}>
          {playedNotes
            .slice(0, NUMBER_OF_NOTES)
            .reverse()
            .map((note, index) => (
              <NoteStructure
                note={note}
                clef={currentlyDisplayedClef}
                key={`NoteStructureWithIndex${index}`}
                index={index}
                onPress={() => handleNoteButtonPress(note)}
                setButtonPosition={setButtonPosition}
              />
            ))}
        </VStack>
        {noteModalVisibility && (
          <NoteModal
            buttonPosition={{
              x: linePosition.x,
              y: linePosition.y,
            }}
            noteName={
              currentlyDisplayedNote ? currentlyDisplayedNote.noteName : playedNotes[0].noteName
            }
            clef={currentlyDisplayedClef}
            setModalVisibility={setNoteModalVisibility}
          />
        )}
      </VStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  round: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  mainProgressContainer: {
    alignItems: 'center',
    marginTop: 45,
    flex: 1,
  },
  tutorialContainer: {
    position: 'relative',
    alignItems: 'flex-start',
    marginTop: 10,
    marginStart: '10%',
    width: '100%',
  },
});
