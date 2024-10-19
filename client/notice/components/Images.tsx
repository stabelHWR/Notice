import React from 'react';
import { Image } from '@/components/ui/image';
import i18n from '@/constants/texts/Translations';
import { Clef } from '@/types/noteTypes';
import { CustomSize } from '@/types/componentTypes';
import getImage from '@/assets/images';
import { getCurrentInstrument } from '@/app/util/notesUtils';
import { AllNotes } from '@/constants/texts/Notes';

interface ImageProps {
  size: CustomSize;
}
interface NotePlayImageProps extends ImageProps {
  noteName: AllNotes;
  clef: Clef;
}

const currentInstrument = getCurrentInstrument();
const Logo: React.FC<ImageProps> = ({ size }) => {
  const pickedSize = size === 'large' ? 'lg' : size === 'medium' ? 'md' : 'xs';
  const pickedImage = getImage('icons', size);
  return <Image source={pickedImage} alt="Logo" size={pickedSize} />;
};

const NoteImage: React.FC<ImageProps> = ({ size }) => {
  const pickedSize = size === 'large' ? 'lg' : size === 'medium' ? 'md' : 'xs';
  const noteImage = getImage('inApp', 'notes');

  return <Image source={noteImage} size={pickedSize} alt="Logo" />;
};

const TutorialImage = () => {
  const fluteTutorialImage = getImage(currentInstrument, i18n.locale);

  return <Image source={fluteTutorialImage} size="2xl" alt="FluteTutorial" />;
};

const NotePlayImage: React.FC<NotePlayImageProps> = ({ clef, noteName, size }) => {
  const pathToPlayPicture = getImage(currentInstrument, noteName, clef, size);

  return <Image source={pathToPlayPicture} alt={`${noteName} Note`} />;
};

export { Logo, NoteImage, TutorialImage, NotePlayImage };
