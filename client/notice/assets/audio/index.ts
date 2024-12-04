//This file exists to map the audio files
import { Clef, InstrumentName } from '@/types/noteTypes';
import soundC from '@/assets/audio/playSounds/instruments/flute/C.mp3';
import soundCSharp from '@/assets/audio/playSounds/instruments/flute/C#.mp3';
import soundD from '@/assets/audio/playSounds/instruments/flute/D.mp3'
import soundDSharp from '@/assets/audio/playSounds/instruments/flute/D#.mp3';
import soundE from '@/assets/audio/playSounds/instruments/flute/E.mp3'
import soundF from '@/assets/audio/playSounds/instruments/flute/F.mp3'
import soundFSharp from '@/assets/audio/playSounds/instruments/flute/F#.mp3';
import soundG from '@/assets/audio/playSounds/instruments/flute/G.mp3'
import soundGSharp from '@/assets/audio/playSounds/instruments/flute/G#.mp3';
import soundA from '@/assets/audio/playSounds/instruments/flute/A.mp3'
import soundASharp from '@/assets/audio/playSounds/instruments/flute/A#.mp3';
import soundB from '@/assets/audio/playSounds/instruments/flute/B.mp3'

interface ClefSound {
  [noteName: string]: number;
}

interface InstrumentSound {
  [Clef.Alto]: ClefSound;
  [Clef.Bass]: ClefSound;
  [Clef.Treble]: ClefSound;

  [Clef.Soprano]: ClefSound;
  [Clef.MockSoprano]: ClefSound;
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
      CSharp: soundCSharp,
      D: soundD,
      DSharp: soundDSharp,
      E: soundE,
      F: soundF,
      FSharp: soundFSharp,
      G: soundG,
      GSharp: soundGSharp,
      A: soundA,
      ASharp: soundASharp,
      B: soundB,
      // ...TODO : add notes in the audio/playSounds/instruments/flute directory
    },
    mockSoprano: {
      C: soundC,
      D: soundD,
      // ...TODO : add notes
    },
  },
};

export default function getSound(
  instrument: InstrumentName,
  clefKey: Clef,
  noteName: string
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
