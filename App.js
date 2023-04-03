import React, { useState } from "react";
import { StyleSheet, View, TextInput, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import Task from "./components/Task";

export default function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  function addTask () {
    setList(currentTask => [...currentTask, {text: value, id: Math.random().toString() }])
    setValue('')
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setValue}
          value={value}
          placeholder="Add a task"
        />
        <Pressable style={styles.button} onPress={addTask}>
          <Ionicons name="add" size={45} color='#FFFFFF' />
        </Pressable>
      </View>
      <FlatList
        data={list}
        renderItem={({item}) => <Task task={item.text}/>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: '80%',
    marginLeft: 10
  },
  textInputContainer: {
    width: "95%",
    height: 60,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: "#000000",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
