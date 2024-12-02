import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { Buffer } from 'buffer';

let recording: Audio.Recording | null = null;

const generateFileName = (extension: string): string => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return `${FileSystem.documentDirectory}recording-${timestamp}.${extension}`;
};

const startRecording = async (format: 'wav' | 'mp3' = 'wav'): Promise<{ fileName: string, recording: Audio.Recording }> => {
    try {
        if (recording) {
            await recording.stopAndUnloadAsync();
            recording = null;
        }

        const { status } = await Audio.requestPermissionsAsync();
        if (status !== 'granted') {
            throw new Error('Permissions not granted to record audio');
        }

        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true,
        });

        recording = new Audio.Recording();
        const fileName = generateFileName(format);
        const recordingOptions = format === 'wav' ? {
            android: {
                extension: '.wav',
                outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_DEFAULT,
                audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT,
                sampleRate: 44100,
                numberOfChannels: 2,
                bitRate: 128000,
            },
            ios: {
                extension: '.wav',
                audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
                sampleRate: 44100,
                numberOfChannels: 2,
                bitRate: 128000,
            },
            web: {
                mimeType: 'audio/wav',
                bitsPerSecond: 128000,
            },
        } : {
            android: {
                extension: '.mp3',
                outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
                audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
                sampleRate: 44100,
                numberOfChannels: 2,
                bitRate: 128000,
            },
            ios: {
                extension: '.mp3',
                audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
                sampleRate: 44100,
                numberOfChannels: 2,
                bitRate: 128000,
            },
            web: {
                mimeType: 'audio/mp3',
                bitsPerSecond: 128000,
            },
        };

        await recording.prepareToRecordAsync(recordingOptions);
        await recording.startAsync();
        console.log('Recording started');

        return { fileName, recording };
    } catch (error) {
        console.error('Error starting recording:', error);
        throw error;
    }
};

const stopRecording = async (recording: Audio.Recording): Promise<string> => {
    try {
        if (recording) {
            await recording.stopAndUnloadAsync();
            const uri = recording.getURI();
            console.log('Recording stopped. File saved at:', uri);

            if (!uri) {
                throw new Error('Failed to retrieve recording URI');
            }

            return uri;
        } else {
            throw new Error('No recording to stop');
        }
    } catch (error) {
        console.error('Error stopping recording:', error);
        throw error;
    }
};

export { startRecording, stopRecording };