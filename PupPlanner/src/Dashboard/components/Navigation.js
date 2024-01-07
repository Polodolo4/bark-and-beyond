import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-new-snap-carousel";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const slideWidth = width * 0.45;

const slides = [
  {
    id: 1,
    backgroundColor: "#B8DFA9",
    imageSource: require("../assets/services.png"),
    title: "Services",
    screen: "Services",
  },
  {
    id: 2,
    backgroundColor: "#BAE7FF",
    imageSource: require("../assets/learning.png"),
    title: "Learning",
    screen: "Learning",
  },
  {
    id: 3,
    backgroundColor: "#FFD773",
    imageSource: require("../assets/community.png"),
    title: "Community",
    screen: "Community",
  },
];

const Navigation = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const navigateToScreen = () => {
      navigation.navigate(item.screen);
    };

    return (
      <TouchableOpacity onPress={navigateToScreen}>
        <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
          <Image
            source={item.imageSource}
            style={styles.image}
          />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Navigation</Text>
      <View style={styles.content}>
        <Carousel
          data={slides}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={slideWidth}
          inactiveSlideScale={0.8}
          loop={true}
          loopClonesPerSide={slides.length}
        />
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
    paddingLeft: 15,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 24,
  },
  slide: {
    width: slideWidth,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    height: 230,
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
