import React from 'react';
import { Input } from '@rneui/base';
import { secondaryColorNeonBlue, backgroundColor, StatusColors } from '@/constants/Colors';
import { CheckBox } from '@rneui/themed';
import { VStack } from '@/components/ui/vstack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { BoldText } from './TextElements';
import { GestureResponderEvent } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { StyleSheet } from 'react-native';
import i18n from '@/constants/texts/Translations';

interface InputProps {
  displayedText: string;
}
interface SelectProps extends InputProps {
  inputItems: any[];
  onPress?: (event: GestureResponderEvent) => void;
}
interface CustomReactDropdownProps extends SelectProps {
  value: any;
  setValue: (value: any) => void;
}

const CustomDropdown: React.FC<SelectProps> = ({ displayedText, inputItems, onPress }) => {
  const [inputItem, setinputItem] = useState<any>(null);

  const handlePress = (item: any) => {
    setinputItem(inputItem === item ? null : item);
    if (onPress) {
      onPress;
    }
  };

  return (
    <VStack style={{ backgroundColor: backgroundColor }}>
      <BoldText displayedText={displayedText} />
      {inputItems.map((selectItem, index) => (
        <CheckBox
          key={index}
          center
          title={selectItem}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checkedColor={secondaryColorNeonBlue}
          uncheckedColor={secondaryColorNeonBlue}
          onPress={() => handlePress(selectItem)}
          checked={inputItem === selectItem}
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
const CustomReactDropdown: React.FC<Omit<CustomReactDropdownProps, 'displayedText'>> = ({
  inputItems,
  value,
  setValue,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const setLabelAndValue = (inputItem: any) => {
    const labelAndValue = inputItem[0].toUpperCase() + inputItem.slice(1, inputItem.length - 1);
    return labelAndValue;
  };

  const data = inputItems.map((inputItem) => {
    const labelAndValue = setLabelAndValue(inputItem);
    return {
      label: labelAndValue,
      value: labelAndValue,
    };
  });

  return (
    <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? setLabelAndValue(inputItems[0]) : i18n.t('selectClef')}
      searchPlaceholder={i18n.t('search')}
      value={value}
      iconColor={secondaryColorNeonBlue}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        setValue(item.value);
        setIsFocus(false);
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    width: 250,
    borderBottomWidth: 2,
    borderBottomColor: secondaryColorNeonBlue,
    paddingHorizontal: 8,
    color: secondaryColorNeonBlue,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export { CustomDropdown, CustomInput, CustomReactDropdown };
