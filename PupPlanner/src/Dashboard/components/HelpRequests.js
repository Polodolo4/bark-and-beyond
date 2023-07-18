import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HelpRequests = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Help Requests</Text>

      <View style={styles.requests}>
        <Image
          source={require("../assets/john.png")}
          style={styles.user}
        />
      </View>
    </View>
  );
};

export default HelpRequests;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: 700,
    marginLeft: 16,
  },
  requests: {
    marginTop: 16,
  },
});
