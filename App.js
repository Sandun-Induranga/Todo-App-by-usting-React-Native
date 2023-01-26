import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasks}>
        <Text style={styles.title}>Your Tasks</Text>
      </View>
      <View style={styles.items}></View>
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
  },
});
