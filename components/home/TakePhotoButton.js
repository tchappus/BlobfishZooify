/* eslint-disable react/require-default-props */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

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

export default function TakePhotoButton(props) {
  const { navigation } = props;
  return (
    <TouchableOpacity
      style={styles.view}
      onPress={() => navigation.navigate('Camera')}
    >
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

TakePhotoButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object,
};
