import { Text, StyleSheet, Pressable } from "react-native";

export default function TaskItem({ item }) {
  return (
    <Pressable
      onPress={handleDoneItem}
      style={item.done ? styles.taskContainerDone : styles.taskContainer}
    >
      <Text>{item.title}</Text>;
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "red",
    margin: 4,
    padding: 10,
    borderRadius: 8,
  },
  taskContainerDone: {
    backgroundColor: "red",
    margin: 4,
    padding: 10,
    borderRadius: 8,
  },
});
