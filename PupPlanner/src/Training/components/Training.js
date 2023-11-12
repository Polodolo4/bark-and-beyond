import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Carousel from "react-native-new-snap-carousel";
import ScreenWrapper from "../../ScreenWrapper";
import TrainingSlider from "./TrainingSlider";

const { width } = Dimensions.get("window");
const slideWidth = width - 8;

const trainingVideos = [
  {
    id: 1,
    imageSource: require("../assets/TunnelDog.png"),
  },
  {
    id: 2,
    imageSource: require("../assets/FrisbeeDog.png"),
  },
  {
    id: 3,
    imageSource: require("../assets/ListenDog.png"),
  },
];

const Training = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slideOne}>
        <Image
          source={item.imageSource}
          style={styles.imageOne}
        />
      </View>
    );
  };

  const snapOffsets = trainingVideos.map((_, index) => index * slideWidth);

  return (
    <ScreenWrapper navigation={navigation}>
      <ScrollView>
        <Text style={styles.headers}>Training Videos</Text>
        <Carousel
          data={trainingVideos}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={slideWidth}
          loop={false}
          loopClonesPerSide={trainingVideos.length}
          firstItem={0}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          snapToOffsets={snapOffsets}
        />
        <Text style={styles.headers}>Categories</Text>

        <TrainingSlider />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Training;

const styles = StyleSheet.create({
  headers: {
    marginLeft: 16,
    marginTop: 30,
    color: "#000",
    fontSize: 22,
    fontWeight: "700",
  },
  slideOne: {
    width: slideWidth,
    height: 275,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  imageOne: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
  slideTwo: {
    width: slideWidth,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  row: {
    width: "45%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
  },
  imageTwo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 16,
  },
});
