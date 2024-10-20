import loadNoteData from '@/assets/playData';
import { CURRENT_INSTRUMENT } from '@/constants/texts/AppStrings';
import { AllNoteNames } from '@/constants/texts/Notes';
import { Clef, InstrumentName, NotePlay, NotesData } from '@/types/noteTypes';

const getCurrentInstrument = (): InstrumentName => {
  const instrumentExists = Object.values(InstrumentName).includes(
    CURRENT_INSTRUMENT as InstrumentName
  );
  if (!instrumentExists) {
    console.log('Instrument does not exist');
    return InstrumentName.Flute;
  }
  return CURRENT_INSTRUMENT;
};

const getNotesData = async (clef: Clef | string | undefined): Promise<NotesData> => {
  const instrument = getCurrentInstrument();
  const noteData = await loadNoteData(instrument);

  const { soprano, alto, treble, bass } = noteData;

  switch (clef) {
    case 'soprano':
      return soprano;
    case 'alto':
      return alto;
    case 'treble':
      return treble;
    case 'bass':
      return bass;
    default:
      return soprano; // Default case
  }
};

const getNotes = (notesData: NotesData): NotePlay[] => {
  return notesData.notes;
};

const getNote = (notesData: NotePlay[], noteName: AllNoteNames | undefined): NotePlay => {
  const currentNote = noteName
    ? notesData.find((note) => noteName === note.noteName)
    : notesData[0];
  const returnedNote = currentNote ? currentNote : notesData[0];
  return returnedNote;
};
const doesClefExist = (clef: string | Clef | undefined): boolean => {
  console.log(clef, 12);
  const clefExists = clef ? Object.values(Clef).includes(clef as Clef) : false;
  if (!clefExists) {
    console.log(`${clef} does not exist in clefs`);
  }
  console.log(clefExists, 1878);

  return clefExists;
};
const doesNoteExist = (noteName: string | AllNoteNames | undefined): boolean => {
  console.log(noteName, 13);
  const noteExists = noteName
    ? Object.values(AllNoteNames).includes(noteName as AllNoteNames)
    : false;
  if (!noteExists) {
    console.log(`${noteName} does not exist in notes`);
  }
  console.log(noteExists, 1878);
  return noteExists;
};
const doesClefOrNoteExist = (
  clef: string | Clef | undefined,
  noteName: string | AllNoteNames | undefined
): boolean => {
  console.log(clef, noteName, 14);

  const clefExists = doesClefExist(clef);
  const noteExists = doesNoteExist(noteName);

  return noteExists && clefExists;
};
export {
  getCurrentInstrument,
  getNote,
  getNotesData,
  getNotes,
  doesClefExist,
  doesNoteExist,
  doesClefOrNoteExist,
};
