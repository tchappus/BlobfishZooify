import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';
import BfButton from '../components/BfButton';

const styles = {
  button: {
    marginBottom: 20,
  },
};

export default function ResultScreen(props) {
  const { navigation } = props;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BfButton
          style={styles.button}
          icon=""
          label="Back"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
}

ResultScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
