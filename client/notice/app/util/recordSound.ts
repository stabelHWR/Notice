import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { Audio } from 'expo-av';

const audioRecorderPlayer = new AudioRecorderPlayer();

const startRecording = async (): Promise<string> => {
    try {
        const { granted } = await Audio.requestPermissionsAsync();
        if (!granted) {
            throw new Error('Permissions not granted to record audio');
        }

        const result = await audioRecorderPlayer.startRecorder();
        console.log('Recording started:', result);

        return result;
    } catch (error) {
        console.error('Error starting recording:', error);
        throw error;
    }
};

const stopRecording = async (): Promise<string> => {
    try {
        const wavUri = await audioRecorderPlayer.stopRecorder();
        console.log('Recording stopped. File saved at:', wavUri);

        if (!wavUri) {
            throw new Error('Failed to retrieve recording URI');
        }

        return wavUri;
    } catch (error) {
        console.error('Error stopping recording:', error);
        throw error;
    }
};

export { startRecording, stopRecording };
