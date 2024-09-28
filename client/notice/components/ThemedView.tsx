import React from 'react';
import { StyleSheet } from 'react-native';
import { View, type ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { backgroundColor as backgroundColorString } from '@/constants/Colors';
import { MainGradient } from './Gradients';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  lightColor = backgroundColorString;
  darkColor = backgroundColorString;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (
    <View style={[{ backgroundColor }, style]} {...otherProps}>
      <MainGradient style={styles.linearElementGradient}>
        <View />
      </MainGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  linearElementGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 360,
    height: 113,
  },
});
