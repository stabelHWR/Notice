import { Image } from '@/components/ui/image';

const imagePath = '@/assets/images/images';
const BigLogo = () => {
  return <Image source={require(`${imagePath}/icon.png`)} alt="Logo" width={208} height={320} />;
};

const Note = () => {
  return <Image source={require(`${imagePath}/notes.png`)} alt="Logo" width={208} height={320} />;
};

export { BigLogo, Note };
