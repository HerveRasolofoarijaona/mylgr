import React from 'react';
import {Button, Layout} from '@ui-kitten/components';
import {View, Alert} from 'react-native';
import {app} from '_styles';
import {Image} from 'react-native';

const navigateAccueil = () => {
  //navigation.navigate('Acceuil');
  // const navigation = {...props.navigation};
  // console.log(navigation);
  Alert.alert('je suis là');
};
const AppViews = () => {
  //console.log("j'ai recuperer la navigation plus haut");
  //console.log(navigation);
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
            //onPress={navigateAccueil}
            style={app.styles.likeButton}
            size="giant">
            Se Connecter
          </Button>
        </View>
      </Layout>
    </>
  );
};

export default AppViews;
