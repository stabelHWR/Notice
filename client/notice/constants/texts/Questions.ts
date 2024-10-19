import { Question } from '@/types/quizTypes';
import { AllNotes } from './Notes';

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
    noteTest: AllNotes.d,
  },
];

export { questions };
