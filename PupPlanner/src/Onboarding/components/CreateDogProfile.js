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
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const CreateDogProfile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.alignContainer}>
        <Text style={styles.header}>Create Profile</Text>

        <TouchableOpacity style={styles.photoButton}>
          <Image
            style={styles.photoImage}
            source={require("../assets/add-photo.png")}
          />
        </TouchableOpacity>

        <Text style={styles.tellUs}>Tell us about your pup</Text>

        <TextInput
          style={[styles.nameBox, { backgroundColor: "white" }]}
          placeholder="Enter pup's name"
          placeholderTextColor="#000"
        />

        <TextInput
          style={[styles.subBox, { backgroundColor: "white" }]}
          placeholder="How old is your pup"
          placeholderTextColor="#000"
        />

        <TextInput
          style={[styles.subBox, { backgroundColor: "white" }]}
          placeholder="Enter weight in pounds"
          placeholderTextColor="#000"
        />

        <TextInput
          style={[styles.subBox, { backgroundColor: "white" }]}
          placeholder="Enter your pup's breed"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.subBox, { backgroundColor: "white" }]}
          placeholder="Enter any special needs or notes"
          placeholderTextColor="#000"
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
    </ScrollView>
  );
};

export default CreateDogProfile;

const styles = StyleSheet.create({
  header: {
    //  fontFamily: "poppins",
    fontSize: 50,
    fontWeight: "bold",
    // position: "absolute",
    lineHeight: 75,
    marginTop: 103,
    textAlign: "center",
  },
  container: {
    //  alignItems: "center",
    width: "100%",
    // left: 5,
    flex: 1,
    backgroundColor: "#B8DFA9",
  },
  alignContainer: {
    alignItems: "center",
    width: "100%",
    // left: 5,
    flex: 1,
    backgroundColor: "#B8DFA9",
  },
  tellUs: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
    //  position: "absolute",
    width: 209,
    marginTop: 40,
    //  left: 24,
    //  top: 386,
  },
  nameBox: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    //  padding: 0,
    //  gap: 6,
    //  position: "relative",
    width: 345,
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    //  top: 442,
    paddingLeft: 15,
    marginTop: 62,
    // left: 24,
    color: "#333",
  },
  subBox: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 0,
    gap: 6,
    //  position: "absolute",
    width: 345,
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    //  top: 536,
    paddingLeft: 15,
    marginTop: 46,
    //  left: 24,
    color: "#333",
  },
  continueButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    //position: "absolute",
    width: 183,
    height: 48,
    //   top: 662,
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
    //  position: "absolute",
    //  top: 734,
    fontSize: 16,
  },
  photoButton: {
    //   position: "absolute",
    //  top: 202,
    //   left: 124,
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
