import { AntDesign, Ionicons } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const [expenseRequest, setExpenseRequest] = useState({
    expenseName: "",
    expenseAmount: "",
  });

  const { navigate } = useNavigation<any>();

  const handleAddExpense = async () => {
    if (expenseRequest.expenseName && expenseRequest.expenseAmount) {
      try {
        const user = auth().currentUser;
        if (user) {
          const expenseRef = database().ref("expenses");
          const newExpenseRef = expenseRef.push();
          await newExpenseRef.set({
            expenseName: expenseRequest.expenseName,
            expenseAmount: parseFloat(expenseRequest.expenseAmount),
            userId: user.uid,
            timestamp: database.ServerValue.TIMESTAMP,
          });
          Alert.alert("Success", "expense added successfully");
          navigate("expenses");
          console.log("document written", newExpenseRef.key);
        }
      } catch (error) {
        console.error("error adding document", error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "800", color: "#03c2fc" }}>
          Expense tracker
        </Text>
      </View>
      <TextInput
        placeholder="Shopping"
        style={styles.input}
        value={expenseRequest.expenseName}
        onChangeText={(text) =>
          setExpenseRequest({ ...expenseRequest, expenseName: text })
        }
      />
      <TextInput
        placeholder="2000"
        style={styles.input}
        value={expenseRequest.expenseAmount}
        onChangeText={(text) =>
          setExpenseRequest({ ...expenseRequest, expenseAmount: text })
        }
      />

      <TouchableOpacity style={styles.button} onPress={handleAddExpense}>
        <Text style={{ color: "black", fontWeight: "400", fontSize: 16 }}>
          Add Expense
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  input: {
    width: "90%",
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 50,
  },
  button: {
    height: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderColor: "black",
    width: "60%",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "#03c2fc",
  },
});
