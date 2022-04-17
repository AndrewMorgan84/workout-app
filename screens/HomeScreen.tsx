import { View, Text } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useEffect } from "react";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  useEffect(() => {
    console.log("Rendering Home Screen");
  }, []);

  return (
    <View>
      <Text>I am Home screen</Text>
    </View>
  );
}
