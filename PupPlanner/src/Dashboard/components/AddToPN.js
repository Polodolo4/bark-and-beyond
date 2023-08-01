import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import * as ImagePicker from "expo-image-picker";

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

const AddToPN = () => {
  const [name, setName] = useState("");
  const [nickname, setNickame] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleNicknameChange = (value) => {
    setNickname(value);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    try {
      if (!image) return null;

      const response = await fetch(image);

      const blob = await response.blob();

      const timestamp = Date.now();
      const filename = `Image${timestamp};`;
      const ref = firebase.storage().ref().child(`dogPictures/${filename}`);

      const snapshot = await ref.put(blob);

      const downloadUrl = await snapshot.ref.getDownloadURL();

      return downloadUrl;
    } catch (error) {
      console.log("Error in uploadImage function: ", error);
      throw error;
    }
  };

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

        <TouchableOpacity
          style={styles.addPhotoContainer}
          onPress={pickImage}
        >
          <Image
            style={styles.addPhoto}
            source={require("../assets/add-photo.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputFieldsContainer}>
        <InputField
          value={name}
          onChangeText={handleNameChange}
          label="Friend's name"
          placeholder="Enter name"
        />
        <InputField
          value={nickname}
          onChangeText={handleNicknameChange}
          label="Nicname (Optional)"
        />
        <InputField
          value={phone}
          onChangeText={handlePhoneChange}
          label="Pup's name"
          placeholder="Enter pup's name"
        />
        <InputField
          value={email}
          onChangeText={handleEmailChange}
          label="Pup's name"
          placeholder="Enter pup's name"
        />
      </View>
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
    marginBottom: 24,
  },
  addPhoto: {},
  inputFieldsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },
  inputContainer: {
    width: "90%",
    marginTop: 16,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 16,
    fontWeight: "bold",
  },
  input: {
    height: 48,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
