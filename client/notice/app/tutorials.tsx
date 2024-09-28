import React, { useState } from 'react';
import { BoldText, GradientHeading, InfoText } from '@/components/TextElements';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import i18n from '@/constants/texts/Translations';
import { containerStyles } from '@/components/styles';
import { FlatList, StyleSheet } from 'react-native';
import { CloseButton, InfoButton } from '@/components/GradientButton';
import { useRouter } from 'expo-router';
import { FluteTutorial, Logo } from '@/components/Images';
import CustomModal from '@/components/Modal';

type dataArray = {
  boldDisplayedText: string;
  infoDisplayedText: string;
};
interface InfoListElementProps {
  heading: string;
  data: Array<dataArray>;
}
const sides: Array<dataArray> = [
  { boldDisplayedText: 'L', infoDisplayedText: 'left' },
  { boldDisplayedText: 'R', infoDisplayedText: 'right' },
];

const fingersEN: Array<dataArray> = [
  { boldDisplayedText: 'I', infoDisplayedText: 'indexFinger' },
  { boldDisplayedText: 'R', infoDisplayedText: 'ringFinger' },
  { boldDisplayedText: 'M', infoDisplayedText: 'middleFinger' },
  { boldDisplayedText: 'L', infoDisplayedText: 'littleFinger' },
  { boldDisplayedText: 'T', infoDisplayedText: 'thumb' },
];
const fingersDE: Array<dataArray> = [
  { boldDisplayedText: 'Z', infoDisplayedText: 'indexFinger' },
  { boldDisplayedText: 'R', infoDisplayedText: 'ringFinger' },
  { boldDisplayedText: 'M', infoDisplayedText: 'middleFinger' },
  { boldDisplayedText: 'K', infoDisplayedText: 'littleFinger' },
  { boldDisplayedText: 'D', infoDisplayedText: 'thumb' },
];

const InfoListTextElement: React.FC<InfoListElementProps> = ({ data, heading }) => {
  return (
    <VStack style={{ marginBottom: 1, marginLeft: 30 }}>
      <GradientHeading type="subheading" displayedText={i18n.t(heading)} />
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <HStack style={containerStyles.horizontalCentralContainer}>
              <BoldText displayedText={`\u2022 ${item.boldDisplayedText}:`} />
              <InfoText displayedText={i18n.t(item.infoDisplayedText)} />
            </HStack>
          );
        }}
      />
    </VStack>
  );
};

export default function Tutorials() {
  const router = useRouter();
  const [modalVisibility, setModalVisibility] = useState(false);
  const fingerArray = i18n.locale === 'en' ? fingersEN : fingersDE;

  return (
    <VStack style={containerStyles.mainContainerForPages}>
      <CloseButton onPress={() => router.push('./home')} />
      <VStack style={containerStyles.mainCentralContainer}>
        <HStack space="md" style={containerStyles.horizontalCentralContainer}>
          <GradientHeading type="heading" displayedText={i18n.t('tutorials')} />
          <Logo size={'small'} />
        </HStack>
        <HStack style={styles.tutorialInfoContainer}>
          <InfoButton onPress={() => setModalVisibility(true)} />
          <CustomModal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}>
            <VStack>
              <InfoListTextElement data={sides} heading="side" />
              <InfoListTextElement data={fingerArray} heading="finger" />
            </VStack>
          </CustomModal>
          <FluteTutorial />
        </HStack>
      </VStack>
    </VStack>
  );
}
const styles = StyleSheet.create({
  tutorialInfoContainer: {
    justifyContent: 'space-around',
    position: 'relative',
    alignItems: 'flex-start',
    marginStart: '50%',
    width: '100%',
  },
});
