import { Input } from '@rneui/base';
import { secondaryColorNeonBlue, backgroundColor, StatusColors } from '@/constants/Colors';
import { CheckBox } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { VStack } from './ui/vstack';
import { BoldText } from './TextElements';

type InputProps = {
  displayedText: string;
};
type SelectProps = InputProps & {
  selectItems: string[];
};

const CustomDropdown: React.FC<SelectProps> = ({ displayedText, selectItems }) => {
  const [check1, setCheck1] = useState(false);
  return (
    <VStack style={{ backgroundColor: backgroundColor }}>
      <BoldText displayedText={displayedText} />
      {selectItems.map((selectItem, index) => (
        <CheckBox
          key={index}
          center
          title={selectItem}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checkedColor={secondaryColorNeonBlue}
          uncheckedColor={secondaryColorNeonBlue}
          onPress={() => setCheck1(!check1)}
          checked={check1}
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
