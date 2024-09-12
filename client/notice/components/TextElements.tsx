import React from 'react';
import { Heading } from '@/components/ui/heading';
import { Center } from '@/components/ui/center';
import { GradientText } from './Gradients';
import { secondaryColorNeonBlue } from '@/constants/Colors';

type TextProps = {
  displayedText: string;
};

type GradientHeadingProps = TextProps & {
  type: 'heading' | 'subheading';
};

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
  return (
    <Center>
      <GradientText>
        {type === 'heading' ? (
          <Heading size="5xl">{displayedText}</Heading>
        ) : (
          <Heading size="3xl">{displayedText}</Heading>
        )}
      </GradientText>
    </Center>
  );
};

export { InfoText, BoldText, GradientHeading };
