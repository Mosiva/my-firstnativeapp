import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <Pressable onPress={onDeleteItem.bind(this, id)}>
      <View style={styles.goalItems}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "purple",
  },
  goalText: {
    color: "white",
  },
});
