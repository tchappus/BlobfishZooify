/* eslint-disable react/prop-types */
import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import Layout from '../constants/Layout';

const styles = {
  view: {
    backgroundColor: 'white',
    height: 70,
    width: Layout.window.width - 60,
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

  return (
    <TouchableOpacity style={styles.view} onPress={onPress}>
      {src && <Image source={src} style={styles.image} />}
      {imgUrl && <Image source={{ uri: imgUrl }} style={styles.image} />}
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

ListButton.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
