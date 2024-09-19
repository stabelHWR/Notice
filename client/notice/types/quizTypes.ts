type Question = {
  questionName: string;
  type: 'mulipleChoice' | 'typeIn';
  choices?: string[];
};

export type { Question };
