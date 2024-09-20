import React from 'react';

import { RectangleGradientButton } from '@/components/GradientButton';
import { Logo } from '@/components/Images';
import { StyleSheet } from 'react-native';
import { ThreeNotes } from '@/components/Svgs';
import { GradientHeading } from '@/components/TextElements';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { questions } from '@/constants/texts/Questions';
import { APP_NAME } from '@/constants/texts/Strings';
import i18n from '@/constants/texts/Translations';
import { containerStyles } from '@/components/styles';

export default function BeginnerQuiz() {
  return (
    <VStack style={containerStyles.mainCentralContainer}>
      <HStack space="md" style={containerStyles.horizontalCentralContainer}>
        <GradientHeading type="heading" displayedText={APP_NAME} />
        <Logo size={'small'} />
      </HStack>
      <VStack style={styles.buttonCointainer}>
        <RectangleGradientButton
          displayedText={i18n.t('practice')}
          onPress={() => console.log('practice')}
        />
        <RectangleGradientButton
          displayedText={i18n.t('tutorials')}
          onPress={() => console.log('tutorials')}
        />
        <RectangleGradientButton
          displayedText={i18n.t('progress')}
          onPress={() => console.log('progress')}
        />
        <RectangleGradientButton
          displayedText={i18n.t('settings')}
          onPress={() => console.log('settings')}
        />
      </VStack>
      <ThreeNotes width={100} height={100} />
    </VStack>
  );
}
const styles = StyleSheet.create({
  buttonCointainer: {
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
    height: '50%',
  },
});
