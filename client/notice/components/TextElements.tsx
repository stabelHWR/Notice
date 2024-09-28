import React from 'react';
import { Heading } from '@/components/ui/heading';
import { Center } from '@/components/ui/center';
import { GradientText } from './Gradients';
import { secondaryColorNeonBlue, StatusColors } from '@/constants/Colors';
import i18n from '@/constants/texts/Translations';
import { PlayingStatus } from '@/types/noteTypes';
interface TextProps {
  displayedText: string;
  status?: PlayingStatus;
}

interface GradientHeadingProps extends TextProps {
  type: 'heading' | 'subheading';
}

interface StatusHeadingProps {
  status: PlayingStatus;
  type: 'heading' | 'subheading';
  displayedText?: string;
}

const setStatuscolor = (status: PlayingStatus) => {
  const textColor =
    status === 'notPlayed'
      ? StatusColors.notPlayed.background
      : status === 'failed'
        ? StatusColors.error.background
        : status === 'success'
          ? StatusColors.success.background
          : secondaryColorNeonBlue;
  return textColor;
};

const InfoText: React.FC<TextProps> = ({ displayedText, status }) => {
  const textColor = status ? setStatuscolor(status) : secondaryColorNeonBlue;
  return (
    <Center>
      <Heading size="xl" style={{ color: textColor }}>
        {displayedText}
      </Heading>
    </Center>
  );
};

const BoldText: React.FC<TextProps> = ({ displayedText, status }) => {
  const textColor = status ? setStatuscolor(status) : secondaryColorNeonBlue;
  return (
    <Center>
      <Heading size="xl" style={{ color: textColor }} bold={true}>
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

const StatusHeading: React.FC<StatusHeadingProps> = ({ status, type, displayedText }) => {
  const statusText =
    status === 'failed' && !displayedText
      ? `${i18n.t('wrong')}!`
      : status === 'success' && !displayedText
        ? `${i18n.t('great')}!`
        : displayedText;
  const size = type === 'heading' ? '5xl' : '3xl';
  const textColor = status ? setStatuscolor(status) : secondaryColorNeonBlue;

  return (
    <Center>
      <Heading size={size} style={{ color: textColor }}>
        {statusText}
      </Heading>
    </Center>
  );
};

export { InfoText, BoldText, GradientHeading, StatusHeading };
