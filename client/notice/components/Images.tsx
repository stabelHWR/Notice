import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '@/components/ui/image';

const imagePath = '@/assets/images';

interface ImageProps {
  size: 'small' | 'medium' | 'large';
}

const Logo: React.FC<ImageProps> = ({ size }) => {
  const picWidth = size === 'large' ? 212 : size === 'medium' ? 92 : 50;
  const picHeight = size === 'large' ? 211 : size === 'medium' ? 95 : 50;

  return (
    <Image
      source={require(`${imagePath}/icon.png`)}
      alt="Logo"
      width={picWidth}
      height={picHeight}
    />
  );
};

const Note: React.FC<ImageProps> = ({ size }) => {
  const picWidth = size === 'large' ? 212 : size === 'medium' ? 92 : 50;
  const picHeight = size === 'large' ? 211 : size === 'medium' ? 95 : 50;
  return (
    <Image
      source={require(`${imagePath}/notes.png`)}
      alt="Logo"
      width={picWidth}
      height={picHeight}
    />
  );
};

ImageProps.propTypes = {
  size: PropTypes.string.isRequired,
};

export { Logo, Note };
