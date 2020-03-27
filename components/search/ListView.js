import React from 'react';
import { View } from 'react-native';

import ListButton from '../ListButton';

export default function ListView(props) {
  const { results, navigation } = props;

  return (
    <View style={{ paddingBottom: 40 }}>
      {results.map(result => {
        const imgUrl = `http://torontozoo.com${result.image}`;
        return (
          <ListButton
            key={result.name}
            name={result.name}
            imgUrl={imgUrl}
            onPress={() => {
              navigation.navigate('Animal', {
                navigation,
                image: imgUrl,
                name: result.name,
              });
            }}
          />
        );
      })}
    </View>
  );
}
