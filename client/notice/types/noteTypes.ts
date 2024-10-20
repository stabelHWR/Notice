import { AllNoteNames } from '@/constants/texts/Notes';
import { Position } from './componentTypes';

type PlayingStatus = 'notPlayed' | 'failed' | 'success';
type RecordingStatus = PlayingStatus | 'notRecordedInSession';

export enum Clef {
  Treble = 'treble',
  Bass = 'bass',
  Alto = 'alto',
  Soprano = 'soprano',
}

export enum InstrumentName {
  Flute = 'flute',
  // Add other instruments as needed. For now, since we will only do the flute, I will only consider the flute cases
}

interface NotesData {
  name: string;
  clef: Clef;
  pitchRange: string;
  size: string;
  notes: NotePlay[];
  description: string;
}

type Note = {
  noteName: AllNoteNames;
  status: PlayingStatus;
  linePosition: Position;
};

type NotePlay = Note & {
  status: PlayingStatus;
};

export type { PlayingStatus, RecordingStatus, Note, NotePlay, NotesData };
