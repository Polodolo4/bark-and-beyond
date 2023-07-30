import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const AddToPN = () => {
  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.goBack();
  };

  const InputField = ({
    value,
    onChangeText,
    label,
    placeholder,
    secureTextEntry = false,
  }) => (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#000"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.greenBackground}>
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={handleCancel}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
          <View style={styles.addToContainer}>
            <TouchableOpacity
              onPress={() => console.log("Add to network pressed")}
            >
              <Text style={styles.addTo}>Add to your network</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.addPhotoContainer}>
        <Image
          style={styles.addPhoto}
          source={require("../assets/add-photo.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddToPN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greenBackground: {
    height: 98,
    backgroundColor: "#B8DFA9",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    marginLeft: 24,
  },
  cancel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#323841",
  },
  addToContainer: {
    flex: 0.76,
    justifyContent: "center",
    alignItems: "center",
  },
  addTo: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  addPhotoContainer: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  addPhoto: {},
});
