import React from 'react';
import { RectangleGradientButton } from '@/components/GradientButton';
import { Logo } from '@/components/Images';
import { ThreeNotes } from '@/components/Svgs';
import { GradientHeading } from '@/components/TextElements';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { APP_NAME } from '@/constants/texts/Strings';
import i18n from '@/constants/texts/Translations';
import { containerStyles } from '@/components/styles';
import { useRouter } from 'expo-router';

export default function BeginnerQuiz() {
  const router = useRouter();
  return (
    <VStack style={containerStyles.mainCentralContainer}>
      <HStack space="md" style={containerStyles.horizontalCentralContainer}>
        <GradientHeading type="heading" displayedText={APP_NAME} />
        <Logo size={'small'} />
      </HStack>
      <VStack style={containerStyles.buttonCointainer}>
        <RectangleGradientButton
          displayedText={i18n.t('practice')}
          onPress={() => console.log('practice')}
        />
        <RectangleGradientButton
          displayedText={i18n.t('tutorials')}
          onPress={() => router.push('./tutorials')}
        />
        <RectangleGradientButton
          displayedText={i18n.t('progress')}
          onPress={() => console.log('progress')}
        />
        <RectangleGradientButton
          displayedText={i18n.t('settings')}
          onPress={() => router.push('./settings')}
        />
      </VStack>
      <ThreeNotes width={100} height={100} />
    </VStack>
  );
}
