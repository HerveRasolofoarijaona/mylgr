import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginTop: 17,
    marginBottom: 'auto',
    marginLeft: 17,
    marginRight: 17,
    backgroundColor: '#253D61',
    borderColor: '#253D61',
  },
  stretch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  top: {flex: 4, flexDirection: 'row'},
  bottom: {flex: 1, flexDirection: 'column'},
});

export {styles};
