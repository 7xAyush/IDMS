import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const DetailScreen = ({ route }) => {
  const { title } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e6f1fc" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialIcons name="error-outline" size={64} color="red" />
        <Text
          style={{
            marginTop: 12,
            fontSize: 20,
            fontWeight: "600",
            color: "black",
          }}
        >
          No Records Found
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
