import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
            <Text style={styles.backButton}>&lt;</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.editButton}>Edit</Text>
          </TouchableOpacity>
        </View>
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
  },
});
