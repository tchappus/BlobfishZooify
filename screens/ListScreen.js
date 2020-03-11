import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import Window from '../constants/Window';

import ListButton from '../components/ListButton';

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.torontoBackground,
  },
  header: {
    flexDirection: 'row',
    height: 120,
    width: Window.width,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: Fonts.fun,
    fontSize: 36,
    letterSpacing: -1,
    lineHeight: 36,
    alignSelf: 'center',
  },
  headerCenter: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 55,
    width: 55,
    marginTop: 20,
    marginBottom: 5,
  },
};

export default function ListScreen(props) {
  const { navigation } = props;
  const { image, title, items } = navigation.state.params;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerCenter}>
            <Image source={image} style={styles.image} />
            <Text style={styles.headerText}>{title}</Text>
          </View>
        </View>
        <View style={{ paddingBottom: 40 }}>
          {Object.keys(items).map(key => {
            const imgUrl = `http://torontozoo.com${items[key]}`;
            return (
              <ListButton
                key={key}
                name={key}
                imgUrl={imgUrl}
                onPress={() => {
                  navigation.navigate('Animal', {
                    navigation,
                    image: imgUrl,
                    name: key,
                  });
                }}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
