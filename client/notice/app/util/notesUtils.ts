import loadNoteData from '@/assets/playData';
import { CURRENT_INSTRUMENT } from '@/constants/texts/AppStrings';
import { Clef, InstrumentName, NoteName, NotePlay, NotesData } from '@/types/noteTypes';

const getCurrentInstrument = (): InstrumentName => {
  return CURRENT_INSTRUMENT;
};

const getNotesData = async (clef: Clef): Promise<NotesData> => {
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

const getNote = (notesData: NotePlay[], noteName: NoteName | undefined) => {
  const currentNote = noteName
    ? notesData.find((note) => noteName === note.noteName)
    : notesData[0];
  const returnedNote = currentNote ? currentNote : notesData[0];
  return returnedNote;
};

export { getCurrentInstrument, getNote, getNotesData, getNotes };
