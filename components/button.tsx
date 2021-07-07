import React, {FC} from 'react';
import {Button, Text} from 'react-native';

type Props = {title: string; onPress: () => void};

const ButtonComp: FC<Props> = props => {
  return <Button title={props.title} onPress={props.onPress} color="#900" />;
};

export default ButtonComp;
