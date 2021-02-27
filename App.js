import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";

import Home from "./Home.js";
import { styles } from "./styles.js";

export default class App extends React.Component {
  // const [selectedImage, setSelectedImage] = React.useState(null);
  state = {
    selectedImage: {
      localUri: null,
    },
  };

  openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log("pickerResult = ", pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }

    this.setState({ selectedImage: { localUri: pickerResult.uri } });
  };

  openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(this.state.selectedImage.localUri);
  };

  // Set the URI to null to get back to the home screen.
  goHome = () => {
    this.setState({ selectedImage: { localUri: null } });
  };

  render() {
    // If no image selected, then show the home screen.
    if (this.state.selectedImage.localUri === null) {
      return <Home openImagePickerAsync={this.openImagePickerAsync} />;
    }

    return (
      <View style={styles.container}>
        <Image
          source={{ uri: this.state.selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity
          onPress={this.openShareDialogAsync}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goHome} style={styles.button}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
