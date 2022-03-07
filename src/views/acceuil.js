import React from 'react';
import {Button, Layout, Icon} from '@ui-kitten/components';
import {View} from 'react-native';
import {app} from '_styles';
import {Image} from 'react-native';

const HeartIcon = props => <Icon {...props} name="heart" />;

const AcceuilView = () => {
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
};

export {AcceuilView, HeartIcon};
