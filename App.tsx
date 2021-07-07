import React, {FC, useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import TextInputComp from './components/textInput';
import ButtonComp from './components/button';
import ListTile from './components/listTile';

interface DataStorage {
  goal: string;
}

const App: FC = () => {
  const [addValue, setAddValue] = useState<string>('');
  const [removeValue, setRemoveValue] = useState<string>('');
  const [data, addData] = useState<DataStorage[]>([]);
  const addHandler = (): void => {
    if (addValue !== '') {
      const copy: DataStorage[] = data;
      const arr: DataStorage = {goal: addValue};
      setAddValue('');
      copy.push(arr);
      addData(copy);
    }
  };

  useEffect(() => {
    console.log(removeValue);

    removeHandler();
    setRemoveValue('');
  }, [removeValue]);

  const removeHandler = (): void => {
    const updatedArray: DataStorage[] = data.filter(e => {
      return e.goal !== removeValue;
    });
    addData(updatedArray);
  };

  const itemRenderer = ({item}: any) => {
    return <ListTile goal={item.goal} remover={setRemoveValue} />;
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
        <ButtonComp title="Add Task" onPress={addHandler} />
      </View>
      <View style={{marginTop: '10%'}}>
        <FlatList
          data={data}
          renderItem={itemRenderer}
          //renderItem={({item}) => <ListTile goal={item.goal} />}
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
