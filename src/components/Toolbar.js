import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {goBack, navigateTo} from '_reduxs/action';
import {bgHeader} from '_styles/global.styles';
import ToolbarAndroid from '@react-native-community/toolbar-android';

class Toolbar extends React.Component {
  static propTypes = {
    activeRoute: PropTypes.shape({
      name: PropTypes.string.isRequired,
      screen: PropTypes.any.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
    showMenu: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    navigateTo: PropTypes.func.isRequired,
  };

  onActionSelected = position => {
    const {navigateTo} = this.props;

    if (position === 0) {
      navigateTo('About');
    } else if (position === 1) {
      navigateTo('Credits');
    }
  };

  render() {
    const {showMenu, goBack, activeRoute, routes} = this.props;
    return (
      <View style={styles.header}>
        <ToolbarAndroid
          navIcon={activeRoute.name === routes[0].name ? 'menu' : 'arrow-left'}
          titleColor="#fff"
          title={activeRoute.name}
          onIconClicked={
            activeRoute.name === routes[0].name ? showMenu : goBack
          }
          overflowIcon="dots-vertical"
          style={{height: 56}}
          // actions={[
          //   {title: 'About', show: 'never', iconName: 'information-outline'},
          //   {title: 'Credits', show: 'never', iconName: 'account-circle'},
          //   ,
          // ]}
          onActionSelected={this.onActionSelected}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: bgHeader,
    height: 80, // 56dp AppBar height plus 24dp correction for the StatusBar translucent
    paddingTop: 24, // StatusBar's height
    paddingLeft: 16,
  },
});

const mapStateToProps = (state, ownProps) => ({
  activeRoute: state.routes.activeRoute,
  routes: state.routes.routes,
  showMenu: ownProps.showMenu,
  goBack: ownProps.goBack,
});

const mapDispatchToProps = dispatch => ({
  goBack: () => {
    dispatch(goBack());
  },
  navigateTo: routeName => {
    dispatch(navigateTo(routeName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
