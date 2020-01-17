import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';

const styles = {
  view: {
    backgroundColor: 'white',
    height: 40,
    borderColor: Colors.torontoGrey,
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontFamily: Fonts.regular,
    fontSize: 24,
    letterSpacing: -1,
    color: Colors.torontoGrey,
  },
};

export default function BfButton(props) {
  const { icon, label, onPress, style } = props;
  const viewStyle = { ...styles.view, ...style };

  return (
    <TouchableOpacity style={viewStyle} onPress={onPress}>
      <Ionicons
        name={icon}
        size={26}
        style={{ marginBottom: -3, marginRight: 5 }}
        color={Colors.torontoGrey}
      />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

BfButton.defaultProps = {
  style: null,
};

BfButton.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};
