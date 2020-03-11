import React from 'react';
import { View } from 'react-native';

import BfButton from '../BfButton';

import Window from '../../constants/Window';

const styles = {
  view: {
    marginTop: 10,
    width: Window.width / 2 - 40,
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
