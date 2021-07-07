import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextInputComp from './components/textInput';
import ButtonComp from './components/button';

const App: FC = () => {
  const addHandler = (): void => {
    console.log('clicked');
  };
  return (
    <View style={styles.root}>
      <Text>TO-DOist</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <TextInputComp placeholder="Enter Text Here" />
        <ButtonComp title="Add To-Do" onPress={addHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
