import React, {FC} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  goal: string;
}

const ListTile: FC<Props> = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <Text>{props.goal}</Text>
      <Icon
        name="add"
        size={30}
        color="#900"
        onPress={a => {
          console.log(props.goal);
        }}
      />
    </View>
  );
};

export default ListTile;
