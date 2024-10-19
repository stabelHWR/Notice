import { Audio } from 'expo-av';

const startRecording = async (
  recording: Audio.Recording | null,
  permissionResponse: Audio.PermissionResponse | null
) => {
  try {
    if (recording) {
      console.log('Recording is already in progress');
      return recording;
    }

    if (permissionResponse?.status !== 'granted') {
      console.log('Requesting permission...');
      await Audio.requestPermissionsAsync();
    }

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });

    console.log('Starting new recording...');
    const { recording: newRecording } = await Audio.Recording.createAsync(
      Audio.RecordingOptionsPresets.HIGH_QUALITY
    );
    console.log('Recording started');
    return newRecording;
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
    });
    recording._uri = '../../assets/audio/recording/';
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
    return uri;
  } catch (err) {
    console.error('Failed to stop recording', err);
    return null;
  }
};
export { startRecording, stopRecording };
