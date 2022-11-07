import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [text, onChangeText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Onee</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        title="Add Todo"
        onPress={() => setTodos((prev) => [text, ...prev])}
        color="black"
      />
      {todos.map((e) => (
        <View style={styles.list}>
          <Text style={styles.listItem}>{e}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
  list: {
    padding: 6,
    color: 'white',
    width: '100%',
  },
  listItem: {
    color: 'white',
    backgroundColor: 'black',
    width: '100%',
    textAlign: 'center',
    padding: 4,
  },
});
