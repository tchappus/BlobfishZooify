import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
    marginTop: 10,
    flexDirection: 'row',
  },
  default: {
    fontFamily: Fonts.regular,
    fontSize: 24,
    letterSpacing: -1,
    color: Colors.black,
    flex: 1,
  },
  placeholder: {
    fontFamily: Fonts.regular,
    fontSize: 24,
    letterSpacing: -1,
    color: Colors.torontoGrey,
  },
};

export default function BfInput(props) {
  const { icon, placeholder, onChange } = props;
  const [value, onChangeText] = React.useState(placeholder);

  return (
    <View style={styles.view}>
      <Ionicons
        name={icon}
        size={26}
        style={{ marginBottom: -3, marginRight: 5 }}
        color={Colors.torontoGrey}
      />
      <TextInput
        style={value === placeholder ? styles.placeholder : styles.default}
        onChangeText={text => {
          onChangeText(text);
          onChange(text);
        }}
        onFocus={() => {
          if (value === placeholder) onChangeText('');
        }}
        onEndEditing={() => {
          if (value === '') onChangeText(placeholder);
        }}
        value={value}
      />
    </View>
  );
}
