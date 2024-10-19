import React from 'react';
import { Logo } from '@/components/Images';
import { GradientHeading } from '@/components/TextElements';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import i18n from '@/constants/texts/Translations';
import { containerStyles } from '@/components/styles';
import { useRouter } from 'expo-router';
import { RectangleGradientButton } from '@/components/CustomButtons';
import { APP_NAME } from '@/constants/texts/AppStrings';
import { getCurrentInstrument } from './util/notesUtils';

export default function BeginnerQuiz() {
  const router = useRouter();
  return (
    <VStack style={containerStyles.mainCentralContainer}>
      <HStack space="md" style={containerStyles.horizontalCentralContainer}>
        <GradientHeading type="heading" displayedText={APP_NAME} />
      </HStack>
      <GradientHeading type="subheading" displayedText={i18n.t(getCurrentInstrument())} />
      <VStack style={containerStyles.buttonContainer}>
        <RectangleGradientButton
          displayedText={i18n.t('tutorials')}
          onPress={() => router.push('./tutorials')}
        />
        <RectangleGradientButton
          displayedText={i18n.t('progress')}
          onPress={() => router.push('./(progress)/progress')}
        />
        <RectangleGradientButton
          displayedText={i18n.t('settings')}
          onPress={() => router.push('./settings')}
        />
      </VStack>
      <Logo size={'large'} />
    </VStack>
  );
}
