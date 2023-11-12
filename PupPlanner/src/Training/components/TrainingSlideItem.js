import React from "react";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const slideWidth = width - 8;

const TrainingSlideItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.slideTwo}>
      {item.images.map((imageSource, index) => (
        <View
          key={index}
          style={styles.row}
        >
          <Image
            source={imageSource}
            style={styles.imageTwo}
          />
        </View>
      ))}
    </View>
  );
};

export default TrainingSlideItem;

const styles = StyleSheet.create({
  slideTwo: {
    width: slideWidth,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 32,
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
