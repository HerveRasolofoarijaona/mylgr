import React from 'react';
import {Layout} from '@ui-kitten/components';
import {View, Image} from 'react-native';

import {app} from '_styles';

class AcceuilScreen extends React.Component {
  toggleDrawer = () => {
    console.log(this.props.navigationProps);
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <>
        <Layout style={app.styles.container}>
          <View style={app.styles.top}>
            <Image
              source={require('./../assets/images/logo.png')}
              style={app.styles.stretch}
            />
          </View>
        </Layout>
      </>
    );
  }
}

export default AcceuilScreen;
