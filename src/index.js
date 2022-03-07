import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import HomeNavigator from './routes';

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  </>
);

export default App;
