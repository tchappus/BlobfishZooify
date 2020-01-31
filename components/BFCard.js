import React from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import Layout from '../constants/Layout';

const styles = {
  view: {
    flex: 1,
    backgroundColor: Colors.torontoBackground,
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  headerText: {
    fontFamily: Fonts.bold,
    fontSize: 36,
    letterSpacing: -1,
  },
  regularText: {
    fontFamily: Fonts.regular,
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
    <View style={styles.view}>
      <Image source={src} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.headerText}>Search</Text>
      <Text style={styles.text}>
        git commit -m Added to views, this avoids drawing over UI on phones with
        notches result-screen 31cfe59 Added to views, this avoids drawing over
        UI on phones with notches{' '}
      </Text>
    </View>
  );
}

TypeButton.propTypes = {
  name: PropTypes.string.isRequired,
  src: Image.propTypes.source.isRequired,
};
