//This file exists to map the audio files
import soundC from '@/assets/audio/playSounds/instruments/flute/Sample.mp3';
import { Clef, InstrumentName, NoteName } from '@/types/noteTypes';

interface ClefSound {
  [noteName: NoteName]: number;
}

interface InstrumentSound {
  [Clef.Alto]: ClefSound;
  [Clef.Bass]: ClefSound;
  [Clef.Treble]: ClefSound;

  [Clef.Soprano]: ClefSound;
}

interface SoundPathMap {
  flute: InstrumentSound;
  //add further Instruments
}

const soundPathMap: SoundPathMap = {
  flute: {
    treble: {
      // ...TODO : add notes
    },
    bass: {
      // ...TODO : add notes
    },
    alto: {
      // ...TODO : add notes
    },
    soprano: {
      C: soundC,
      D: soundC,
      // ...TODO : add notes
    },
  },
};

export default function getSound(
  instrument: InstrumentName,
  clefKey: Clef,
  noteName: NoteName
): number | undefined {
  const instrumentsoundGroup = soundPathMap[instrument];

  if (!instrumentsoundGroup) {
    console.warn(`No such instrument ${instrument}`);
    return undefined;
  }
  const clefSoundGroup = instrumentsoundGroup[clefKey];

  if (clefSoundGroup) {
    const sound = clefSoundGroup[noteName];

    if (sound) {
      return sound;
    } else {
      console.warn(`No sound found for ${noteName}`);
    }
  } else {
    console.warn(`No such clef ${clefKey} or invalid sound key ${noteName}`);
    return undefined;
  }
}
