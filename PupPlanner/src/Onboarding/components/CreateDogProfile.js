import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const FirstInputField = ({
  value,
  onChangeText,
  label,
  placeholder,
  secureTextEntry = false,
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.firstInputLabel}>{label}</Text>
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

const SubInputField = ({
  value,
  onChangeText,
  label,
  placeholder,
  secureTextEntry = false,
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.subInputLabel}>{label}</Text>
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

const CreateDogProfile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [breed, setBreed] = useState("");
  const [notes, setNotes] = useState("");

  const navigation = useNavigation();

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleAgeChange = (value) => {
    setAge(value);
  };

  const handleWeightChange = (value) => {
    setWeight(value);
  };

  const handleBreedChange = (value) => {
    setBreed(value);
  };

  const handleNotesChange = (value) => {
    setBreed(value);
  };

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Create Profile</Text>
        <TouchableOpacity style={styles.photoButton}>
          <Image
            style={styles.photoImage}
            source={require("../assets/add-photo.png")}
          />
        </TouchableOpacity>

        <Text style={styles.tellUs}>Tell us about your pup</Text>

        <FirstInputField
          value={name}
          onChangeText={handleNameChange}
          label="Pup's name"
          placeholder="Enter pup's name"
        />
        <SubInputField
          value={age}
          onChangeText={handleAgeChange}
          label="Pup's age"
          placeholder="How old is your pup"
        />
        <SubInputField
          value={weight}
          onChangeText={handleWeightChange}
          label="Pup's weight"
          placeholder="Enter weight in lbs"
        />
        <SubInputField
          value={breed}
          onChangeText={handleBreedChange}
          label="Breed"
          placeholder="Enter your pup's breed"
        />
        <SubInputField
          value={notes}
          onChangeText={handleNotesChange}
          label="Notes for pup"
          placeholder="Enter any special needs or notes"
        />

        <TouchableOpacity
          style={styles.continueButton}
          // onPress={() => console.log(firebase)}
          //onPress={loginUser}
          onPress={() => navigation.navigate("CreateProfile")}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("CreateProfile")}>
          <Text style={styles.goBack}>Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default CreateDogProfile;

const styles = StyleSheet.create({
  header: {
    //  fontFamily: "poppins",
    fontSize: 50,
    fontWeight: "bold",
    lineHeight: 75,
    marginTop: 103,
    textAlign: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    flex: 1,
    backgroundColor: "#B8DFA9",
  },
  tellUs: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 40,
    marginRight: 215,
  },
  inputContainer: {
    width: "90%",
    marginBottom: 20,
  },
  firstInputLabel: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 32,
    fontWeight: "bold",
  },
  subInputLabel: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 16,
    fontWeight: "bold",
  },
  input: {
    height: 48,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  continueButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: 48,
    backgroundColor: "#323841",
    borderRadius: 30,
    marginTop: 48,
  },
  continueText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancel: {
    fontSize: 16,
  },
  photoButton: {
    height: 144,
    width: 144,
    marginTop: 24,
  },
  goBack: {
    fontWeight: "700",
    fontSize: 16,
    marginTop: 24,
    marginBottom: 86,
  },
});
