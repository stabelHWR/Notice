import { Question } from '@/types/quizTypes';
import { AllNoteNames } from './Notes';

const questions: Array<Question> = [
  {
    questionName: 'question1',
    type: 'multipleChoice',
    choices: ['choices1', 'choices2', 'choices3'],
  },
  {
    questionName: 'question2',
    type: 'typeIn',
  },
  {
    questionName: 'question3',
    type: 'testing',
    noteTest: AllNoteNames.d,
  },
];

export { questions };
