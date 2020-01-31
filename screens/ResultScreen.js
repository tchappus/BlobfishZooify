import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';
import BfButton from '../components/BfButton';
import BFCard from '../components/BFCard';
import Fonts from '../constants/Fonts';

const styles = {
  image: {
    width: '60%',
    height: '60%',
    borderRadius: 40,
    marginBottom: 20,
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: Fonts.bold,
    fontSize: 36,
    letterSpacing: -1,
  },
  regularText: {
    fontFamily: Fonts.regular,
    fontSize: 36,
    letterSpacing: -1,
    marginBottom: 12,
  },
};

export default function ResultScreen(props) {
  const { navigation } = props;
  const uri = navigation.getParam('uri');
  const result = navigation.getParam('result');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
        <Text style={styles.regularText}>Identified Specimen:</Text>
        <Text style={styles.headerText}>{result}</Text>
        <BFCard style={styles.card} />
        <BfButton
          style={styles.button}
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
