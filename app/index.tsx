import { Text, View, StyleSheet, StatusBar } from "react-native";
import WelcomeScreen from "../screens/WelcomeScreen";

export default function Index() {

  return (
    <View>
      <WelcomeScreen navigation={undefined} />
    </View>
  );
}