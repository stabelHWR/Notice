import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { FFmpegKit } from 'ffmpeg-kit-react-native';

/**
 * Starts a recording session and returns the Audio.Recording instance.
 * @param currentRecording - The current recording instance, if any.
 * @param permissionResponse - The permission response for microphone access.
 * @returns {Promise<Audio.Recording>} A promise resolving with the Audio.Recording instance.
 */
export const startRecording = async (
    currentRecording: Audio.Recording | null,
    permissionResponse: Audio.PermissionResponse | undefined
): Promise<Audio.Recording> => {
    try {
        if (!permissionResponse || !permissionResponse.granted) {
            throw new Error('Microphone permission not granted');
        }

        // Prepare audio mode
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true,
        });

        // Stop and unload any ongoing recording
        if (currentRecording) {
            await currentRecording.stopAndUnloadAsync();
        }

        // Create and start a new recording
        const recording = new Audio.Recording();
        await recording.prepareToRecordAsync(Audio.RecordingOptionsPresets.HighQuality);
        await recording.startAsync();

        console.log('Recording started');
        return recording;
    } catch (error) {
        console.error('Error starting recording:', error);
        throw error;
    }
};

/**
 * Stops the recording session, converts it to MP3, and returns the URI of the MP3 file.
 * @param recording - The active Audio.Recording instance.
 * @returns {Promise<string>} The URI of the MP3 file.
 */
export const stopRecording = async (recording: Audio.Recording | null): Promise<string> => {
    try {
        if (!recording) {
            throw new Error('No active recording to stop');
        }

        // Stop the recording
        await recording.stopAndUnloadAsync();
        const wavUri = recording.getURI();
        console.log('Recording stopped. File saved at:', wavUri);

        if (!wavUri) {
            throw new Error('Failed to retrieve recording URI');
        }

        // Convert the recorded file to MP3
        const mp3Uri = await convertToMP3(wavUri);

        return mp3Uri;
    } catch (error) {
        console.error('Error stopping recording:', error);
        throw error;
    }
};

/**
 * Converts a WAV audio file to MP3 format using FFmpeg.
 * @param wavUri - The URI of the recorded WAV file.
 * @returns {Promise<string>} The URI of the converted MP3 file.
 */
const convertToMP3 = async (wavUri: string): Promise<string> => {
    try {
        const mp3Uri = `${FileSystem.documentDirectory}recording.mp3`;

        // FFmpeg command to convert WAV to MP3
        const command = `-i "${wavUri}" -codec:a libmp3lame -qscale:a 2 "${mp3Uri}"`;
        console.log('Starting MP3 conversion with command:', command);

        await FFmpegKit.execute(command);

        console.log('MP3 conversion completed. File saved at:', mp3Uri);
        return mp3Uri;
    } catch (error) {
        console.error('Error converting to MP3:', error);
        throw error;
    }
};