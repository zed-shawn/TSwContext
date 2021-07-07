import React, {FC, useState} from 'react';
import {TextInput, View} from 'react-native';

interface Props {
  placeholder: string;
}

const TextInputComp: FC<Props> = props => {
  const [enteredValue, setEnteredValue] = useState<string | undefined>('');
  const changeText = (input: string): void => {
    setEnteredValue(input);
  };
  return (
    <View
      style={{
        borderBottomWidth: 1,
        width: '60%',
        height: '100%',
      }}>
      <TextInput
        placeholder={props.placeholder}
        value={enteredValue}
        onChangeText={changeText}
      />
    </View>
  );
};

export default TextInputComp;
