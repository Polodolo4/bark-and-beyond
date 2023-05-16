import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../../../Firebase/firebase";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  //const [user, setUser] = useState("");

  function emailChange(value) {
    setEmail(value);
  }

  function passwordChange(value) {
    setPassword(value);
  }

  function loginUser() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then((userCredential) => {
        console.log(userCredential);
      });
  }

  useEffect(() => {
    const monitorAuthState = async () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
        } else {
          console.log("You're not logged in");
        }
      });
    };
    monitorAuthState();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.backGreen}></SafeAreaView>
      <Text style={styles.header}>Log In</Text>

      <TextInput
        onChangeText={emailChange}
        value={email}
        style={[styles.email, { backgroundColor: "white" }]}
        placeholder="Enter your email address"
        placeholderTextColor="#000"
      />
      <TextInput
        onChangeText={passwordChange}
        value={password}
        style={[styles.password, { backgroundColor: "white" }]}
        placeholder="Enter your password"
        placeholderTextColor="#000"
        secureTextEntry={true}
      />

      <View style={styles.lineBreak}></View>

      <TouchableOpacity
        style={styles.continueButton}
        // onPress={() => console.log(firebase)}
        //onPress={loginUser}
        onPress={() => navigation.navigate("CreateDogProfile")}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.gmailButton, { backgroundColor: "white" }]}
      >
        <Text style={styles.externalText}>Continue with Gmail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.appleButton, { backgroundColor: "white" }]}
      >
        <Text style={styles.externalText}>Continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.facebookButton, { backgroundColor: "white" }]}
      >
        <Text style={styles.externalText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    //  fontFamily: "poppins",
    fontSize: 50,
    fontWeight: "bold",
    position: "absolute",
    lineHeight: 75,
    marginTop: 103,
    textAlign: "center",
  },
  container: {
    alignItems: "center",
    width: 400,
    left: 5,
    flex: 1,
    // backgroundColor: "#B8DFA9",
  },
  backGreen: {
    alignItems: "center",
    width: 400,
    top: 179,
    flex: 1,
    backgroundColor: "#B8DFA9",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  email: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    fontSize: 16,
    fontWeight: "bold",
    padding: 0,
    gap: 6,
    position: "absolute",
    width: 345,
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 252,
    paddingLeft: 15,
    color: "#333",
  },
  password: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    fontSize: 16,
    fontWeight: "bold",
    padding: 0,
    gap: 6,
    position: "absolute",
    width: 345,
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 364,
    paddingLeft: 15,
    color: "#333",
  },
  lineBreak: {
    position: "absolute",
    width: 327,
    height: 0,
    borderWidth: 1,
    borderColor: "black",
    left: 41,
    top: 550,
  },
  continueButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    position: "absolute",
    width: 183,
    height: 48,
    top: 480,
    backgroundColor: "#323841",
    borderRadius: 30,
  },
  continueText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  gmailButton: {
    position: "absolute",
    width: 345,
    height: 48,
    top: 624,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 30,
  },
  appleButton: {
    position: "absolute",
    width: 345,
    height: 48,
    top: 688,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 30,
  },
  facebookButton: {
    position: "absolute",
    width: 345,
    height: 48,
    top: 752,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 30,
  },
  externalText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
