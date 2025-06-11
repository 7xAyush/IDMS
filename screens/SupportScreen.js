import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const SupportScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help & Support</Text>
        <Ionicons name="filter" size={24} color="black" />
      </View>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View style={styles.ticketCard}>
          <View style={styles.cardRow}>
            <Text style={styles.label}>
              <Ionicons name="grid-outline" size={16} /> Module Name:
            </Text>
            <Text style={styles.value}>Attendance</Text>
          </View>

          <View style={styles.cardRow}>
            <Text style={styles.label}>
              <Ionicons name="calendar-outline" size={16} /> Raised On:
            </Text>
            <Text style={styles.value}>11-Jun-2025 | 03:51 PM</Text>
          </View>

          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>OPEN</Text>
          </View>
        </View>

        <Text style={styles.noRecords}>≫ NO MORE RECORDS</Text>
      </ScrollView>
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={20} color="white" />
        <Text style={styles.fabText}>Raise New Ticket</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SupportScreen;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f1fc",
  },
  header: {
    paddingTop: 50,
    paddingBottom: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#003478",
  },
  ticketCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    position: "relative",
  },
  cardRow: {
    flexDirection: "row",
    marginBottom: 6,
  },
  label: {
    fontWeight: "600",
    color: "#444",
    marginRight: 4,
  },
  value: {
    fontWeight: "700",
    color: "#000",
  },
  statusBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#F4A300",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  statusText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },
  noRecords: {
    textAlign: "center",
    color: "crimson",
    fontWeight: "700",
    fontSize: 14,
  },
  fab: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#347CF7",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  fabText: {
    color: "white",
    fontWeight: "700",
    marginLeft: 8,
    fontSize: 14,
  },
});
