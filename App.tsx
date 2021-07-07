import React, {FC, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import TextInputComp from './components/textInput';
import ButtonComp from './components/button';
import ListTile from './components/listTile';

interface DataStorage {
  goal: string;
}

const App: FC = () => {
  const [addValue, setAddValue] = useState<string>('');
  const [data, addData] = useState<DataStorage[]>([]);
  const addHandler = (): void => {
    const copy: DataStorage[] = data;
    const arr: DataStorage = {goal: addValue};
    setAddValue('');
    copy.push(arr);
    addData(copy);
  };


  return (
    <View style={styles.root}>
      <Text style={styles.header}>TO-DOist</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <TextInputComp
          placeholder="Enter Task Here"
          setter={setAddValue}
          value={addValue}
        />
        <ButtonComp title="Add To-Do" onPress={addHandler} />
      </View>
      <View style={{marginTop: '10%'}}>
        <FlatList
          data={data}
          renderItem={({item}) => <ListTile goal={item.goal} />}
          keyExtractor={item => item.goal}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    marginBottom: '5%',
    fontWeight: 'bold',
    color: '#900',
  },
});

export default App;
