import { StyleSheet, Animated, Text, View, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get("screen");

const TrainingPagination = ({ data, scrollX, index }) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: "clamp",
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#FFF", "#000", "#FFF"],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[
              styles.dot,
              { width: dotWidth, backgroundColor },
              // idx === index && styles.dotActive,
            ]}
          />
        );
      })}
    </View>
  );
};

export default TrainingPagination;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 8, // Adjust the bottom value as needed
    left: "50%",
    marginLeft: -56, // Half of the width
    flexDirection: "row",
    width: 112, // Fixed width
    height: 24,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B8DFA9",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: "#FFF",
  },
  /* dotActive: {
    backgroundColor: "#000",
  },*/
});
