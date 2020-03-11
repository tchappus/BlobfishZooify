import React from 'react';
import { View } from 'react-native';

import BfButton from '../BfButton';

import Window from '../../constants/Window';

const styles = {
  view: {
    marginTop: 10,
    width: Window.width - 60,
    height: 90,
  },
};

export default function ViewDiscoveredSpeciesButton(props) {
  const { nav, discovered } = props;

  return (
    <View style={styles.view}>
      <BfButton
        icon="ios-compass"
        label="Discovered Species"
        onPress={() =>
          nav.navigate('List', {
            navigation: nav,
            icon: 'ios-compass',
            title: 'Discovered',
            items: discovered,
          })
        }
      />
    </View>
  );
}
