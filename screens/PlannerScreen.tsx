import { View, Text } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useEffect } from "react";

export default function PlannerScreen({ navigation }: NativeStackHeaderProps) {
  return (
    <View>
      <Text>I am Planner screen</Text>
    </View>
  );
}
