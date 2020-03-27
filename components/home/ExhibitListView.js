import React from 'react';
import { View } from 'react-native';

import ListButton from '../ListButton';

export default function ExhibitListView(props) {
  const { navigation, animals } = props;

  return (
    <View>
      <ListButton
        name="Africa"
        src={require('../../assets/images/anicons/anicons-African-Savanna.png')}
        onPress={() => {
          navigation.navigate('List', {
            navigation,
            image: require('../../assets/images/anicons/anicons-African-Savanna.png'),
            title: 'Africa',
            items: animals.africa,
          });
        }}
      />
      <ListButton
        name="Americas"
        src={require('../../assets/images/anicons/anicons-Americas.png')}
        onPress={() => {
          navigation.navigate('List', {
            navigation,
            image: require('../../assets/images/anicons/anicons-Americas.png'),
            title: 'Americas',
            items: animals.americas,
          });
        }}
      />
      <ListButton
        name="Australasia"
        src={require('../../assets/images/anicons/anicons-Australasia.png')}
        onPress={() => {
          navigation.navigate('List', {
            navigation,
            image: require('../../assets/images/anicons/anicons-Australasia.png'),
            title: 'Australasia',
            items: animals.australasia,
          });
        }}
      />
      <ListButton
        name="Canada"
        src={require('../../assets/images/anicons/anicons-Canadian-DOmain.png')}
        onPress={() => {
          navigation.navigate('List', {
            navigation,
            image: require('../../assets/images/anicons/anicons-Canadian-DOmain.png'),
            title: 'Canada',
            items: animals.canada,
          });
        }}
      />
      <ListButton
        name="Discovery"
        src={require('../../assets/images/anicons/anicons-Discovery-Zone.png')}
        onPress={() => {
          navigation.navigate('List', {
            navigation,
            image: require('../../assets/images/anicons/anicons-Discovery-Zone.png'),
            title: 'Discovery',
            items: animals.discovery,
          });
        }}
      />
      <ListButton
        name="Eurasia"
        src={require('../../assets/images/anicons/anicons-Eurasia-Wilds.png')}
        onPress={() => {
          navigation.navigate('List', {
            navigation,
            image: require('../../assets/images/anicons/anicons-Eurasia-Wilds.png'),
            title: 'Eurasia',
            items: animals.eurasia,
          });
        }}
      />
      <ListButton
        name="Indo-Malaya"
        src={require('../../assets/images/anicons/anicons-Indo-Malaya.png')}
        onPress={() => {
          navigation.navigate('List', {
            navigation,
            image: require('../../assets/images/anicons/anicons-Indo-Malaya.png'),
            title: 'Indo-Malaya',
            items: animals['indo-malaya'],
          });
        }}
      />
      <ListButton
        name="Tundra"
        src={require('../../assets/images/anicons/anicons-Tundra-Trek.png')}
        onPress={() => {
          navigation.navigate('List', {
            navigation,
            image: require('../../assets/images/anicons/anicons-Tundra-Trek.png'),
            title: 'Tundra',
            items: animals.tundra,
          });
        }}
      />
    </View>
  );
}
