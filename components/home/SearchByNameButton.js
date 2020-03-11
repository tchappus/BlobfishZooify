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

export default function SearchByNameButton(props) {
  const { nav } = props;
  return (
    <View style={styles.view}>
      <BfButton
        icon="ios-search"
        label="Find by Name"
        onPress={() => nav.navigate('Search')}
      />
    </View>
  );
}
