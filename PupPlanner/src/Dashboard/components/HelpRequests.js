import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HelpRequests = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Help Requests</Text>
        <Image
          source={require("../assets/plus.png")}
          style={styles.plus}
        />
      </View>

      <View style={styles.requestContact}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/john1.png")}
            style={styles.user}
          />
          <Text style={styles.helpName}>John</Text>
        </View>

        <View style={styles.requestBody}>
          <View style={styles.textContainer}>
            <Text style={styles.requestText}>
              Need dog walking in March, for 2 weeks, paid.. Twice a day.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.requestContact}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/john1.png")}
            style={styles.user}
          />
          <Text style={styles.helpName}>Sammy</Text>
        </View>

        <View style={styles.requestBody}>
          <View style={styles.textContainer}>
            <Text style={styles.requestText}>Need someone</Text>
          </View>
        </View>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  plus: {
    marginRight: 16,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 16,
  },
  requestContact: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    marginLeft: 16,
  },
  helpName: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
  },
  requestBody: {
    height: 73,
    width: "80%",
    marginRight: 16,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#E9EEF6",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textContainer: {
    marginTop: 8,
  },
  requestText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
  },
});
