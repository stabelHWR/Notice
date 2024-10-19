import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet } from 'react-native';
import { VStack } from './ui/vstack';
import { backgroundColor, secondaryColorNeonBlue } from '@/constants/Colors';
import i18n from '@/constants/texts/Translations';
import { GradientHeading } from './TextElements';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { containerStyles, shadowStyles } from './styles';
import { Clef } from '@/types/noteTypes';
import { CoordinatesTuple } from '@/types/componentTypes';
import { HStack } from './ui/hstack';
import { NotePlayImage } from './Images';
import { CloseButton, PlayButton, RectangleGradientButton } from './CustomButtons';
import { loadSound, playSound, stopSound, unloadSound } from '@/app/util/playSound';
import { Audio } from 'expo-av';
import { AllNotes } from '@/constants/texts/Notes';

interface ModalProps {
  setModalVisibility: (visibility: boolean) => void;
}
interface CustomPopUpModalProps extends ModalProps {
  modalVisibility: boolean;
  children: React.ReactNode;
}

interface NoteModalProps extends ModalProps {
  buttonPosition: CoordinatesTuple;
  noteName: AllNotes;
  clef: Clef;
}

const CustomPopUpModal: React.FC<CustomPopUpModalProps> = ({
  children,
  modalVisibility,
  setModalVisibility,
}) => {
  return (
    <Modal
      visible={modalVisibility}
      animationType="fade"
      transparent={true}
      statusBarTranslucent={true}
    >
      <VStack style={styles.content}>
        <VStack style={styles.card}>
          <VStack style={{ marginBottom: 40 }}>
            <CloseButton onPress={() => setModalVisibility(false)} />
          </VStack>
          {children}
        </VStack>
      </VStack>
    </Modal>
  );
};

const NoteModal: React.FC<NoteModalProps> = ({
  noteName,
  clef,
  buttonPosition,
  setModalVisibility,
}) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const router = useRouter();
  const yCoordinate = buttonPosition.y - 20;
  const xCoordinate = buttonPosition.x;

  useEffect(() => {
    const isMounted = true;
    router.setParams({ selectedNoteName: noteName, selectedClef: clef });

    (async () => {
      const newSound = await loadSound(clef, noteName);
      if (isMounted) {
        setSound(newSound);
      }
    })();
  }, []);

  const handleCloseButton = () => {
    if (sound) {
      unloadSound(sound);
    }
    setModalVisibility(false);
    stopSound(sound);
  };

  return (
    <VStack style={styles.noteModalLayout}>
      <VStack style={{ marginLeft: 2, marginBottom: 5 }}>
        <CloseButton onPress={() => handleCloseButton()} />
      </VStack>
      <HStack
        style={[
          styles.popupBox,
          {
            top: yCoordinate,
            left: xCoordinate,
          },
        ]}
      >
        <VStack style={{ margin: 9, justifyContent: 'space-evenly', alignItems: 'center' }}>
          <HStack space="md" style={[containerStyles.horizontalCentralContainer, { margin: 12 }]}>
            <GradientHeading displayedText={noteName} type={'heading'} style={{ marginRight: 5 }} />
            <PlayButton onPress={() => playSound(sound)} />
          </HStack>
          <RectangleGradientButton
            onPress={() =>
              router.push({
                pathname: './practice',
                params: { selectedNoteName: noteName, selectedClef: clef },
              })
            }
            displayedText={i18n.t('play')}
          />
        </VStack>
        <NotePlayImage noteName={noteName} clef={clef} size="small" />
      </HStack>
    </VStack>
  );
};

export { CustomPopUpModal, NoteModal };

const styles = StyleSheet.create({
  card: {
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 8,
    borderColor: secondaryColorNeonBlue,
  },
  noteModalLayout: {
    width: '100%',
    padding: 8,
    borderColor: secondaryColorNeonBlue,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex: 1,
  },
  content: {
    justifyContent: 'space-evenly',
    borderColor: secondaryColorNeonBlue,
    backgroundColor: backgroundColor,
  },
  popupBox: {
    flexDirection: 'row',
    width: 200,
    padding: 2,
    marginTop: 2,
    marginLeft: 4,
    backgroundColor: backgroundColor,
    borderRadius: 10,
    ...shadowStyles,
  },
});
