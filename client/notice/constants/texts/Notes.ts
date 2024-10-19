import { Clef } from '@/types/noteTypes';

enum STANDARD_NOTES {
  c = 'c',
  d = 'd',
  e = 'e',
  f = 'f',
  g = 'g',
  a = 'a',
  b = 'b',
}

enum STANDARD_NOTES_UPPER {
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  A = 'A',
  B = 'B',
}

enum SHARP_NOTES {
  c = 'c',
  cSharp = 'c#',
  d = 'd',
  dSharp = 'd#',
  e = 'e',
  f = 'f',
  fSharp = 'f#',
  g = 'g',
  gSharp = 'g#',
  a = 'a',
  aSharp = 'a#',
  b = 'b',
}

enum SHARP_NOTES_UPPER {
  C = 'C',
  CSharp = 'C#',
  D = 'D',
  DSharp = 'D#',
  E = 'E',
  F = 'F',
  FSharp = 'F#',
  G = 'G',
  GSharp = 'G#',
  A = 'A',
  ASharp = 'A#',
  B = 'B',
}

enum FLAT_NOTES {
  c = 'c',
  dFlat = 'db',
  d = 'd',
  eFlat = 'eb',
  e = 'e',
  f = 'f',
  gFlat = 'gb',
  g = 'g',
  aFlat = 'ab',
  a = 'a',
  bFlat = 'bb',
  b = 'b',
}

enum FLAT_NOTES_UPPER {
  C = 'C',
  DFlat = 'DB',
  D = 'D',
  EFlat = 'EB',
  E = 'E',
  F = 'F',
  GFlat = 'GB',
  G = 'G',
  AFlat = 'AB',
  A = 'A',
  BFlat = 'BB',
  B = 'B',
}

const CLEFS: Clef[] = [Clef.Treble, Clef.Bass, Clef.Alto, Clef.Soprano];
enum AllNotes {
  DFlat = 'DB',
  EFlat = 'EB',
  GFlat = 'GB',
  AFlat = 'AB',
  BFlat = 'BB',
  C = 'C',
  CSharp = 'C#',
  D = 'D',
  DSharp = 'D#',
  E = 'E',
  F = 'F',
  FSharp = 'F#',
  G = 'G',
  GSharp = 'G#',
  A = 'A',
  ASharp = 'A#',
  B = 'B',
  dFlat = 'db',
  eFlat = 'eb',
  gFlat = 'gb',
  aFlat = 'ab',
  bFlat = 'bb',
  cSharp = 'c#',
  dSharp = 'd#',
  e = 'e',
  f = 'f',
  fSharp = 'f#',
  g = 'g',
  gSharp = 'g#',
  aSharp = 'a#',
  c = 'c',
  a = 'a',
  b = 'b',
  d = 'd',
}

export {
  STANDARD_NOTES,
  SHARP_NOTES,
  FLAT_NOTES,
  AllNotes,
  FLAT_NOTES_UPPER,
  SHARP_NOTES_UPPER,
  STANDARD_NOTES_UPPER,
  CLEFS,
};
