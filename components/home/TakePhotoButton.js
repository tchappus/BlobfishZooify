import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

const styles = {
  view: {
    backgroundColor: 'white',
    height: 40,
    borderColor: Colors.torontoGrey,
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontFamily: Fonts.regular,
    fontSize: 24,
    letterSpacing: -1,
    color: Colors.torontoGrey,
  },
};

export default function TakePhotoButton() {
  return (
    <TouchableOpacity style={styles.view}>
      <Ionicons
        name="ios-camera"
        size={26}
        style={{ marginBottom: -3, marginRight: 5 }}
        color={Colors.torontoGrey}
      />
      <Text style={styles.text}>Take Photo</Text>
    </TouchableOpacity>
  );
}
