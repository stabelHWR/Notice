import React from 'react';
import { Image } from '@/components/ui/image';
import i18n from '@/constants/texts/Translations';

const imagePath = '@/assets/images';

interface ImageProps {
  size: 'small' | 'medium' | 'large';
}

const Logo: React.FC<ImageProps> = ({ size }) => {
  const pickedSize = size === 'large' ? 'lg' : size === 'medium' ? 'md' : 'xs';
  const pickedImage =
    size === 'large' || size === 'medium'
      ? require(`${imagePath}/icon.png`)
      : require(`${imagePath}/favicon.png`);
  return <Image source={pickedImage} alt="Logo" size={pickedSize} />;
};

const Note: React.FC<ImageProps> = ({ size }) => {
  const pickedSize = size === 'large' ? 'lg' : size === 'medium' ? 'md' : 'xs';
  return <Image source={require(`${imagePath}/notes.png`)} size={pickedSize} alt="Logo" />;
};
const FluteTutorial = () => {
  const fluteTutorialImage =
    i18n.locale === 'en'
      ? require(`${imagePath}/FluteTutorialEN.png`)
      : require(`${imagePath}/FluteTutorialDE.png`);

  return <Image source={fluteTutorialImage} size="2xl" alt="FluteTutorial" />;
};

export { Logo, Note, FluteTutorial };
