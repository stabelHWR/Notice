import { YIN } from 'pitchfinder';
import * as FileSystem from 'expo-file-system';
import audioDecode from 'audio-decode';  // Audio-Decoder für verschiedene Formate


function getFileExtension(uri: string): string {
    return uri.split('.').pop()?.toLowerCase() || '';
}

async function decodeAudio(uri: string): Promise<Float32Array | null> {
    try {
        // Read the audio file as Base64
        const fileData = await FileSystem.readAsStringAsync(uri, {
            encoding: FileSystem.EncodingType.Base64,
        });

        const buffer = Buffer.from(fileData, 'base64');
        const extension = getFileExtension(uri);

        const audioData = await audioDecode(buffer);

        return audioData.getChannelData(0);
    } catch (err) {
        console.error('Error decoding audio file:', err);
        return null;
    }
}

async function getNoteFromRecording(uri: string): Promise<string | null> {
    try {
        // Dekodiere die Audiodatei
        const channelData = await decodeAudio(uri);

        if (!channelData) {
            console.error('Fehler beim Abrufen der Audiodaten');
            return null;
        }

        // Erhalte die Frequenz aus den Audiodaten
        const detectPitch = YIN();
        const frequency = detectPitch(channelData);

        if (frequency === null) {
            console.error('Keine Frequenz erkannt');
            return null;
        }

        // Berechne die Note basierend auf der Frequenz
        return calculateNoteFromFrequency(frequency);
    } catch (err) {
        console.error('Fehler beim Abrufen der Note aus der Aufnahme', err);
        return null;
    }
}

// Funktion zur Berechnung der Note aus der Frequenz
function calculateNoteFromFrequency(freq: number): string {
    const A4 = 440; // Referenzfrequenz
    const semitoneRatio = Math.pow(2, 1 / 12); // Semitone-Schritt
    const C0 = A4 * Math.pow(2, -4.75); // C0 Frequenz

    const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const halfStepsFromC0 = Math.round(12 * Math.log2(freq / C0));

    const octave = Math.floor(halfStepsFromC0 / 12);
    const noteIndex = (halfStepsFromC0 % 12 + 12) % 12;

    return noteNames[noteIndex] + octave;
}

export { getNoteFromRecording };
