import React, { useState } from 'react';
import { BoldText, GradientHeading, InfoText } from '@/components/TextElements';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import i18n from '@/constants/texts/Translations';
import { containerStyles } from '@/components/styles';
import { FlatList } from 'react-native';
import { TutorialImage, Logo } from '@/components/Images';
import { CustomPopUpModal } from '@/components/Modals';
import { dataArray, fingersEN, fingersDE, sides } from '@/constants/texts/Fingers';
import { InfoButton } from '@/components/CustomButtons';
import PageView from '@/components/PageView';

interface InfoListElementProps {
  heading: string;
  data: Array<dataArray>;
}

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
  const [modalVisibility, setModalVisibility] = useState(false);
  const fingerArray = i18n.locale === 'en' ? fingersEN : fingersDE;

  return (
    <PageView>
      <HStack space="md" style={containerStyles.horizontalCentralContainer}>
        <GradientHeading type="heading" displayedText={i18n.t('tutorials')} />
        <Logo size={'small'} />
      </HStack>
      <HStack style={containerStyles.tutorialInfoContainer}>
        <InfoButton onPress={() => setModalVisibility(true)} />
        <CustomPopUpModal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}>
          <VStack>
            <InfoListTextElement data={sides} heading="side" />
            <InfoListTextElement data={fingerArray} heading="finger" />
          </VStack>
        </CustomPopUpModal>
        <TutorialImage />
      </HStack>
    </PageView>
  );
}
