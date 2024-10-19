import { startGradientCoordinates, endGradientCoordinates } from '@/constants/Coordinates';
import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GradientColors } from '@/constants/Colors';
import MaskedView from '@react-native-masked-view/masked-view';

const PrimaryGradientColors = [
  GradientColors.grape,
  GradientColors.neonBlue,
  GradientColors.vividSkyBlue,
];
const SecondaryGradientColors = [GradientColors.neonBlue, GradientColors.vividSkyBlue];

interface GradientHeadingProps {
  children: React.ReactNode;
  gradientColors: string[];
  style?: StyleProp<ViewStyle>;
}

interface GradientTextProps {
  children: React.ReactNode;
  maskElement?: React.ReactElement;
  hiddenElement?: React.ReactElement;
  style?: object;
}

interface DefinedGradientProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Gradient: React.FC<GradientHeadingProps> = ({ children, gradientColors, style }) => {
  return (
    <LinearGradient
      colors={gradientColors}
      style={style}
      start={startGradientCoordinates}
      end={endGradientCoordinates}
    >
      {children}
    </LinearGradient>
  );
};

const MainGradient: React.FC<DefinedGradientProps> = ({ children, style }) => {
  return (
    <Gradient gradientColors={PrimaryGradientColors} style={style}>
      {children}
    </Gradient>
  );
};
const SecondaryGradient: React.FC<DefinedGradientProps> = ({ children, style }) => {
  return (
    <Gradient gradientColors={SecondaryGradientColors} style={style}>
      {children}
    </Gradient>
  );
};

const GradientText: React.FC<GradientTextProps> = ({
  children,
  style,
  maskElement,
  hiddenElement,
}) => {
  const defaultMaskElement = <Text style={[style, { color: 'black' }]}>{children}</Text>;
  const defaultHiddenElement = <Text style={[style, { opacity: 0 }]}>{children}</Text>;

  return (
    <MaskedView maskElement={maskElement || defaultMaskElement}>
      <LinearGradient
        colors={PrimaryGradientColors}
        start={startGradientCoordinates}
        end={endGradientCoordinates}
      >
        {hiddenElement || defaultHiddenElement}
      </LinearGradient>
    </MaskedView>
  );
};

export { MainGradient, SecondaryGradient, GradientText };
