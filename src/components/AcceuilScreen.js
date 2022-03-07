import React from 'react';
import {Layout} from '@ui-kitten/components';
import {View, Image} from 'react-native';

import {styleApp} from '_styles';

class AcceuilScreen extends React.Component {
  toggleDrawer = () => {
    console.log(this.props.navigationProps);
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <>
        <Layout style={styleApp.container}>
          <View style={styleApp.top}>
            <Image
              source={require('./../assets/images/logo.png')}
              style={styleApp.stretch}
            />
          </View>
        </Layout>
      </>
    );
  }
}

export default AcceuilScreen;
