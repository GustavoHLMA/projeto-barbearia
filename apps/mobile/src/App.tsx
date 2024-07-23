import { View, Text } from "react-native";
import { soma } from "@barba/core";

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{soma(2,5)}</Text>
    </View>
  );
}