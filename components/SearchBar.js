import React from 'react';
import { View } from 'react-native';

import BfInput from './BfInput';

export default function SearchBar(props) {
  const { onChange } = props;

  return (
    <View style={{ marginHorizontal: 30 }}>
      <BfInput
        icon="ios-search"
        placeholder="Find by name"
        onChange={e => onChange(e)}
      />
    </View>
  );
}
