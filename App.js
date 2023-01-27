import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasks}>
        <Text style={styles.title}>Your Tasks</Text>
      </View>
      <View style={styles.items}>
        <Text style={styles.item}>Task 1</Text>
        <Text style={styles.item}>Task 2</Text>
        <Text style={styles.item}>Task 3</Text>
        <Text style={styles.item}>Task 4</Text>
        <Text style={styles.item}>Task 5</Text>
        <Text style={styles.item}>Task 6</Text>
        <Text style={styles.item}>Task 7</Text>
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
