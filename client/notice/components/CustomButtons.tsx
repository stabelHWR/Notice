import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import React from 'react';
import { Button, ButtonText } from '@/components/ui/button';
import { GestureResponderEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { MainGradient, SecondaryGradient } from './Gradients';
import { shadowStyles } from './styles';
import { FontColors } from '@/constants/Colors';
import { ButtonFontSize, FontWeight } from '@/constants/Fonts';
import {
  LucideIcon,
  Mic,
  MicOff,
  Info,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
  Play,
  ChevronUp,
} from 'lucide-react-native';
import { Icon } from '@/components/ui/icon';
import { GradientIcon, NormalIcon } from './Icons';

interface GradientButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  displayedText: string;
}
interface RoundButtonProps extends GradientButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xs';
}
interface NoteRoundButtonProps extends RoundButtonProps {
  backgroundColor: string;
  style?: StyleProp<ViewStyle>;
}
interface GradientRoundButtonProps extends RoundButtonProps {
  icon: LucideIcon;
}

interface RecordButtonProps extends Omit<GradientButtonProps, 'displayedText'> {
  isRecording: boolean;
}

interface GradientIconButtonProps extends Omit<GradientRoundButtonProps, 'displayedText'> {
  hasFill?: boolean;
  style?: StyleProp<ViewStyle>;
}

type ScrollUpAndDownButtonProps = Omit<GradientIconButtonProps, 'hasFill' | 'icon'> & {
  isUp: boolean;
};
type ScrollLeftAndRightButtonProps = Omit<GradientIconButtonProps, 'hasFill' | 'icon'> & {
  isLeft: boolean;
};

const RectangleGradientButton: React.FC<GradientButtonProps> = ({ onPress, displayedText }) => {
  return (
    <Button style={styles.rectangleButton} onPress={onPress} size="xl" variant="solid">
      <MainGradient style={styles.linearGradient}>
        <ButtonText style={styles.largeButtonText}>{displayedText}</ButtonText>
      </MainGradient>
    </Button>
  );
};

const RoundGradientButton: React.FC<GradientRoundButtonProps> = ({
  onPress,
  icon,
  displayedText,
}) => {
  const WIDTH = 75;
  const HEIGHT = 75;
  return (
    <Pressable onPress={onPress}>
      <SecondaryGradient style={[styles.roundButton, { width: WIDTH, height: HEIGHT }]}>
        <Text style={styles.smallButtonText}>{displayedText}</Text>
        <Icon as={icon} color={FontColors.light.background} width={30} height={30} />
      </SecondaryGradient>
    </Pressable>
  );
};

const RecordGradientButton: React.FC<RecordButtonProps> = ({ onPress, isRecording }) => {
  const usedIcon = isRecording ? Mic : MicOff;
  const text = isRecording ? 'Record' : 'Stop';

  return <RoundGradientButton displayedText={text} onPress={onPress} icon={usedIcon} />;
};

const GradientIconButton: React.FC<GradientIconButtonProps> = ({
  onPress,
  icon,
  hasFill,
  style,
}) => {
  return (
    <Pressable onPress={onPress} style={style}>
      {hasFill ? <GradientIcon icon={icon} /> : <NormalIcon icon={icon} />}
    </Pressable>
  );
};

const InfoButton: React.FC<Omit<GradientIconButtonProps, 'icon' | 'style' | 'hasFill'>> = ({
  onPress,
}) => {
  return <GradientIconButton icon={Info} onPress={onPress} size="xl" hasFill={true} />;
};
const PlayButton: React.FC<Omit<GradientIconButtonProps, 'icon' | 'style' | 'hasFill'>> = ({
  onPress,
}) => {
  return <GradientIconButton icon={Play} onPress={onPress} size="xl" hasFill={true} />;
};

const CloseButton: React.FC<Omit<GradientIconButtonProps, 'icon' | 'hasFill'>> = ({ onPress }) => {
  return (
    <GradientIconButton
      icon={X}
      onPress={onPress}
      size="xl"
      hasFill={false}
      style={styles.closeButton}
    />
  );
};
const BackButton: React.FC<Omit<GradientIconButtonProps, 'icon' | 'hasFill'>> = ({ onPress }) => {
  return (
    <GradientIconButton
      icon={ChevronLeft}
      onPress={onPress}
      size="xl"
      hasFill={false}
      style={styles.closeButton}
    />
  );
};

const RoundButton: React.FC<NoteRoundButtonProps> = ({
  onPress,
  displayedText,
  backgroundColor,
  style,
}) => {
  const WIDTH = 48;
  const HEIGHT = 48;

  return (
    <Pressable
      onPress={onPress}
      style={[
        { backgroundColor: backgroundColor, width: WIDTH, height: HEIGHT },
        styles.roundButton,
        style,
      ]}
    >
      <Text style={styles.largeButtonText}>{displayedText}</Text>
    </Pressable>
  );
};

const ScrollUpOrDownButton: React.FC<Omit<ScrollUpAndDownButtonProps, 'icon' | 'hasFill'>> = ({
  onPress,
  isUp,
  style,
}) => {
  const usedIcon = isUp ? ChevronUp : ChevronDown;
  return (
    <GradientIconButton icon={usedIcon} onPress={onPress} size="lg" hasFill={false} style={style} />
  );
};

const ScrollToTheSideButton: React.FC<ScrollLeftAndRightButtonProps> = ({
  onPress,
  isLeft,
  style,
}) => {
  const usedIcon = isLeft ? ChevronLeft : ChevronRight;
  return (
    <GradientIconButton icon={usedIcon} onPress={onPress} size="lg" hasFill={false} style={style} />
  );
};

export {
  RectangleGradientButton,
  RecordGradientButton,
  GradientIconButton,
  ScrollUpOrDownButton,
  ScrollToTheSideButton,
  InfoButton,
  CloseButton,
  RoundButton,
  PlayButton,
  BackButton,
};

const styles = StyleSheet.create({
  rectangleButton: {
    borderRadius: 5,
    justifyContent: 'center',
    textAlign: 'center',
    width: '70%',
    height: 45,
    ...shadowStyles,
  },
  largeButtonText: {
    color: FontColors.light.background,
    fontSize: ButtonFontSize.large,
    fontFamily: 'Inter_500Medium',
    fontWeight: FontWeight,
  },
  smallButtonText: {
    color: FontColors.light.background,
    fontSize: ButtonFontSize.small,
    fontFamily: 'Inter_500Medium',
    fontWeight: FontWeight,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  roundButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    ...shadowStyles,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
});
