import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import {
  SearchByNameButton,
  TakePhotoButton,
  DiscoveredSpeciesButton,
  ExhibitListView,
} from '../components/home';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.torontoBackground,
  },
  headerText: {
    fontFamily: Fonts.bold,
    fontSize: 36,
    letterSpacing: -1,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 90,
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
};

export default function HomeScreen(props) {
  const { screenProps, navigation } = props;
  const { animals, discovered } = screenProps;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={{ ...styles.homeScreenSection, ...styles.hPadding }}>
          <Text style={styles.headerText}>Search</Text>
          <Text style={styles.regularText}>for an animal</Text>
          <View style={styles.searchSection}>
            <SearchByNameButton nav={navigation} />
            <TakePhotoButton nav={navigation} />
          </View>
          <DiscoveredSpeciesButton nav={navigation} discovered={discovered} />
        </View>
        <View style={styles.homeScreenSection}>
          <Text style={{ ...styles.headerText, ...styles.hPadding }}>
            By Exhibit
          </Text>
          <ExhibitListView animals={animals} navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
