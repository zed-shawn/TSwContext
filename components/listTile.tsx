import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';

interface Props {
  goal: string;
  remover: any;
}

const ListTile: FC<Props> = props => {
  const removeGoal = (): void => {
    props.remover(props.goal);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: '1%',
        paddingLeft: '5%',
        paddingRight: '5%',
      }}>
      <Text>{props.goal}</Text>

      <Button title="Done" color="#900" onPress={removeGoal} />
    </View>
  );
};

export default ListTile;
