import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { SearchByNameButton, TakePhotoButton } from '../components/home';
import ListButton from '../components/ListButton';

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
        </View>
        <View style={styles.homeScreenSection}>
          <Text style={{ ...styles.headerText, ...styles.hPadding }}>
            By Exhibit
          </Text>
          <View>
            <ListButton
              name="Africa"
              src={require('../assets/images/anicons/anicons-African-Savanna.png')}
              onPress={() => {
                navigation.navigate('List', {
                  navigation,
                  image: require('../assets/images/anicons/anicons-African-Savanna.png'),
                  title: 'Africa',
                  items: screenProps.africa,
                });
              }}
            />
            <ListButton
              name="Americas"
              src={require('../assets/images/anicons/anicons-Americas.png')}
              onPress={() => {
                navigation.navigate('List', {
                  navigation,
                  image: require('../assets/images/anicons/anicons-Americas.png'),
                  title: 'Americas',
                  items: screenProps.americas,
                });
              }}
            />
            <ListButton
              name="Australasia"
              src={require('../assets/images/anicons/anicons-Australasia.png')}
              onPress={() => {
                navigation.navigate('List', {
                  navigation,
                  image: require('../assets/images/anicons/anicons-Australasia.png'),
                  title: 'Australasia',
                  items: screenProps.australasia,
                });
              }}
            />
            <ListButton
              name="Canada"
              src={require('../assets/images/anicons/anicons-Canadian-DOmain.png')}
              onPress={() => {
                navigation.navigate('List', {
                  navigation,
                  image: require('../assets/images/anicons/anicons-Canadian-DOmain.png'),
                  title: 'Canada',
                  items: screenProps.canada,
                });
              }}
            />
            <ListButton
              name="Discovery"
              src={require('../assets/images/anicons/anicons-Discovery-Zone.png')}
              onPress={() => {
                navigation.navigate('List', {
                  navigation,
                  image: require('../assets/images/anicons/anicons-Discovery-Zone.png'),
                  title: 'Discovery',
                  items: screenProps.discovery,
                });
              }}
            />
            <ListButton
              name="Eurasia"
              src={require('../assets/images/anicons/anicons-Eurasia-Wilds.png')}
              onPress={() => {
                navigation.navigate('List', {
                  navigation,
                  image: require('../assets/images/anicons/anicons-Eurasia-Wilds.png'),
                  title: 'Eurasia',
                  items: screenProps.eurasia,
                });
              }}
            />
            <ListButton
              name="Indo-Malaya"
              src={require('../assets/images/anicons/anicons-Indo-Malaya.png')}
              onPress={() => {
                navigation.navigate('List', {
                  navigation,
                  image: require('../assets/images/anicons/anicons-Indo-Malaya.png'),
                  title: 'Indo-Malaya',
                  items: screenProps.indomalaya,
                });
              }}
            />
            <ListButton
              name="Tundra"
              src={require('../assets/images/anicons/anicons-Tundra-Trek.png')}
              onPress={() => {
                navigation.navigate('List', {
                  navigation,
                  image: require('../assets/images/anicons/anicons-Tundra-Trek.png'),
                  title: 'Tundra',
                  items: screenProps.tundra,
                });
              }}
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
