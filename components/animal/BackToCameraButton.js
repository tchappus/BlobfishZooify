import React from 'react';
import { View } from 'react-native';

import BfButton from '../BfButton';

export default function BackToCameraButton(props) {
  const { styles, navigation } = props;

  return (
    <View style={styles}>
      <BfButton
        icon="ios-camera"
        label="Back to Camera"
        style={styles}
        onPress={() => {
          navigation.navigate('Camera');
        }}
      />
    </View>
  );
}
