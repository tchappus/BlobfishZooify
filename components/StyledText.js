import React from 'react';
import { Text } from 'react-native';

export default function MonoText(props) {
  // eslint-disable-next-line react/prop-types
  const { style } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Text {...props} style={[style, { fontFamily: 'PatrickHandSC-Regular' }]} />
  );
}
