import { AllNoteNames } from '@/constants/texts/Notes';

type Question = {
  questionName: string;
  type: 'multipleChoice' | 'typeIn' | 'testing';
  choices?: string[];
  noteTest?: AllNoteNames;
};

export type { Question };
