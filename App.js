import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasks}>
        <Text style={styles.title}>My Todo List</Text>
      </View>
      <View style={styles.items}>
        <View>
          <View style={styles.item}>
            <Ionicons
              style={{
                backgroundColor: "#E7E2F3",
                borderRadius: 50,
                padding: 10,
              }}
              name="md-trophy"
              size={30}
              color="#4A3780"
            />

            <View style={{ marginLeft: 20, width: "70%" }}>
              <Text style={{ fontSize: 22, fontWeight: "600" }}>
                JS Assignment
              </Text>
              <Text
                style={{
                  color: "#767579",
                  fontWeight: "400",
                  fontSize: 16,
                }}
              >
                Before 30/01/2023
              </Text>
            </View>
            <Text style={{ left: -10 }}>
              <Ionicons
                style={{ backgroundColor: "#FEF5D3" }}
                name="md-trash"
                size={25}
                color="#403100"
              />
            </Text>
          </View>
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
    paddingTop: 10,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    height: 80,
    borderBottomWidth: 1,
    borderColor: "#E5E9ED",
    color: "#1B1B1D",
    fontWeight: "bold",
    fontSize: 25,
    paddingLeft: 20,
    justifyContent: "flex-start",
    alignItems: "center",
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
