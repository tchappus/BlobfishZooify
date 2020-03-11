import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';

const styles = {
  view: {
    height: '100%',
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colors: {
    backgroundColor: 'white',
    borderColor: Colors.torontoGrey,
  },
  disabledColors: {
    backgroundColor: Colors.torontoGrey,
    borderColor: Colors.torontoGrey,
  },
  text: {
    fontFamily: Fonts.regular,
    fontSize: 24,
    letterSpacing: -1,
    width: '70%',
  },
  textColor: {
    color: Colors.torontoGrey,
  },
  disabledTextColor: {
    color: 'white',
  },
};

export default function BfButton(props) {
  const { icon, label, onPress, style, disabled } = props;

  let viewStyle = { ...styles.view, ...style };
  viewStyle = disabled
    ? { ...styles.disabledColors, ...viewStyle }
    : { ...styles.colors, ...viewStyle };

  const textStyle = disabled
    ? { ...styles.disabledTextColor, ...styles.text }
    : { ...styles.textColor, ...styles.text };

  const iconColor = disabled ? 'white' : Colors.torontoGrey;

  return (
    <TouchableOpacity style={viewStyle} onPress={onPress} disabled={disabled}>
      <Ionicons
        name={icon}
        size={32}
        style={{ paddingHorizontal: 20 }}
        color={iconColor}
      />
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
}
