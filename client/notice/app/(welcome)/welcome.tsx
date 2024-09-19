import React from 'react';
import PropTypes from 'prop-types';
import { RectangleGradientButton } from '@/components/GradientButton';
import { GradientHeading } from '@/components/TextElements';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { containerStyles } from '@/components/styles';
import { OneNote } from '@/components/Svgs';
import { Logo } from '@/components/Images';
import i18n from '@/constants/texts/Translations';
import { useRouter } from 'expo-router';

interface WelcomeOrRegisterPageProps {
  isWelcomePage: boolean;
}

const WelcomeOrRegisterPage: React.FC<WelcomeOrRegisterPageProps> = ({ isWelcomePage }) => {
  const router = useRouter();
  const text = isWelcomePage ? i18n.t('welcome') : i18n.t('tellUsAboutYourself');
  const link = isWelcomePage ? './home' : './beginnerQuiz';

  return (
    <VStack style={containerStyles.mainCentralContainer}>
      <HStack space="md" style={containerStyles.horizontalCentralContainer}>
        <GradientHeading type="heading" displayedText={text} />
        <OneNote width={50} height={50} />
      </HStack>
      <Logo size="large" />
      <RectangleGradientButton displayedText={text} onPress={() => router.push(link)} />
    </VStack>
  );
};

WelcomeOrRegisterPage.propTypes = {
  isWelcomePage: PropTypes.bool.isRequired,
};

export default WelcomeOrRegisterPage;
