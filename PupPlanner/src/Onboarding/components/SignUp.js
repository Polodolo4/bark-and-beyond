import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { firebase } from "../../../Firebase/firebase";
import { useNavigation } from "@react-navigation/native";

// Utility function to check if email is valid
const isEmailValid = (value) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(value);
};

// Utility function to check if password is valid
const isPasswordValid = (value) => {
  return value.length >= 6;
};

const EmailInput = ({ value, onChangeText }) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      style={[styles.input, styles.email]}
      placeholder="Enter your email address"
      placeholderTextColor="#000"
    />
  );
};

const PasswordInput = ({ value, onChangeText }) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      style={[styles.input, styles.password]}
      placeholder="Enter your password"
      placeholderTextColor="#000"
      secureTextEntry={true}
    />
  );
};

const ErrorText = ({ error }) => {
  return <Text style={styles.error}>{error}</Text>;
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();

  // Event handler for email input change
  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError(""); // Clear email error message
    setErrorMessage(""); // Clear general error message
  };

  // Event handler for password input change
  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordError(""); // Clear password error message
    setErrorMessage(""); // Clear general error message
  };

  // Function to handle user creation
  const handleCreateUser = () => {
    if (!isEmailValid(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!isPasswordValid(password)) {
      setPasswordError("Please enter a password with at least 6 characters.");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email.trim(), password)
      .then(() => {
        console.log("User created successfully");
        navigation.navigate("CreateProfile");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  useEffect(() => {
    // Monitor authentication state
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

  const isButtonDisabled = !isEmailValid(email) || !isPasswordValid(password);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <SafeAreaView style={styles.backGreen}></SafeAreaView>
      <Text style={styles.header}>Sign Up</Text>

      <EmailInput
        value={email}
        onChangeText={handleEmailChange}
      />

      {emailError && <ErrorText error={emailError} />}

      <PasswordInput
        value={password}
        onChangeText={handlePasswordChange}
      />

      {passwordError && <ErrorText error={passwordError} />}

      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

      <View style={styles.lineBreak}></View>

      <TouchableOpacity
        style={[
          styles.button,
          styles.continueButton,
          isButtonDisabled && styles.disabledButton,
        ]}
        onPress={handleCreateUser}
        disabled={isButtonDisabled}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.gmailButton]}>
        <Text style={styles.buttonText}>Continue with Gmail</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.appleButton]}>
        <Text style={styles.buttonText}>Continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.facebookButton]}>
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  backGreen: {
    flex: 1,
    width: "100%",
    backgroundColor: "#B8DFA9",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  input: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 0,
    gap: 6,
    width: 345,
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    color: "#333",
    backgroundColor: "#FFF",
  },
  email: {
    marginTop: 252,
  },
  password: {
    marginTop: 364,
  },
  lineBreak: {
    width: 327,
    height: 0,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 576,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: 183,
    height: 48,
    borderRadius: 30,
  },
  continueButton: {
    backgroundColor: "#323841",
  },
  disabledButton: {
    backgroundColor: "gray",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  gmailButton: {
    marginTop: 624,
    borderColor: "#000",
    backgroundColor: "#FFF",
  },
  appleButton: {
    marginTop: 688,
    borderColor: "#000",
    backgroundColor: "#FFF",
  },
  facebookButton: {
    marginTop: 752,
    borderColor: "#000",
    backgroundColor: "#FFF",
  },
  error: {
    color: "red",
    marginTop: 8,
    marginBottom: 8,
  },
  errorMessage: {
    color: "red",
    marginTop: 416,
  },
});
