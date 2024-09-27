import { Question } from '@/types/quizTypes';

const questions: Array<Question> = [
  {
    questionName: 'question1',
    type: 'mulipleChoice',
    choices: ['choices1', 'choices2', 'choices3'],
  },
  {
    questionName: 'question2',
    type: 'typeIn',
  },
  {
    questionName: 'question3',
    type: 'testing',
    noteTest: 'd',
  },
];

export { questions };
