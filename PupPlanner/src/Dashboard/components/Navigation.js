import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");
const slideWidth = width * 0.45;

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Navigation</Text>
      <View style={styles.content}>
        <Swiper
          style={styles.wrapper}
          showsPagination={false}
          showsButtons={false}
        >
          <View style={[styles.slide, { backgroundColor: "#B8DFA9" }]}>
            <View style={styles.slideContent}>
              <Image
                source={require("../assets/services.png")}
                style={styles.image}
              />
              <Text style={styles.text}>Services</Text>
            </View>
          </View>
          <View style={[styles.slide, { backgroundColor: "#BAE7FF" }]}>
            <View style={styles.slideContent}>
              <Image
                source={require("../assets/learning.png")}
                style={styles.image}
              />
              <Text style={styles.text}>Learning</Text>
            </View>
          </View>
          <View style={[styles.slide, { backgroundColor: "#FFD773" }]}>
            <View style={styles.slideContent}>
              <Image
                source={require("../assets/community.png")}
                style={styles.image}
              />
              <Text style={styles.text}>Community</Text>
            </View>
          </View>
        </Swiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 24,
  },
  wrapper: {},
  slide: {
    width: slideWidth,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  slideContent: {
    height: 230,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 142,
  },
  text: {
    fontSize: 16,
    marginTop: 18,
    fontWeight: "600",
    color: "#FCFCFC",
  },
});

export default Navigation;
