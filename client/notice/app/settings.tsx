import React from 'react';
import { StyleSheet } from 'react-native';
import { ThreeNotes } from '@/components/Svgs';
import { GradientHeading } from '@/components/TextElements';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import i18n from '@/constants/texts/Translations';
import { containerStyles } from '@/components/styles';
import { Icon } from '@/components/ui/icon';
import { secondaryColorNeonBlue } from '@/constants/Colors';
import { Settings as SettingsIcon, Volume1, Pencil } from 'lucide-react-native';
import { CloseButton } from '@/components/GradientButton';
import { useRouter } from 'expo-router';

export default function Settings() {
  const router = useRouter();
  return (
    <VStack style={containerStyles.mainContainerForPages}>
      <CloseButton onPress={() => router.push('./home')} />
      <VStack style={containerStyles.mainCentralContainer}>
        <HStack space="md" style={containerStyles.horizontalCentralContainer}>
          <GradientHeading type="heading" displayedText={i18n.t('settings')} />
          <Icon as={SettingsIcon} color={secondaryColorNeonBlue} width={40} height={40} />
        </HStack>
        <VStack style={styles.buttonCointainer}>
          <HStack space="md" style={containerStyles.horizontalCentralContainer}>
            <GradientHeading type="subheading" displayedText={i18n.t('name')} />
            <Icon
              as={Pencil}
              color={secondaryColorNeonBlue}
              width={40}
              height={40}
              style={{ marginStart: 50 }}
            />
          </HStack>
          <HStack space="md" style={containerStyles.horizontalCentralContainer}>
            <GradientHeading type="subheading" displayedText={i18n.t('volume')} />
            <Icon
              as={Volume1}
              color={secondaryColorNeonBlue}
              width={40}
              height={40}
              style={{ marginStart: 50 }}
            />
          </HStack>
        </VStack>
        <ThreeNotes width={100} height={100} />
      </VStack>
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
