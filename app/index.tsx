import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function HeroScreen() {
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
      <TextInput placeholder="Enter email" style={styles.input} />
      <TextInput
        placeholder="Enter password"
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "black", fontWeight: "700", fontSize: 16 }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
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
