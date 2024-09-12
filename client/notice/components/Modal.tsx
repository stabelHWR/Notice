import React, { ReactNode } from 'react';
import { StyleSheet, View, Modal, TouchableWithoutFeedback } from 'react-native';
import { VStack } from './ui/vstack';

interface ModalProps {
  children: ReactNode;
  visible: boolean;
  transparent?: boolean;
  dismiss: () => void;
  margin?: number;
}

const CustomModal = ({
  children,
  visible,
  transparent = true,
  dismiss,
  margin = 20,
}: ModalProps) => {
  return (
    <Modal visible={visible} transparent={transparent} onRequestClose={dismiss}>
      <TouchableWithoutFeedback onPress={dismiss}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>

      <VStack
        style={{
          ...styles.modalContent,
          margin: margin,
        }}
      >
        {children}
      </VStack>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContent: {
    justifyContent: 'center',
    marginVertical: '100%',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'ffff',
  },
});
