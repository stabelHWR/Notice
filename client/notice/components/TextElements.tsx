import React from 'react';
import { Heading } from '@/components/ui/heading';
import { Center } from '@/components/ui/center';
import { GradientText } from './Gradients';
import { secondaryColorNeonBlue } from '@/constants/Colors';

interface TextProps {
  displayedText: string;
}

interface GradientHeadingProps extends TextProps {
  type: 'heading' | 'subheading';
}

const InfoText: React.FC<TextProps> = ({ displayedText }) => {
  return (
    <Center>
      <Heading size="xl" style={{ color: secondaryColorNeonBlue }}>
        {displayedText}
      </Heading>
    </Center>
  );
};

const BoldText: React.FC<TextProps> = ({ displayedText }) => {
  return (
    <Center>
      <Heading size="xl" style={{ color: secondaryColorNeonBlue }} bold={true}>
        {displayedText}
      </Heading>
    </Center>
  );
};

const GradientHeading: React.FC<GradientHeadingProps> = ({ type, displayedText }) => {
  const size = type === 'heading' ? '5xl' : '3xl';
  return (
    <Center>
      <GradientText>
        <Heading size={size}>{displayedText}</Heading>
      </GradientText>
    </Center>
  );
};

export { InfoText, BoldText, GradientHeading };
