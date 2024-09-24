import React from 'react';
import { ThreeNotes } from '@/components/Svgs';
import { GradientHeading } from '@/components/TextElements';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import i18n from '@/constants/texts/Translations';
import { containerStyles } from '@/components/styles';
import { Icon } from '@/components/ui/icon';
import { secondaryColorNeonBlue } from '@/constants/Colors';
import { Settings as SettingsIcon, Volume1, Pencil, LucideIcon } from 'lucide-react-native';
import { CloseButton } from '@/components/GradientButton';
import { useRouter } from 'expo-router';

interface SettingProps {
  displayedText: string;
  icon: LucideIcon;
}

const Setting: React.FC<SettingProps> = ({ icon, displayedText }) => {
  return (
    <HStack space="md" style={containerStyles.horizontalCentralContainer}>
      <GradientHeading type="subheading" displayedText={i18n.t(displayedText)} />
      <Icon
        as={icon}
        color={secondaryColorNeonBlue}
        width={40}
        height={40}
        style={{ marginStart: 50 }}
      />
    </HStack>
  );
};

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
        <VStack style={containerStyles.buttonCointainer}>
          <Setting displayedText={'name'} icon={Pencil} />
          <Setting displayedText={'volume'} icon={Volume1} />
        </VStack>
        <ThreeNotes width={100} height={100} />
      </VStack>
    </VStack>
  );
}
