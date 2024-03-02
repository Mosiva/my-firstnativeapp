import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function GoalInput({ onAddGoal }) {
  const [enteredGoalText, setEneteredGoalText] = useState("");
  const goalInputHandler = (enteredText) => {
    setEneteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEneteredGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Write you thought"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add it" onPress={addGoalHandler} />
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
