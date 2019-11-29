import React from 'react';
import { ScrollView } from 'react-native';

import ExhibitButton from './ExhibitButton';

export default function ExhibitScrollView() {
  return (
    <ScrollView horizontal>
      <ExhibitButton
        name="African Savanna"
        src={require('../../assets/images/anicons/anicons-African-Savanna.png')}
      />
      <ExhibitButton
        name="Americas"
        src={require('../../assets/images/anicons/anicons-Americas.png')}
      />
      <ExhibitButton
        name="Australasia"
        src={require('../../assets/images/anicons/anicons-Australasia.png')}
      />
      <ExhibitButton
        name="Canadian Domain"
        src={require('../../assets/images/anicons/anicons-Canadian-DOmain.png')}
      />
      <ExhibitButton
        name="Discovery Zone"
        src={require('../../assets/images/anicons/anicons-Discovery-Zone.png')}
      />
      <ExhibitButton
        name="Eurasia Wilds"
        src={require('../../assets/images/anicons/anicons-Eurasia-Wilds.png')}
      />
      <ExhibitButton
        name="Indo-Malaya"
        src={require('../../assets/images/anicons/anicons-Indo-Malaya.png')}
      />
      <ExhibitButton
        name="Plants"
        src={require('../../assets/images/anicons/anicons-Plants.png')}
      />
      <ExhibitButton
        name="Tundra Trek"
        src={require('../../assets/images/anicons/anicons-Tundra-Trek.png')}
        last
      />
    </ScrollView>
  );
}
