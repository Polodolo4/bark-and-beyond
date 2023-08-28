import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ProfilePN = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView>
      <View style={styles.greenBackground}>
        <View style={styles.navbarContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/cheveron-left.png")}
              style={styles.backButton}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.editButton}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.friendBlock}>
        <Text style={styles.friendHeader}>Friend Info</Text>
        <Image
          source={require("../assets/john.png")}
          style={styles.friendPhoto}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ProfilePN;

const styles = StyleSheet.create({
  greenBackground: {
    height: 98,
    backgroundColor: "#B8DFA9",
  },
  navbarContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 64,
    justifyContent: "space-between",
  },
  backButton: {
    marginLeft: 24,
  },
  editButton: {
    fontSize: 16,
    fontWeight: 600,
    color: "#323841",
    marginRight: 24,
  },
  friendBlock: {
    marginLeft: 16,
  },
  friendHeader: {
    color: "#000",
    fontSize: 22,
    fontWeight: 700,
    marginTop: 32,
  },
  friendPhoto: {
    height: 144,
    marginTop: 16,
  },
});
