import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Task from "./components/task";
import { useFonts } from "expo-font";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasks}>
        <Text style={styles.title}>My Todo List</Text>
      </View>
      <View style={styles.items}>
        <Task title="JS Assignment" des="Before 30/01/2023"></Task>
        <Task title="Cricket Match" des="SL vs NZ 02/03/2023"></Task>
        <Task title="CNS Lecture" des="14/02/2023"></Task>
      </View>

      <View style={styles.btnAdd}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
            Add New Task
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },

  tasks: {
    height: 236,
    backgroundColor: "#4A3780",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  title: {
    textAlign: "center",
    fontSize: 32,
    fontFamily: "Poppins-Black",
    fontWeight: "bold",
    color: "white",
  },
  items: {
    backgroundColor: "white",
    height: "60%",
    position: "absolute",
    left: "5%",
    right: "5%",
    top: 200,
    borderRadius: 20,
    overflow: "scroll",
    paddingTop: 10,
  },
  btn: {
    backgroundColor: "#4A3780",
    height: 60,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
  },
  btnAdd: {
    position: "absolute",
    bottom: 20,
    width: "90%",
    left: "5%",
  },
});
