import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import BfButton from '../BfButton';

const styles = {
  view: {
    marginTop: 10,
  },
};

export default function TakePhotoButton(props) {
  const { nav } = props;
  return (
    <View style={styles.view}>
      <BfButton
        icon="ios-camera"
        label="Take Photo"
        onPress={() => nav.navigate('Camera')}
      />
    </View>
  );
}

TakePhotoButton.propTypes = {
  nav: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
