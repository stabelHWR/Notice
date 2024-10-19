import { router } from 'expo-router';
import React from 'react';
import { RectangleGradientButton } from '@/components/CustomButtons';
import { Logo } from '@/components/Images';
import i18n from '@/constants/texts/Translations';
import { containerStyles } from '@/components/styles';
import { OneNote } from '@/components/Svgs';
import { BoldText } from '@/components/TextElements';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';

export default function NotFoundScreen() {
  return (
    <VStack style={containerStyles.mainCentralContainer}>
      <HStack space="md" style={containerStyles.horizontalCentralContainer}>
        <BoldText displayedText={i18n.t('thisPageDoesNotExist')} />
        <OneNote width={50} height={50} />
      </HStack>
      <Logo size="large" />
      <RectangleGradientButton
        displayedText={i18n.t('goBack')}
        onPress={() => router.push('./home')}
      />
    </VStack>
  );
}
