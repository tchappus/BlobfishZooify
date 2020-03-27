import React, { useState } from 'react';
import { View } from 'react-native';

import BfButton from '../BfButton';

export default function DiscoveredButton(props) {
  const { styles, addToDiscovered, name, image } = props;
  const [discovered, setDiscovered] = useState(false);

  if (discovered) {
    return (
      <View style={styles}>
        <BfButton
          disabled
          icon="ios-compass"
          label="Discovered"
          style={styles}
          onPress={() => {}}
        />
      </View>
    );
  }
  return (
    <View style={styles}>
      <BfButton
        icon="ios-compass"
        label="Mark as Discovered"
        style={styles}
        onPress={() => {
          setDiscovered(true);
          addToDiscovered(name, image);
        }}
      />
    </View>
  );
}
