import React from 'react';
import { Heading } from '@/components/ui/heading';
import { Center } from '@/components/ui/center';
import { GradientText } from './Gradients';
import { secondaryColorNeonBlue } from '@/constants/Colors';
import i18n from '@/constants/texts/Translations';
import { PlayingStatus } from '@/types/noteTypes';
import { setStatusColor } from '@/app/util/statusSetters';
import { StyleProp, ViewStyle } from 'react-native';
interface TextProps {
  displayedText: string;
  status?: PlayingStatus;
}

interface GradientHeadingProps extends TextProps {
  type: 'heading' | 'subheading';
  style?: StyleProp<ViewStyle>;
}

interface StatusHeadingProps {
  status: PlayingStatus;
  type: 'heading' | 'subheading';
  displayedText?: string;
}

const InfoText: React.FC<TextProps> = ({ displayedText, status }) => {
  const textColor = status ? setStatusColor(status) : secondaryColorNeonBlue;
  return (
    <Center>
      <Heading size="xl" style={{ color: textColor }}>
        {displayedText}
      </Heading>
    </Center>
  );
};

const BoldText: React.FC<TextProps> = ({ displayedText, status }) => {
  const textColor = status ? setStatusColor(status) : secondaryColorNeonBlue;
  return (
    <Center>
      <Heading size="xl" style={{ color: textColor, fontWeight: 'bold' }}>
        {displayedText}
      </Heading>
    </Center>
  );
};

const GradientHeading: React.FC<GradientHeadingProps> = ({ type, displayedText, style }) => {
  const size = type === 'heading' ? 36 : 25;
  return (
    <Center style={style}>
      <GradientText>
        <Heading style={{ fontSize: size }}>{displayedText}</Heading>
      </GradientText>
    </Center>
  );
};

const StatusHeading: React.FC<StatusHeadingProps> = ({ status, type, displayedText }) => {
  const statusText = displayedText
    ? displayedText
    : status === 'failed'
      ? `${i18n.t('wrong')}!`
      : status === 'success'
        ? `${i18n.t('great')}!`
        : '';
  const size = type === 'heading' ? 36 : 25;
  const textColor = status ? setStatusColor(status) : secondaryColorNeonBlue;

  return (
    <Center>
      <Heading style={{ color: textColor, fontSize: size }}>{statusText}</Heading>
    </Center>
  );
};

export { InfoText, BoldText, GradientHeading, StatusHeading };
