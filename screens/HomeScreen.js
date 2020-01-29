import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

import {
  SearchBar,
  TakePhotoButton,
  ExhibitScrollView,
  TypeButton,
} from '../components/home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.torontoBackground,
    paddingTop: 10,
    paddingHorizontal: 5,
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
  },
  contentContainer: {
    paddingVertical: 50,
  },
  homeScreenSection: {
    paddingBottom: 30,
  },
  hPadding: {
    paddingHorizontal: 30,
  },
});

export default function HomeScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={{ ...styles.homeScreenSection, ...styles.hPadding }}>
          <Text style={styles.headerText}>Search</Text>
          <Text style={styles.regularText}>for an animal</Text>
          <SearchBar />
          <TakePhotoButton nav={navigation} />
        </View>
        <View style={styles.homeScreenSection}>
          <Text style={{ ...styles.headerText, ...styles.hPadding }}>
            By Exhibit
          </Text>
          <ExhibitScrollView />
        </View>
        <View style={{ ...styles.homeScreenSection, ...styles.hPadding }}>
          <Text style={styles.headerText}>By Type</Text>
          <View style={{ flexDirection: 'row' }}>
            <TypeButton
              name="Reptile"
              src={require('../assets/images/anicons/anicons-Australasia.png')}
            />
            <TypeButton
              name="Bird"
              src={require('../assets/images/anicons/anicons-Discovery-Zone.png')}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TypeButton
              name="Fish"
              src={require('../assets/images/anicons/Wased-ashore-solid.png')}
            />
            <TypeButton
              name="Mammal"
              src={require('../assets/images/anicons/anicons-Indo-Malaya.png')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
