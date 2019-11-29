import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

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
  textInput: {
    fontFamily: Fonts.regular,
    fontSize: 24,
    letterSpacing: -1,
    color: Colors.torontoGrey,
  },
};

export default function SearchBar() {
  const [value, onChangeText] = React.useState('Find by name');
  return (
    <View style={styles.view}>
      <Ionicons
        name="ios-search"
        size={26}
        style={{ marginBottom: -3, marginRight: 5 }}
        color={Colors.torontoGrey}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}
