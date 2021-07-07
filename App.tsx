import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextInputComp from './components/textInput';

const App: FC = () => {
  return (
    <View style={styles.root}>
      <Text>TO-DOist</Text>
      <View>
        <TextInputComp placeholder="Enter Text Here" />
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
