import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function GoalItem({ text }) {
  return (
    <View style={styles.goalItems}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
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
