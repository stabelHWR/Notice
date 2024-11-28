import { Question } from '@/types/quizTypes';
import { AllNoteNames } from './Notes';

const questions: Array<Question> = [
  {
    questionName: 'question1',
    type: 'multipleChoice',
    choices: ['beginer', 'amateur', 'profi'],
  },
  {
    questionName: 'question3',
    type: 'testing',
    noteTest: AllNoteNames.d,
  },
];

export { questions };
