import { backgroundColor, secondaryColorNeonBlue } from '@/constants/Colors';
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

const containerStayles = StyleSheet.create({
  mainCentralContainer: {
    alignItems: 'center',
    backgroundColor: backgroundColor,
    flex: 1,
    justifyContent: 'center',
    marginVertical: 20,
  },
});
export { shadowStyles, popupContent, containerStayles };
