import React from 'react';
import {Button, Layout} from '@ui-kitten/components';
import {View} from 'react-native';
import {app} from '_styles';
import {Image} from 'react-native';

const HomeScreen = ({navigation}) => {
  //console.log(navigation);
  function navigateAccueil() {
    console.log(navigation);
    //Alert.alert('je suis là');
    return navigation.navigate('Acceuil');
  }
  return (
    <>
      <Layout style={app.styles.container}>
        <View style={app.styles.top}>
          <Image
            source={require('./../assets/images/logo-blue.png')}
            style={app.styles.stretch}
          />
        </View>
        <View style={app.styles.bottom}>
          <Button
            onPress={navigateAccueil}
            style={app.styles.likeButton}
            size="giant">
            Se Connecter
          </Button>
        </View>
      </Layout>
    </>
  );
};

export default HomeScreen;
