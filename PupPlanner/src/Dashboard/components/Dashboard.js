import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import NavBar from "../../NavBar";
import Calendar from "./Calendar"; // Import the Calendar component

import { firebase } from "../../../Firebase/firebase";

const Dashboard = ({ route, navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const { email } = route.params;
  let welcomeMessage = "";

  const [dogProfile, setDogProfile] = useState(null);

  useEffect(() => {
    // Check if the user is logged in
    const user = firebase.auth().currentUser;
    if (user) {
      setUserEmail(user.email);
    }
  }, []);

  useEffect(() => {
    const fetchDogProfile = async () => {
      try {
        const docSnapshot = await firebase
          .firestore()
          .collection("dogProfiles")
          .doc(email)
          .get();
        if (docSnapshot.exists) {
          const dogProfileData = docSnapshot.data();
          setDogProfile(dogProfileData);
        }
        setLoading(false); // Set loading to false after fetching the data
      } catch (error) {
        console.error("Error fetching dogProfile:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchDogProfile();
  }, [email]);

  if (loading) {
    return (
      <View style={styles.dashboard}>
        <NavBar navigation={navigation} />
        <Text style={styles.welcomeText}>Loading...</Text>
      </View>
    );
  }

  if (dogProfile) {
    welcomeMessage = `Welcome back, \n${
      dogProfile.petName ? dogProfile.petName : userEmail
    }`;
  } else {
    welcomeMessage = `Welcome back, \n${userEmail}`;
  }

  return (
    <View style={styles.dashboard}>
      <NavBar navigation={navigation} />
      <Text style={styles.welcomeText}>{welcomeMessage}</Text>
      <Calendar />
    </View>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    backgroundColor: "#fff",
  },
  welcomeText: {
    fontSize: 38,
    fontWeight: 700,
    height: 114,
    marginTop: 32,
    textAlign: "center",
  },
});

export default Dashboard;
