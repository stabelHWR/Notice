import { Input } from '@rneui/base';
import { secondaryColorNeonBlue, backgroundColor, StatusColors } from '@/constants/Colors';
import { CheckBox } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { VStack } from './ui/vstack';
import { BoldText } from './TextElements';

interface InputProps {
  displayedText: string;
}
interface SelectProps extends InputProps {
  selectedItems: string[];
}

const CustomDropdown: React.FC<SelectProps> = ({ displayedText, selectedItems }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handlePress = (item: string) => {
    setSelectedItem(selectedItem === item ? null : item); // Toggle selection
  };

  return (
    <VStack style={{ backgroundColor: backgroundColor }}>
      <BoldText displayedText={displayedText} />
      {selectedItems.map((selectItem, index) => (
        <CheckBox
          key={index}
          center
          title={selectItem}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checkedColor={secondaryColorNeonBlue}
          uncheckedColor={secondaryColorNeonBlue}
          onPress={() => handlePress(selectItem)}
          checked={selectedItem === selectItem}
          containerStyle={{
            backgroundColor: backgroundColor,
            alignContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        />
      ))}
    </VStack>
  );
};
const CustomInput: React.FC<InputProps> = ({ displayedText }) => {
  return (
    <VStack style={{ backgroundColor: backgroundColor }}>
      <BoldText displayedText={displayedText} />
      <Input
        containerStyle={{}}
        inputContainerStyle={{}}
        errorMessage="Oops! that's not correct."
        errorStyle={{ color: StatusColors.error.background }}
        errorProps={{}}
        inputStyle={{ color: secondaryColorNeonBlue }}
        leftIcon={<Icon name="account-outline" size={25} color={secondaryColorNeonBlue} />}
        leftIconContainerStyle={{}}
        rightIcon={<Icon name="close" size={20} color={secondaryColorNeonBlue} />}
        placeholder={displayedText}
      />
    </VStack>
  );
};

export { CustomDropdown, CustomInput };
