import React, { useEffect, useState } from 'react';
import { RectangleGradientButton } from '@/components/GradientButton';
import { Logo } from '@/components/Images';
import { CustomDropdown, CustomInput } from '@/components/Inputs';
import { containerStyles } from '@/components/styles';
import { OneNote } from '@/components/Svgs';
import { GradientHeading } from '@/components/TextElements';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { questions } from '@/constants/texts/Questions';
import { APP_NAME } from '@/constants/texts/Strings';
import i18n from '@/constants/texts/Translations';

export default function BeginnerQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex, questions]);

  return (
    <VStack style={containerStyles.mainCentralContainer}>
      <HStack space="md" style={containerStyles.horizontalCentralContainer}>
        <GradientHeading type="heading" displayedText={APP_NAME} />
        <OneNote width={50} height={50} />
      </HStack>
      <Logo size="medium" />
      <VStack style={containerStyles.mainFlexStartContainer}>
        {currentQuestion.type === 'mulipleChoice' ? (
          <CustomDropdown
            selectedItems={
              currentQuestion.choices
                ? currentQuestion.choices.map((choice) => i18n.t(choice))
                : ['']
            }
            displayedText={i18n.t(currentQuestion.questionName)}
          />
        ) : (
          <CustomInput displayedText={i18n.t(currentQuestion.questionName)} />
        )}
      </VStack>
      <RectangleGradientButton
        displayedText={i18n.t('submit')}
        onPress={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
      />
    </VStack>
  );
}
