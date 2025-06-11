import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import DetailScreen from "./screens/DetailScreen";
import SupportScreen from "./screens/SupportScreen"; // ✅ Import Support screen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#fff" },
            headerTintColor: "#003478",
            headerTitleStyle: { fontWeight: "700" },
          })}
        />
        <Stack.Screen
          name="Support"
          component={SupportScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
