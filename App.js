import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [result, setResult] = useState(0);

  const addNum = () => {
    const addedNum = parseInt(firstNum) + parseInt(secondNum);
    setResult(addedNum);
    setFirstNum("");
    setSecondNum("");
  };

  const subtractNum = () => {
    const subtractedNum = parseInt(firstNum) - parseInt(secondNum);
    setResult(subtractedNum);
    setFirstNum("");
    setSecondNum("");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Result: {result}
        </Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(firstNum) => setFirstNum(firstNum)}
        value={firstNum}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.input}
        onChangeText={(secondNum) => setSecondNum(secondNum)}
        value={secondNum}
        keyboardType="numeric"
      ></TextInput>
      <View style={{ flexDirection: "row" }}>
        <Button onPress={addNum} title="+" />
        <Button onPress={subtractNum} title="-" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
  },
});
