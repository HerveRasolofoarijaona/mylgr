/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {navigateTo} from '_redux/action';
const backgroundImage = require('../assets/images/background.jpg');

const Login = ({activeRoute, navigateTo}) => (
  <ImageBackground
    source={backgroundImage}
    style={styles.container}
    imageStyle={{opacity: 0.3}}>
    <ScrollView contentContainerStyle={styles.view}>
      <Text style={styles.header1}>{activeRoute.name}</Text>
      <Text style={styles.text}>
        Pour voir nos actualité priere de cliquer sur le bouton.
      </Text>
      <Button
        title="voir nos Actualité"
        style={styles.button}
        onPress={() => {
          navigateTo('Booking');
        }}
      />
    </ScrollView>
  </ImageBackground>
);

Login.propTypes = {
  activeRoute: PropTypes.shape({
    name: PropTypes.string.isRequired,
    screen: PropTypes.any.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  navigateTo: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#ECEFF1',
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
    padding: 20,
  },
  header1: {
    fontSize: 28,
    marginBottom: '30%',
  },
  text: {
    fontSize: 20,
    width: '70%',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: '10%',
  },
});

const mapStateToProps = state => ({
  activeRoute: state.routes.activeRoute,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: routeName => {
    dispatch(navigateTo(routeName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
