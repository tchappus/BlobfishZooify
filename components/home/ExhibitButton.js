import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import PropTypes from 'prop-types';

import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

const styles = {
  viewHorizontalMargin: {
    marginLeft: 30,
  },
  view: {
    backgroundColor: 'white',
    height: 160,
    width: 140,
    borderColor: Colors.torontoGrey,
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    marginLeft: 30,
    alignItems: 'center',
  },
  textView: {
    height: 55,
    justifyContent: 'center',
  },
  text: {
    fontFamily: Fonts.fun,
    fontSize: 26,
    letterSpacing: -1,
    textAlign: 'center',
    lineHeight: 26,
  },
  image: {
    width: 85,
    height: 85,
    marginBottom: 8,
  },
};

export default function ExhibitButton(props) {
  const { name, src, last } = props;
  const viewStyle = last
    ? { ...styles.view, ...{ marginRight: 30 } }
    : styles.view;
  return (
    <TouchableOpacity style={viewStyle}>
      <Image source={src} style={styles.image} />
      <View style={styles.textView}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

ExhibitButton.defaultProps = {
  last: false,
};

ExhibitButton.propTypes = {
  name: PropTypes.string.isRequired,
  src: Image.propTypes.source.isRequired,
  last: PropTypes.bool,
};
