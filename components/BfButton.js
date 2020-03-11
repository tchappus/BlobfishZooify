import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';

const styles = {
  view: {
    backgroundColor: 'white',
    height: '100%',
    borderColor: Colors.torontoGrey,
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledView: {
    backgroundColor: Colors.torontoGrey,
    height: 40,
    borderColor: Colors.torontoGrey,
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  disabledText: {
    fontFamily: Fonts.regular,
    fontSize: 24,
    letterSpacing: -1,
    color: 'white',
  },
  text: {
    fontFamily: Fonts.regular,
    fontSize: 24,
    letterSpacing: -1,
    color: Colors.torontoGrey,
    width: '70%',
  },
};

export default function BfButton(props) {
  const { icon, label, onPress, style, disabled } = props;
  const viewStyle = disabled
    ? { ...styles.disabledView, ...style }
    : { ...styles.view, ...style };
  const textStyle = disabled ? styles.disabledText : styles.text;
  const iconColor = disabled ? 'white' : Colors.torontoGrey;

  return (
    <TouchableOpacity style={viewStyle} onPress={onPress} disabled={disabled}>
      <Ionicons
        name={icon}
        size={32}
        style={{ marginBottom: 10, padding: 20 }}
        color={iconColor}
      />
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
}

BfButton.defaultProps = {
  style: null,
  disabled: false,
};

BfButton.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};
