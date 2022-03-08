import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  Platform,
  View,
  StatusBar,
  DrawerLayoutAndroid,
} from 'react-native';

import reducer from '_reducer';
import {setNavigator, setActiveRoute} from '_reduxs/action';
import DrawerContent from '_components/DrawerContent';
import Toolbar from '_components/Toolbar';
import AppNavigation from '_routes/AppNavigation';
import {bgStatusBar, bgDrawer} from '_styles/global.styles';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

let store = createStore(reducer);
const getDrawerWidth = () =>
  Dimensions.get('window').width - (Platform.OS === 'android' ? 56 : 64);

export default class App extends Component {
  constructor() {
    super();

    this.drawer = React.createRef();
    this.navigator = React.createRef();
  }

  componentDidMount() {
    store.dispatch(setNavigator(this.navigator.current));
  }

  openDrawer = () => {
    this.drawer.current.openDrawer();
  };

  closeDrawer = () => {
    this.drawer.current.closeDrawer();
  };

  getActiveRouteName = navigationState => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index]; // dive into nested navigators
    if (route.routes) {
      // eslint-disable-next-line no-undef
      return getActiveRouteName(route);
    }
    return route.routeName;
  };

  render() {
    return (
      <Provider store={store}>
        <DrawerLayoutAndroid
          drawerWidth={getDrawerWidth()}
          drawerPosition="left"
          renderNavigationView={() => (
            <DrawerContent closeDrawer={this.closeDrawer} />
          )}
          drawerBackgroundColor={bgDrawer}
          ref={this.drawer}>
          <View style={styles.container}>
            <StatusBar translucent backgroundColor={bgStatusBar} animated />
            <Toolbar showMenu={this.openDrawer} />
            <AppNavigation
              onNavigationStateChange={(prevState, currentState) => {
                const currentScreen = this.getActiveRouteName(currentState);
                store.dispatch(setActiveRoute(currentScreen));
              }}
              ref={this.navigator}
            />
          </View>
        </DrawerLayoutAndroid>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
