import { RecordGradientButton, RectangleGradientButton } from '@/components/GradientButton';
import { GradientHeading } from '@/components/TextElements';
import { Inter_900Black, Inter_500Medium, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { containerStayles } from '@/components/styles';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_900Black,
    Inter_500Medium,
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  const openPopup = () => {
    console.log('hi');
    setVisible(true);
  };

  const closePopup = () => {
    setVisible(false);
  };

  return (
    <VStack style={containerStayles.mainCentralContainer}>
      <GradientHeading type="heading" displayedText={'heading'} />
      <GradientHeading type="subheading" displayedText={'subheading'} />

      <RecordGradientButton
        isRecording={true}
        onPress={function (): void {
          console.log('is recording');
        }}
      />
      <RectangleGradientButton displayedText={'hihi'} onPress={openPopup} />
    </VStack>
  );
}
