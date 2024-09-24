import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { Button, ButtonText } from '@/components/ui/button';
import { GestureResponderEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { MainGradient, SecondaryGradient } from './Gradients';
import { shadowStyles } from './styles';
import { FontColors, secondaryColorNeonBlue } from '@/constants/Colors';
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
} from 'lucide-react-native';
import { Icon } from '@/components/ui/icon';

interface GradientButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  displayedText: string;
}
interface RoundButtonProps extends GradientButtonProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xs';
}

interface RecordButtonProps extends Omit<GradientButtonProps, 'displayedText'> {
  isRecording: boolean;
}

interface GradientIconButtonProps extends Omit<RoundButtonProps, 'displayedText'> {
  hasFill?: boolean;
  style?: Record<string, any>;
}

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

const RoundGradientButton: React.FC<RoundButtonProps> = ({ onPress, icon, displayedText }) => {
  return (
    <Pressable onPress={onPress} style={styles.roundButton}>
      <SecondaryGradient style={styles.roundButton}>
        <Text style={styles.largeButtonText}>{displayedText}</Text>
        <Icon as={icon} color={FontColors.light.background} width={40} height={40} />
      </SecondaryGradient>
    </Pressable>
  );
};

//TODO: Define functions to stop and record
const RecordGradientButton: React.FC<RecordButtonProps> = ({ onPress, isRecording }) => {
  const usedIcon = isRecording ? Mic : MicOff;
  const text = isRecording ? 'Record' : 'Stop';

  return <RoundGradientButton displayedText={text} onPress={onPress} icon={usedIcon} />;
};

const GradientIconButton: React.FC<GradientIconButtonProps> = ({ onPress, icon, hasFill }) => {
  return (
    <Pressable
      onPress={onPress}
      style={hasFill ? styles.iconButtonHasFill : styles.iconButtonHasNoFill}
    >
      {hasFill ? (
        <MainGradient style={styles.iconButtonHasFill}>
          <Icon as={icon} color={FontColors.light.background} width={40} height={40} />
        </MainGradient>
      ) : (
        <Icon as={icon} color={secondaryColorNeonBlue} width={40} height={40} />
      )}
    </Pressable>
  );
};
const InfoButton: React.FC<Omit<GradientIconButtonProps, 'icon' | 'style' | 'hasFill'>> = ({
  onPress,
}) => {
  return <GradientIconButton icon={Info} onPress={onPress} size="xl" hasFill={true} />;
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
const ScrollButtonDown: React.FC<Omit<GradientIconButtonProps, 'icon' | 'style' | 'hasFill'>> = ({
  onPress,
}) => {
  return <GradientIconButton icon={ChevronDown} onPress={onPress} size="lg" hasFill={true} />;
};
const ScrollButton: React.FC<ScrollLeftAndRightButtonProps> = ({ onPress, isLeft }) => {
  const usedIcon = isLeft ? ChevronLeft : ChevronRight;
  return <GradientIconButton icon={usedIcon} onPress={onPress} size="lg" hasFill={false} />;
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
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  roundButton: {
    width: 101,
    height: 103,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    ...shadowStyles,
  },
  iconButtonHasFill: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    ...shadowStyles,
  },
  iconButtonHasNoFill: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
});

export {
  RectangleGradientButton,
  RecordGradientButton,
  GradientIconButton,
  ScrollButtonDown,
  ScrollButton,
  InfoButton,
  CloseButton,
};
