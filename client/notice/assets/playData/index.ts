import fluteSoprano from '@/assets/playData/instruments/flute/soprano.json';
import fluteMockSoprano from '@/assets/playData/instruments/flute/mockSoprano.json';
import fluteAlto from '@/assets/playData/instruments/flute/alto.json';
import fluteTreble from '@/assets/playData/instruments/flute/treble.json';
import fluteBass from '@/assets/playData/instruments/flute/bass.json';
import { InstrumentName, NotesData } from '@/types/noteTypes';

const jsonPathMap = {
  flute: {
    soprano: fluteSoprano,
    mockSoprano:fluteMockSoprano, 
    alto: fluteAlto,
    treble: fluteTreble,
    bass: fluteBass,
  },
};

export default async function loadNoteData(instrument: InstrumentName): Promise<{
  soprano: NotesData;
  mockSoprano: NotesData;
  alto: NotesData;
  bass: NotesData;
  treble: NotesData;
}> {
  try {
    const soprano = jsonPathMap[instrument]?.soprano as NotesData;
    const mockSoprano = jsonPathMap[instrument]?.mockSoprano as NotesData;
    const alto = jsonPathMap[instrument]?.alto as NotesData;
    const treble = jsonPathMap[instrument]?.treble as NotesData;
    const bass = jsonPathMap[instrument]?.bass as NotesData;

    return { soprano,mockSoprano, alto, bass, treble };
  } catch (error) {
    console.error('Error loading instrument data:', error);
    const emptyNotesData = {} as NotesData;
    return {
      soprano: emptyNotesData,
      mockSoprano: emptyNotesData,
      alto: emptyNotesData,
      bass: emptyNotesData,
      treble: emptyNotesData,
    };
  }
}
