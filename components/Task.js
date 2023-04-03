import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";

const Task = ({task}) => {
  const [isFinished, setIsFinished] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setIsFinished(!isFinished);
        }}
        style={[styles.checkmarkStyle, isFinished ? styles.finished : null]}
      >
        {isFinished ? (
          <AntDesign name="check" size={30} color={'#FFFFFF'} />
        ) : null}
      </Pressable>
      <View style={styles.taskContainer}>
        <Text style={[styles.taskText, isFinished ? styles.finishedText : null]}>{task}</Text>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  checkmarkStyle: {
    height: 40,
    width: 40,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "black",
    justifyContent: 'center',
    alignItems: 'center'
  },
  taskContainer: {
    width: "80%",
    minHeight: 50,
    marginLeft: 10,
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#C2C2C2",
  },
  taskText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  finished: {
    backgroundColor: '#63DD1C'
  },
  finishedText: {
    textDecorationLine: 'line-through',
    color: '#CCCCCC'
  }
});
