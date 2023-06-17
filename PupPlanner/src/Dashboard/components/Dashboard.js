import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import NavBar from "../../NavBar";

import { firebase } from "../../../Firebase/firebase";

const Dashboard = ({ route, navigation }) => {
  const [userEmail, setUserEmail] = useState("");
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
    // Fetch the dogProfile document matching the user's email
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
      } catch (error) {
        console.error("Error fetching dogProfile:", error);
      }
    };

    fetchDogProfile();
  }, [email]);

  if (dogProfile) {
    welcomeMessage = `Welcome Back, ${
      dogProfile.petName ? dogProfile.petName : userEmail
    }`;
  } else {
    welcomeMessage = `Welcome Back, ${userEmail}`;
  }

  return (
    <View style={styles.dashboard}>
      <NavBar navigation={navigation} />
      <Text style={styles.welcomeText}>{welcomeMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    backgroundColor: "#fff",
  },
  welcomeText: {
    fontSize: 24,
    margin: 20,
  },
});

export default Dashboard;
