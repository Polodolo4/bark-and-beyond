import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";

const CreateProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.backGreen}></SafeAreaView>
      <Text style={styles.header}>Create Profile</Text>
      <Text style={styles.contact}>How can we contact you?</Text>

      <TextInput
        style={[styles.name, { backgroundColor: "white" }]}
        placeholder="Enter your full name"
        placeholderTextColor="#000"
      />
    </SafeAreaView>
  );
};

export default CreateProfile;

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
    flex: 1,
    backgroundColor: "#B8DFA9",
  },
  contact: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
    position: "absolute",
    width: 209,
    left: 24,
    top: 386,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 0,
    gap: 6,
    position: "absolute",
    width: 345,
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    top: 442,
    paddingLeft: 15,
    left: 24,
    color: "#333",
  },
});
