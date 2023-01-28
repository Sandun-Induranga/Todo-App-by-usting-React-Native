import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasks}>
        <Text style={styles.title}>My Todo List</Text>
      </View>
      <View style={styles.items}>
        <View>
          <Text style={styles.item}>
            <Ionicons name="md-checkmark-circle" size={50} color="#E7E2F3" />
            <View style={styles.itemText}>
              <Text>Task 1</Text>
              <Text>28/01/2023</Text>
            </View>
          </Text>
        </View>
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
    padding: 5,
    paddingTop: 25,
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
  },
  item: {
    height: 80,
    borderBottomWidth: 1,
    borderColor: "#E5E9ED",
    color: "#1B1B1D",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 40,
  },
  itemText: {
    flex: 1,
    flexDirection: "column",
    width: "60%",
    height: "100%",
    fontSize: 15,
    color: "#606061",
    fontWeight: "400",
    position: "absolute",
    left: "30%",
    backgroundColor: "red",
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
