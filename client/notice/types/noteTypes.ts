import { STANDARD_NOTES, SHARP_NOTES, FLAT_NOTES } from '@/constants/Notes';

type PlayingStatus = 'notPlayed' | 'failed' | 'success';
type RecordingStatus = PlayingStatus | 'notRecordedInSession';

type StandardNote = (typeof STANDARD_NOTES)[number];
type SharpNote = (typeof SHARP_NOTES)[number];
type FlatNote = (typeof FLAT_NOTES)[number];
type NoteName = StandardNote | SharpNote | FlatNote;

type Note = {
  noteName: StandardNote;
  status: PlayingStatus;
};
type NotePlay = Note & {
  status: PlayingStatus;
};

type Harmony = {
  harmonyName: string;
  clef: 'treble' | 'bass' | 'alto' | 'tenor';
  notes: Note[];
};

export type { PlayingStatus, RecordingStatus, NoteName, Note, NotePlay, Harmony };
