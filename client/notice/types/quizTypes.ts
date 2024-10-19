import { AllNotes } from '@/constants/texts/Notes';

type Question = {
  questionName: string;
  type: 'multipleChoice' | 'typeIn' | 'testing';
  choices?: string[];
  noteTest?: AllNotes;
};

export type { Question };
