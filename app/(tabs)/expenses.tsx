import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ExpensesScreen() {
  return (
    <SafeAreaView
      style={{
        margin: 4,
      }}
    >
      <View style={styles.navbar}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>Home</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <View style={styles.walletContainer}>
        <Text>This month spend</Text>
        <Text style={styles.amountText}>
          KSH {Number(2000).toLocaleString()}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
          alignItems: "center",
          justifyContent: "center",
          width: 20,
          position: "absolute",
          bottom: 10,
          right: 10,
          height: 20,
          backgroundColor: "#fff",
          borderRadius: 100,
        }}
      >
        <AntDesign name="plus" size={10} color="#01a699" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  walletContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  amountText: {
    fontSize: 30,
    fontWeight: "600",
  },
});
