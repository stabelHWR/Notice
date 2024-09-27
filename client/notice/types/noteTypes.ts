type PlayingStatus = 'notPlayed' | 'failed' | 'success';
type RecordingStatus = PlayingStatus | 'notRecordedInSession';

type Note = {
  noteName: string;
  status: PlayingStatus;
};

type Harmony = {
  harmonyName: string;
  clef: 'treble' | 'bass' | 'alto' | 'tenor';
  notes: Note[];
};

export type { PlayingStatus, RecordingStatus, Note, Harmony };
