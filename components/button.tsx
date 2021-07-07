import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';

type Props = {title: string; onPress: () => void};

const ButtonComp: FC<Props> = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'gray',
        height: '50%',
        paddingHorizontal: '2%',
        alignItems: 'center',
      }}
      onPress={props.onPress}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;
