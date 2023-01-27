import { StyleSheet, Text, View, SafeAreaView, Checkbox } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasks}>
        <Text style={styles.title}>Your Tasks</Text>
      </View>
      <View style={styles.items}>
        <Text style={styles.item}>
          <Ionicons name="md-checkmark-circle" size={50} color="#E7E2F3" />
          Task 1
        </Text>
        <Text style={styles.item}>
          <Ionicons name="md-checkmark-circle" size={50} color="#E7E2F3" />
          Task 2
        </Text>
        <Text style={styles.item}>
          <Ionicons name="md-checkmark-circle" size={50} color="#E7E2F3" />
          Task 3
        </Text>
        <Text style={styles.item}>
          <Ionicons name="md-checkmark-circle" size={50} color="#E7E2F3" />
          Task 4
        </Text>
        <Text style={styles.item}>
          <Ionicons name="md-checkmark-circle" size={50} color="#E7E2F3" />
          Task 5
        </Text>
        <Text style={styles.item}>
          <Ionicons name="md-checkmark-circle" size={50} color="#E7E2F3" />
          Task 6
        </Text>
        <Text style={styles.item}>
          <Ionicons name="md-checkmark-circle" size={50} color="#E7E2F3" />
          Task 7
        </Text>
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
    height: "75%",
    position: "absolute",
    left: "5%",
    right: "5%",
    top: 200,
    borderRadius: 20,
    overflow: "scroll",
  },
  item: {
    padding: 40,
    borderBottomWidth: 1,
    borderColor: "#E5E9ED",
    color: "#1B1B1D",
    fontWeight: "bold",
    fontSize: 20,
  },
});
