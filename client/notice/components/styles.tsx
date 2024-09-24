import { secondaryColorNeonBlue } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

const shadowStyles = {
  // iOS shadow properties
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 4,

  // Android shadow (elevation)
  elevation: 4,
};
const popupContent = {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderColor: secondaryColorNeonBlue,
  borderWidth: 2,
  height: 150,
  borderRadius: 10,
};

const containerStyles = StyleSheet.create({
  mainCentralContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  mainContainerForPages: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
  mainFlexStartContainer: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  horizontalCentralContainer: {
    flexDirection: 'row',
  },
  buttonCointainer: {
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
    height: '50%',
  },
});
export { shadowStyles, popupContent, containerStyles };
