import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import BfButton from '../BfButton';

import Layout from '../../constants/Layout';

const styles = {
  view: {
    marginTop: 10,
    width: Layout.window.width / 2 - 40,
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

SearchByNameButton.propTypes = {
  nav: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
