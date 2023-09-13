import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { firebase } from "../../../Firebase/firebase";
import "firebase/storage";
import "firebase/firestore";

const InputField = ({
  value,
  onChangeText,
  label,
  placeholder,
  secureTextEntry = false,
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput
      onChangeText={onChangeText}
      value={value}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#000"
      secureTextEntry={secureTextEntry}
    />
  </View>
);

const AddToPN = () => {
  const [help, setHelp] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [pay, setPay] = useState("");
  const [request, setRequest] = useState("");

  const navigation = useNavigation();

  const handleHelpChange = (value) => {
    setHelp(value);
  };

  const handleDayChange = (value) => {
    setDay(value);
  };

  const handleTimeChange = (value) => {
    setTime(value);
  };

  const handlePayChange = (value) => {
    setPay(value);
  };

  const handleRequestChange = (value) => {
    setRequest(value);
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.greenBackground}>
        <View style={styles.topButtons}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require("../assets/cheveron-left.png")}
                style={styles.backButton}
              />
            </TouchableOpacity>

            <View style={styles.addContainer}>
              <Text style={styles.addToNetwork}>Request help</Text>
            </View>
          </View>
        </View>
      </View>

      <InputField
        value={help}
        onChangeText={handleHelpChange}
        label="What do you need help with?"
      />

      <InputField
        value={day}
        onChangeText={handleDayChange}
        label="What day(s)?"
      />

      <InputField
        value={time}
        onChangeText={handleTimeChange}
        label="What time(s)?"
      />

      <InputField
        value={pay}
        onChangeText={handlePayChange}
        label="How much will you be paying (optional)"
        placeholder="$"
      />

      <InputField
        value={request}
        onChangeText={handleRequestChange}
        label="Who do you want to see your request?"
      />

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("ProfilePN")}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

export default AddToPN;

const styles = StyleSheet.create({
  greenBackground: {
    backgroundColor: "#B8DFA9",
    height: 98,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginHorizontal: 24,
    marginTop: 60,
  },
  cancel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#323841",
  },
  addContainer: {
    flex: 0.85,
    justifyContent: "center",
    alignItems: "center",
  },
  addToNetwork: {
    color: "#000",
    fontSize: 16,
    fontWeight: 700,
  },
  photoButton: {
    marginTop: 30,
    marginBottom: 8,
    alignSelf: "center",
  },
  inputContainer: {
    marginLeft: 29,
    marginRight: 19,
    marginTop: 16,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 6,
    marginTop: 16,
    fontWeight: "bold",
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  continueButton: {
    //display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "45%",
    height: 48,
    backgroundColor: "#323841",
    borderRadius: 30,
    marginTop: 32,
    marginBottom: 116,
  },
  continueText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: 600,
  },
});
