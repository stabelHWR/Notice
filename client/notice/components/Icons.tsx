import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { FontColors, secondaryColorNeonBlue, StatusColors } from '@/constants/Colors';
import { LucideIcon, CircleX, CircleCheck } from 'lucide-react-native';
import { MainGradient } from './Gradients';
import { shadowStyles } from './styles';
import { Icon } from '@/components/ui/icon';
import { PlayingStatus, RecordingStatus } from '@/types/noteTypes';

interface IconProps {
  icon: LucideIcon;
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xs';
  style?: StyleProp<ViewStyle>;
}

interface StatusIconProps extends Omit<IconProps, 'icon'> {
  status: PlayingStatus | RecordingStatus;
}

const NormalIcon: React.FC<IconProps> = ({ icon, color, style }) => {
  const iconOutlineColor = !color ? secondaryColorNeonBlue : color;
  return <Icon as={icon} color={iconOutlineColor} width={40} height={40} style={style} />;
};

const GradientIcon: React.FC<IconProps> = ({ icon, style }) => {
  return (
    <MainGradient style={styles.iconButtonHasFill}>
      <Icon
        as={icon}
        color={FontColors.light.background}
        width={40}
        height={40}
        style={style ? style : {}}
      />
    </MainGradient>
  );
};

const PlayedStatusIcon: React.FC<StatusIconProps> = ({ status, style }) => {
  const currentStatusIcon = status === 'failed' ? CircleX : CircleCheck;
  const iconColor =
    status === 'notPlayed' ? StatusColors.notPlayed.background : StatusColors.error.background;
  return <NormalIcon icon={currentStatusIcon} color={iconColor} style={style} />;
};

const styles = StyleSheet.create({
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
});

export { GradientIcon, NormalIcon, PlayedStatusIcon };
