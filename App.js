import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 

import Home from './Home.js';
import { styles } from './styles.js';

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log('pickerResult = ', pickerResult);

    if (pickerResult.cancelled === true) {
      return; 
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  }; 

  // TO DO: Build cancel option here. Look at CS50M
  //        toggling state.
  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <Home openImagePickerAsync={openImagePickerAsync} />
  );
}
