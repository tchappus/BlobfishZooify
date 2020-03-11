import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import Window from '../constants/Window';

const styles = {
  view: {
    backgroundColor: 'white',
    height: 70,
    width: Window.width - 60,
    borderColor: Colors.torontoGrey,
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.regular,
    fontSize: 20,
    letterSpacing: -1,
    width: '70%',
  },
  image: {
    height: 40,
    width: 40,
    marginHorizontal: 20,
    borderRadius: 20,
  },
};

export default function ListButton(props) {
  const { name, src, imgUrl, onPress } = props;

  const imgSrc = src || { uri: imgUrl };

  return (
    <TouchableOpacity style={styles.view} onPress={onPress}>
      <Image source={imgSrc} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}
