import getSound from '@/assets/audio';
import { Clef } from '@/types/noteTypes';
import { getCurrentInstrument } from './notesUtils';
import { Audio } from 'expo-av';
import { AllNotes } from '@/constants/texts/Notes';

const loadSound = async (clef: Clef, noteName: AllNotes): Promise<Audio.Sound | null> => {
  const currentInstrument = getCurrentInstrument();

  try {
    console.log('Loading Sound');

    if (typeof noteName === 'string') {
      const soundFile = getSound(currentInstrument, clef, noteName);
      if (!soundFile) {
        throw new Error(`No sound file found for note: ${noteName}`);
      }

      const { sound: newSound } = await Audio.Sound.createAsync(soundFile);

      console.log('Sound Loaded');
      return newSound;
    }
    return null;
  } catch (error) {
    console.error('Failed to load sound', error);
    return null;
  }
};
const playSound = (sound: Audio.Sound | null) => {
  if (sound) {
    sound.playAsync();
  }
};
const stopSound = (sound: Audio.Sound | null) => {
  if (sound) {
    sound.stopAsync();
  }
};
const unloadSound = (sound: Audio.Sound | null) => {
  return sound
    ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
    : undefined;
};

export { loadSound, playSound, unloadSound, stopSound };
