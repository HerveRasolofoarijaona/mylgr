import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './../components/HomeScreen';
import AcceuilScreen from './../components/AcceuilScreen';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Acceuil" component={AcceuilScreen} />
  </Navigator>
);

export default HomeNavigator;
