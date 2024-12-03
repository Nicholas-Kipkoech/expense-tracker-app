import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ToastAndroid,
} from "react-native";

import { auth } from "../components/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigation } from "expo-router";

const LoginScreen = () => {
  const [loginRequest, setLoginRequest] = useState({
    email: "",
    password: "",
  });

  const nav = useNavigation<any>();

  async function handleLogin() {
    const { email, password } = loginRequest;
    if (email && password) {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = response.user;
        nav.navigate("(tabs)");
      } catch (error) {
        Alert.alert("Oops", "Please check your form and submit again");
      }
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/budget.png")}
      />
      <View>
        <Text style={{ fontSize: 20, fontWeight: "800", color: "#03c2fc" }}>
          Expense tracker
        </Text>
      </View>
      <TextInput
        placeholder="Enter email"
        style={styles.input}
        value={loginRequest.email}
        onChangeText={(text) =>
          setLoginRequest({ ...loginRequest, email: text })
        }
      />
      <TextInput
        placeholder="Enter password"
        style={styles.input}
        secureTextEntry
        value={loginRequest.password}
        onChangeText={(text) =>
          setLoginRequest({ ...loginRequest, password: text })
        }
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={{ color: "black", fontWeight: "700", fontSize: 16 }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

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
    width: "100%",
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
  logo: {
    height: 60,
    width: 60,
  },
});

export default LoginScreen;
