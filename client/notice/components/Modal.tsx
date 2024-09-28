import { Modal, StyleSheet } from 'react-native';
import { VStack } from './ui/vstack';
import { CloseButton } from './GradientButton';
import { backgroundColor, secondaryColorNeonBlue } from '@/constants/Colors';

interface ModalProps {
  children: React.ReactNode;
  modalVisibility: boolean;
  setModalVisibility: (visibility: boolean) => void;
}

export default function CustomModal({
  children,
  modalVisibility,
  setModalVisibility,
}: ModalProps): React.ReactElement {
  return (
    <Modal
      visible={modalVisibility}
      animationType="fade"
      transparent={true}
      statusBarTranslucent={true}
    >
      <VStack style={styles.content}>
        <VStack style={styles.card}>
          <CloseButton onPress={() => setModalVisibility(false)} />
          {children}
        </VStack>
      </VStack>
    </Modal>
  );
}
const styles = StyleSheet.create({
  card: {
    width: '90%',
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 8,
    borderColor: secondaryColorNeonBlue,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: secondaryColorNeonBlue,
    backgroundColor: backgroundColor,
  },
});
