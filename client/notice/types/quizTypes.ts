import { Note, NoteName } from './noteTypes';

type Question = {
  questionName: string;
  type: 'mulipleChoice' | 'typeIn' | 'testing';
  choices?: string[];
  noteTest?: NoteName;
};

export type { Question };
