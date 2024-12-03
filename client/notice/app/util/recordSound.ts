import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';
import * as FileSystem from 'expo-file-system';


const playRecordedAudio = async (recordedURI: string) => {
  try {
    const recording = new Audio.Sound();

    await recording.loadAsync({ uri: recordedURI });

    const playerStatus = await recording.getStatusAsync();

    if (playerStatus.isLoaded) {
      if (!playerStatus.isPlaying) {
        await recording.playAsync();
      }
    }
  } catch (error) {
    console.error("Error playing recorded audio:", error);
  }
};

const openFile = async (filePath: string) => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(filePath);

    if (fileInfo.exists) {
      console.log('File exists:', filePath);
      console.log('File Info:', fileInfo);

    } else {
      console.log('File does not exist at:', filePath);
    }
  } catch (error) {
    console.error('Error opening file:', error);
  }
};

const deleteFile = async (filePath: string) => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(filePath);

    if (fileInfo.exists) {
      await FileSystem.deleteAsync(filePath);
      console.log('File deleted:', filePath);
    } else {
      console.log('File does not exist, cannot delete:', filePath);
    }
  } catch (error) {
    console.error('Error deleting file:', error);
  }
};

const startRecording = async (
  permissionResponse: Audio.PermissionResponse | null
) => {
  try {

    if (permissionResponse?.status !== 'granted') {
      console.log('Requesting permission...');
      await Audio.requestPermissionsAsync();
    }
    console.log('Starting new recording...');
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
      interruptionModeIOS: InterruptionModeIOS.DoNotMix,
      shouldDuckAndroid: true,
      interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
      playThroughEarpieceAndroid: false,
      staysActiveInBackground: true,
    });

    const recording = new Audio.Recording();
    await recording.prepareToRecordAsync();
    await recording.startAsync();
    console.log('Recording started');
    return recording;
  } catch (err) {
    console.error('Failed to start recording', err);
    return null;
  }
};

const stopRecording = async (recording: Audio.Recording | null) => {
  if (!recording) {
    console.log('No recording is in progress');
    return null;
  }
  console.log('Stopping recording...');
  try {
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
      staysActiveInBackground: true,
    });
    const fileName = `recording-${Date.now()}.caf`;
    const recordingUri = recording.getURI();

    // Move the recording to the new directory with the new file name
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'recordings/', { intermediates: true });
    const c = FileSystem.documentDirectory + 'recordings/' + `${fileName}`
    await FileSystem.moveAsync({
      from: recordingUri ? recordingUri: "",
      to: c
    });
    await openFile(c)
  } catch (err) {
    console.error('Failed to stop recording', err);
    return null;
  }
};


export { startRecording, stopRecording, playRecordedAudio, openFile, deleteFile };
