import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasks}>
        <Text style={styles.title}>Your Tasks</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },
  tasks: {},
  title: {
    height: 236,
    backgroundColor: "#4A3780",
  },
  items: {},
});
