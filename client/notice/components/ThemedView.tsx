import { View, type ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { backgroundColor as backgroundColorString } from '@/constants/Colors';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: backgroundColorString, dark: backgroundColorString },
    'background'
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
