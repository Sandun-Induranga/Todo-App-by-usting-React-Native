import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function Task() {
  return (
    <View style={styles.item}>
      <Ionicons
        style={{
          backgroundColor: "#E7E2F3",
          borderRadius: 50,
          padding: 10,
          width: 52,
        }}
        name="md-trophy"
        size={30}
        color="#4A3780"
      />

      <View style={{ marginLeft: 20, width: "70%" }}>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>JS Assignment</Text>
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
          size={18}
          color="#403100"
        />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
