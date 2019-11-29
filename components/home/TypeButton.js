import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Layout from '../../constants/Layout';

const styles = {
  view: {
    backgroundColor: 'white',
    height: 70,
    width: Layout.window.width / 2 - 45,
    borderColor: Colors.torontoGrey,
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    marginRight: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.fun,
    fontSize: 36,
    letterSpacing: -1,
  },
  image: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
};

export default function TypeButton(props) {
  const { name, src } = props;

  return (
    <TouchableOpacity style={styles.view}>
      <Image source={src} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

TypeButton.propTypes = {
  name: PropTypes.string.isRequired,
  src: Image.propTypes.source.isRequired,
};
