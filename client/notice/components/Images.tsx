import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Image } from '@/components/ui/image';
import i18n from '@/constants/texts/Translations';

const imagePath = '@/assets/images';

interface ImageProps {
  size: 'small' | 'medium' | 'large';
}
interface NotePlayOnFluteImageProps {
  noteName: string;
}
const imagePathMap: { [key: string]: ImageSourcePropType } = {
  c: require('@/assets/images/notes/cNote.png'),
  d: require('@/assets/images/notes/dNote.png'),
  // Add other notes here
  // e: require('@/assets/notes/eNote.png'),
  // f: require('@/assets/notes/fNote.png'),
  // You can continue adding other note images...
};

const Logo: React.FC<ImageProps> = ({ size }) => {
  const pickedSize = size === 'large' ? 'lg' : size === 'medium' ? 'md' : 'xs';
  const pickedImage =
    size === 'large' || size === 'medium'
      ? require(`${imagePath}/icons/icon.png`)
      : require(`${imagePath}/icons/favicon.png`);
  return <Image source={pickedImage} alt="Logo" size={pickedSize} />;
};

const Note: React.FC<ImageProps> = ({ size }) => {
  const pickedSize = size === 'large' ? 'lg' : size === 'medium' ? 'md' : 'xs';
  return <Image source={require(`${imagePath}/notes.png`)} size={pickedSize} alt="Logo" />;
};
const FluteTutorial = () => {
  const fluteTutorialImage =
    i18n.locale === 'en'
      ? require(`${imagePath}/FluteTutorial/FluteTutorialEN.png`)
      : require(`${imagePath}/FluteTutorial/FluteTutorialDE.png`);

  return <Image source={fluteTutorialImage} size="2xl" alt="FluteTutorial" />;
};
const NotePlayOnFluteImage: React.FC<NotePlayOnFluteImageProps> = ({ noteName }) => {
  const lowerCaseNoteName = noteName.toLowerCase();

  const pathToPlayPicture = imagePathMap[lowerCaseNoteName];

  return <Image source={pathToPlayPicture} size="2xl" alt={`${noteName} Note`} />;
};

export { Logo, Note, FluteTutorial, NotePlayOnFluteImage };
