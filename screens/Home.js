import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  BodyText,
  HeadingText,
  InfoText,
  LargeText,
  NavigationText,
  UserNameText,
} from "../components/Typography";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { colors } from "../themes/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React, { useState, useRef } from "react";
import { Modal, Pressable } from "react-native";
import { Animated, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

const Head = ({ openDrawer }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  return (
    <View style={{ paddingTop: 12 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        <TouchableOpacity activeOpacity={0.6} onPress={openDrawer}>
          <EvilIcons name="navicon" size={40} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 50, height: 50 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={["#D7F0FF", "#90D5FF"]}
        style={{
          paddingTop: 16,
          borderBottomRightRadius: 28,
          borderBottomLeftRadius: 28,
          paddingBottom: 24,
          paddingHorizontal: 16,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <View
          style={{
            backgroundColor: "#54BEFF",
            paddingVertical: 24,
            paddingHorizontal: 16,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 24,
            borderBottomLeftRadius: 24,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ rowGap: 4 }}>
              <UserNameText
                text={"Welcome, Vaibhav"}
                color={"white"}
                weight={700}
              />
              <HeadingText
                text={"Thursday, 12 Jun"}
                color={colors.primary}
                weight={500}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#000000",
                padding: 12,
                borderRadius: 16,
                borderWidth: 1,
                flexDirection: "row",
                alignItems: "center",
                elevation: 20,
              }}
              activeOpacity={0.7}
              onPress={() => setShowConfirmModal(true)}
            >
              <BodyText text={"Punch Out "} color={colors.white} weight={500} />
              <AntDesign name="logout" size={16} color="#46ECBD" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showConfirmModal}
        statusBarTranslucent
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.1)",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99,
          }}
        >
          <View
            style={{
              width: "85%",
              backgroundColor: "white",
              borderRadius: 20,
              padding: 24,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
              elevation: 10,
            }}
          >
            <AntDesign name="exclamationcircle" size={44} color="orange" />
            <HeadingText
              text={"Are you sure,\nYou want to Punch Out?"}
              weight={500}
            />
            <View style={{ flexDirection: "row", paddingTop: 8 }}>
              <Pressable
                onPress={() => setShowConfirmModal(false)}
                style={{
                  backgroundColor: "red",
                  paddingVertical: 10,
                  paddingHorizontal: 50,
                  borderRadius: 20,
                  marginRight: 10,
                }}
              >
                <HeadingText text={"NO"} weight={700} color={"white"} />
              </Pressable>
              <Pressable
                onPress={() => {
                  setShowConfirmModal(false);
                  console.log("Punched out");
                }}
                style={{
                  backgroundColor: "green",
                  paddingVertical: 10,
                  paddingHorizontal: 50,
                  borderRadius: 20,
                }}
              >
                <HeadingText text={"Yes"} weight={700} color={"white"} />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const Cards = ({ navigation }) => {
  const cards = [
    {
      title: "My Attendance",
      icon: <Feather name="user-check" size={32} color="#428AFF" />,
    },
    {
      title: "Team Attendance",
      icon: <Feather name="users" size={32} color="#428AFF" />,
    },
    {
      title: "My Regularization",
      icon: (
        <MaterialCommunityIcons name="file-check" size={32} color="#428AFF" />
      ),
    },
    {
      title: "Team Regularization",
      icon: <Feather name="file-text" size={32} color="#428AFF" />,
    },
    {
      title: "My Leaves",
      icon: <Feather name="log-out" size={32} color="#428AFF" />,
    },
    {
      title: "Team Leaves",
      icon: <Feather name="users" size={32} color="#428AFF" />,
    },
    {
      title: "My Expense",
      icon: <FontAwesome5 name="money-check-alt" size={30} color="#428AFF" />,
    },
    {
      title: "Team Expense",
      icon: <FontAwesome5 name="money-check" size={30} color="#428AFF" />,
    },
    {
      title: "My Payslips",
      icon: <MaterialIcons name="attach-money" size={30} color="#428AFF" />,
    },
    {
      title: "My Resignation",
      icon: <Ionicons name="exit-outline" size={30} color="#428AFF" />,
    },
    {
      title: "Team Resignation",
      icon: <FontAwesome6 name="users-slash" size={30} color="#428AFF" />,
    },
  ];

  return (
    <View style={{ paddingHorizontal: 12, flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 60,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingHorizontal: 4,
        }}
        showsVerticalScrollIndicator={false}
        style={{ borderRadius: 16 }}
      >
        {cards.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: "47%",
              backgroundColor: "#fff",
              borderRadius: 16,
              padding: 20,
              marginBottom: 16,
              alignItems: "center",
              shadowColor: "#000",
              elevation: 2,
              paddingVertical: 32,
            }}
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Detail", { title: card.title })}
          >
            {card.icon}
            <NavigationText text={card.title} weight={500} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate("Support")}
        style={{
          position: "absolute",
          bottom: 30,
          right: 20,
          backgroundColor: "#fff",
          padding: 16,
          borderRadius: 50,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 8,
        }}
        activeOpacity={0.8}
      >
        <Feather name="help-circle" size={28} color="#08AD9A" />
      </TouchableOpacity>
    </View>
  );
};
export default function Home({ navigation }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const drawerX = useRef(
    new Animated.Value(-Dimensions.get("window").width)
  ).current;

  const openDrawer = () => {
    setDrawerOpen(true);
    Animated.timing(drawerX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(drawerX, {
      toValue: -Dimensions.get("window").width,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setDrawerOpen(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#e6f1fc" }}>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#003478", "#38b6ff"]}
        style={{
          paddingBottom: 20,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          paddingHorizontal: 16,
        }}
      >
        <SafeAreaView>
          <Head openDrawer={openDrawer} />
        </SafeAreaView>
      </LinearGradient>

      <Cards navigation={navigation} />
      {isDrawerOpen && (
        <TouchableWithoutFeedback onPress={closeDrawer}>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.3)",
              zIndex: 9,
            }}
          />
        </TouchableWithoutFeedback>
      )}

      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "80%",
          height: "100%",
          backgroundColor: "white",
          paddingTop: 60,
          paddingHorizontal: 20,
          transform: [{ translateX: drawerX }],
        }}
      >
        <LinearGradient
          colors={["#003478", "#38b6ff"]}
          style={{ borderRadius: 24, padding: 12 }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome5
              name="user-tie"
              size={50}
              color="#38b6ff"
              style={{
                padding: 12,
                paddingHorizontal: 18,
                backgroundColor: "white",
                borderRadius: 70,
              }}
            />
            <LargeText text={"Viabhav Birla"} weight={700} color={"white"} />
          </View>
          <ScrollView>
            {[
              "Policy",
              "My Holidays",
              "My Attendance",
              "Team Attendance",
              "My Regularization",
              "Team Regularization",
              "My Leave",
              "Team Leaves",
              "My Payslips",
              "My Expense",
              "Team Expense",
              "Work Assigned",
              "Support",
            ].map((item, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  closeDrawer();
                  navigation.navigate("Detail", { title: item });
                }}
                style={{ marginVertical: 12 }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </LinearGradient>
        <TouchableOpacity
          style={{
            marginTop: 30,
            backgroundColor: "red",
            padding: 12,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <UserNameText text={"LOGOUT"} weight={600} color={"white"} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
