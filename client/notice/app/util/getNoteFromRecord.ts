import { YIN } from "pitchfinder";
import audioDecode from "audio-decode";
import * as FileSystem from 'expo-file-system';

async function detectPitchFromFile(pathToFile: string) {
    const detectPitch = YIN({ sampleRate: 44100 });

    // Lese die Datei als binäre Daten
    const audio = await FileSystem.readAsStringAsync(pathToFile, {
        encoding: FileSystem.EncodingType.Base64,
    });

    // Decode die Audio-Datei
    const decoded = await audioDecode(Buffer.from(audio, 'base64'));
    const float64Array = decoded.getChannelData(0);

    // Rückgabe der erkannten Frequenz
    return detectPitch(float64Array);
}

function calculateNoteFromFrequency(freq: number): string {
    const A4 = 440;
    const C0 = A4 * Math.pow(2, -4.75);

    const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const halfStepsFromC0 = Math.round(12 * Math.log2(freq / C0));

    const octave = Math.floor(halfStepsFromC0 / 12);
    const noteIndex = (halfStepsFromC0 % 12 + 12) % 12;

    return noteNames[noteIndex] + octave;
}

async function getNoteFromRecording(pathToFile: string) {
    const freq = await detectPitchFromFile(pathToFile);
    if (freq != null) {
        return calculateNoteFromFrequency(freq);
    } else {
        return null;
    }
}

export { getNoteFromRecording };
