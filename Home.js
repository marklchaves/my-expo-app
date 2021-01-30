import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './styles.js';

const Home = (props) => (
  <View style={styles.container}>
    <Text style={styles.heading}>
      Welcome to
    </Text>
    <StatusBar style="auto" />

    <Image
      source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
      style={styles.logo}
    />
    <Text style={styles.instructions}>
      To share a photo from your phone with a friend, just press the button
      below!
    </Text>

    <TouchableOpacity
      onPress={props.openImagePickerAsync}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Pick a photo</Text>
    </TouchableOpacity>
  </View>
);

export default Home;
