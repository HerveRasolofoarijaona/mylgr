import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ScrollView, Text, View, Image, Dimensions} from 'react-native';
import {navigateTo} from '../Redux/actions';
import stylesheet_sidebard from '../assets/styles/sidebar';
import {
  imageUrl_ICON_4,
  imageUrl_spaceship_13,
  imageUrl_ICON_10,
  imageUrl_share,
  imageUrl_spaceship_10,
  imageUrl_badge,
  imageUrl_spaceship,
  imageUrl_spaceship_7,
  imageUrl_circle,
  imageUrl_spaceship_16,
  imageUrl_ICON_7,
  imageUrl_spaceship_4,
  imageUrl_ICON,
} from '../assets/svg';

const stylesheet = stylesheet_sidebard;

const DrawerContent = ({navigateTo, activeRoute, routes, closeDrawer}) => (
  <ScrollView
    bounces={false}
    showsVerticalScrollIndicator={false}
    style={{height: Dimensions.get('window').height}}>
    <View style={stylesheet._Sidebar}>
      <View style={stylesheet._Primary}>
        <View style={stylesheet._LOGOUT}>
          <View style={stylesheet._DEFAULT}>
            <View
              style={[
                stylesheet._LOGOUT_2,
                {display: 'flex', flexDirection: 'row', alignItems: 'center'},
              ]}>
              <Text
                style={[
                  stylesheet._LOGOUT_2,
                  {
                    position: 'relative',
                    flexGrow: 1,
                    left: 0,
                    top: 0,
                    height: '100%',
                    transform: [{translateX: 0}, {translateY: 0}],
                  },
                ]}>
                LOGOUT
              </Text>
            </View>
            <View style={stylesheet._Object}>
              <Image style={stylesheet._share} source={{uri: imageUrl_share}} />
              <View style={stylesheet._share_2} />
              <View style={stylesheet._share_3} />
            </View>
          </View>
        </View>
        <View style={stylesheet._GETTING_STARTED}>
          <View style={stylesheet._DEFAULT_2}>
            <View
              style={[
                stylesheet._GETTING_STARTED_2,
                {display: 'flex', flexDirection: 'row', alignItems: 'center'},
              ]}>
              <Text
                style={[
                  stylesheet._GETTING_STARTED_2,
                  {
                    position: 'relative',
                    flexGrow: 1,
                    left: 0,
                    top: 0,
                    height: '100%',
                    transform: [{translateX: 0}, {translateY: 0}],
                  },
                ]}>
                Nos Pasteurs
              </Text>
            </View>
            <View style={stylesheet._Object_2}>
              <Image
                style={stylesheet._spaceship}
                source={{uri: imageUrl_spaceship}}
              />
              <View style={stylesheet._spaceship_2} />
              <View style={stylesheet._spaceship_3} />
            </View>
          </View>
          <View style={stylesheet._DEFAULT_3}>
            <View
              style={[
                stylesheet._GETTING_STARTED_3,
                {display: 'flex', flexDirection: 'row', alignItems: 'center'},
              ]}>
              <Text
                style={[
                  stylesheet._GETTING_STARTED_3,
                  {
                    position: 'relative',
                    flexGrow: 1,
                    left: 0,
                    top: 0,
                    height: '100%',
                    transform: [{translateX: 0}, {translateY: 0}],
                  },
                ]}>
                Nos Invitées
              </Text>
            </View>
            <View style={stylesheet._Object_3}>
              <Image
                style={stylesheet._spaceship_4}
                source={{uri: imageUrl_spaceship_4}}
              />
              <View style={stylesheet._spaceship_5} />
              <View style={stylesheet._spaceship_6} />
            </View>
            <View style={stylesheet._DEFAULT_4}>
              <View
                style={[
                  stylesheet._GETTING_STARTED_4,
                  {display: 'flex', flexDirection: 'row', alignItems: 'center'},
                ]}>
                <Text
                  style={[
                    stylesheet._GETTING_STARTED_4,
                    {
                      position: 'relative',
                      flexGrow: 1,
                      left: 0,
                      top: 0,
                      height: '100%',
                      transform: [{translateX: 0}, {translateY: 0}],
                    },
                  ]}>
                  Nos Conférences
                </Text>
              </View>
              <View style={stylesheet._Object_4}>
                <Image
                  style={stylesheet._spaceship_7}
                  source={{uri: imageUrl_spaceship_7}}
                />
                <View style={stylesheet._spaceship_8} />
                <View style={stylesheet._spaceship_9} />
              </View>
            </View>
            <View style={stylesheet._DEFAULT_5}>
              <View
                style={[
                  stylesheet._GETTING_STARTED_5,
                  {display: 'flex', flexDirection: 'row', alignItems: 'center'},
                ]}>
                <Text
                  style={[
                    stylesheet._GETTING_STARTED_5,
                    {
                      position: 'relative',
                      flexGrow: 1,
                      left: 0,
                      top: 0,
                      height: '100%',
                      transform: [{translateX: 0}, {translateY: 0}],
                    },
                  ]}>
                  Nos Séminaires
                </Text>
              </View>
              <View style={stylesheet._Object_5}>
                <Image
                  style={stylesheet._spaceship_10}
                  source={{uri: imageUrl_spaceship_10}}
                />
                <View style={stylesheet._spaceship_11} />
                <View style={stylesheet._spaceship_12} />
              </View>
              <View style={stylesheet._DEFAULT_6}>
                <View
                  style={[
                    stylesheet._GETTING_STARTED_6,
                    {
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    },
                  ]}>
                  <Text
                    style={[
                      stylesheet._GETTING_STARTED_6,
                      {
                        position: 'relative',
                        flexGrow: 1,
                        left: 0,
                        top: 0,
                        height: '100%',
                        transform: [{translateX: 0}, {translateY: 0}],
                      },
                    ]}>
                    Nos Incontournable
                  </Text>
                </View>
                <View style={stylesheet._Object_6}>
                  <Image
                    style={stylesheet._spaceship_13}
                    source={{uri: imageUrl_spaceship_13}}
                  />
                  <View style={stylesheet._spaceship_14} />
                  <View style={stylesheet._spaceship_15} />
                </View>
              </View>
              <View style={stylesheet._DEFAULT_7}>
                <View
                  style={[
                    stylesheet._GETTING_STARTED_7,
                    {
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    },
                  ]}>
                  <Text
                    style={[
                      stylesheet._GETTING_STARTED_7,
                      {
                        position: 'relative',
                        flexGrow: 1,
                        left: 0,
                        top: 0,
                        height: '100%',
                        transform: [{translateX: 0}, {translateY: 0}],
                      },
                    ]}>
                    Exhortation de BTA
                  </Text>
                </View>
                <View style={stylesheet._Object_7}>
                  <Image
                    style={stylesheet._spaceship_16}
                    source={{uri: imageUrl_spaceship_16}}
                  />
                  <View style={stylesheet._spaceship_17} />
                  <View style={stylesheet._spaceship_18} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={stylesheet._Rectangle} />
        <View style={stylesheet._ACCOUNT}>
          <View style={stylesheet._DEFAULT_8}>
            <View
              style={[
                stylesheet._ACCOUNT_2,
                {display: 'flex', flexDirection: 'row', alignItems: 'center'},
              ]}>
              <Text
                style={[
                  stylesheet._ACCOUNT_2,
                  {
                    position: 'relative',
                    flexGrow: 1,
                    left: 0,
                    top: 0,
                    height: '100%',
                    transform: [{translateX: 0}, {translateY: 0}],
                  },
                ]}>
                CHAT
              </Text>
            </View>
            <View style={stylesheet._Object_8}>
              <Image style={stylesheet._badge} source={{uri: imageUrl_badge}} />
              <View style={stylesheet._badge_2} />
              <View style={stylesheet._badge_3} />
            </View>
          </View>
        </View>
        <View style={stylesheet._PROFILE}>
          <View style={stylesheet._DEFAULT_9}>
            <View
              style={[
                stylesheet._PROFILE_2,
                {display: 'flex', flexDirection: 'row', alignItems: 'center'},
              ]}>
              <Text
                style={[
                  stylesheet._PROFILE_2,
                  {
                    position: 'relative',
                    flexGrow: 1,
                    left: 0,
                    top: 0,
                    height: '100%',
                    transform: [{translateX: 0}, {translateY: 0}],
                  },
                ]}>
                PROFILE
              </Text>
            </View>
            <View style={stylesheet._Object_9}>
              <Image
                style={stylesheet._circle}
                source={{uri: imageUrl_circle}}
              />
              <View style={stylesheet._circle_2} />
              <View style={stylesheet._circle_3} />
            </View>
          </View>
        </View>
        <View style={stylesheet._ARTICLES}>
          <View style={stylesheet._DEFAULT_10}>
            <View
              style={[
                stylesheet._ARTICLES_2,
                {display: 'flex', flexDirection: 'row', alignItems: 'center'},
              ]}>
              <Text
                style={[
                  stylesheet._ARTICLES_2,
                  {
                    position: 'relative',
                    flexGrow: 1,
                    left: 0,
                    top: 0,
                    height: '100%',
                    transform: [{translateX: 0}, {translateY: 0}],
                  },
                ]}>
                ARTICLES LU
              </Text>
            </View>
            <View style={stylesheet._Object_10}>
              <Image style={stylesheet._ICON} source={{uri: imageUrl_ICON}} />
              <View style={stylesheet._ICON_2} />
              <View style={stylesheet._ICON_3} />
            </View>
          </View>
        </View>
        <View style={stylesheet._COMPONENTS}>
          <View style={stylesheet._DEFAULT_11}>
            <View style={stylesheet._Object_11}>
              <Image
                style={stylesheet._ICON_4}
                source={{uri: imageUrl_ICON_4}}
              />
              <View style={stylesheet._ICON_5} />
              <View style={stylesheet._ICON_6} />
            </View>
            <View
              style={[
                stylesheet._COMPONENTS_2,
                {display: 'flex', flexDirection: 'row', alignItems: 'center'},
              ]}>
              <Text
                style={[
                  stylesheet._COMPONENTS_2,
                  {
                    position: 'relative',
                    flexGrow: 1,
                    left: 0,
                    top: 0,
                    height: '100%',
                    transform: [{translateX: 0}, {translateY: 0}],
                  },
                ]}>
                ACTUALITE
              </Text>
            </View>
          </View>
        </View>
        <View style={stylesheet._EXAMPLES}>
          <View style={stylesheet._DEFAULT_12}>
            <View style={stylesheet._Object_12}>
              <Image
                style={stylesheet._ICON_7}
                source={{uri: imageUrl_ICON_7}}
              />
              <View style={stylesheet._ICON_8} />
              <View style={stylesheet._ICON_9} />
            </View>
            <View
              style={[
                stylesheet._EXAMPLES_2,
                {display: 'flex', flexDirection: 'row', alignItems: 'center'},
              ]}>
              <Text
                style={[
                  stylesheet._EXAMPLES_2,
                  {
                    position: 'relative',
                    flexGrow: 1,
                    left: 0,
                    top: 0,
                    height: '100%',
                    transform: [{translateX: 0}, {translateY: 0}],
                  },
                ]}>
                GEOLOCALISER UNE EGLISE
              </Text>
            </View>
          </View>
        </View>
        <View style={stylesheet._HOME}>
          <View style={stylesheet._ACTIVE}>
            <View style={stylesheet._Rectangle_2} />
            <View style={stylesheet._Object_13}>
              <Image
                style={stylesheet._ICON_10}
                source={{uri: imageUrl_ICON_10}}
              />
              <View style={stylesheet._ICON_11} />
              <View style={stylesheet._ICON_12} />
            </View>
            <View
              style={[
                stylesheet._HOME_2,
                {display: 'flex', flexDirection: 'row', alignItems: 'center'},
              ]}>
              <Text
                style={[
                  stylesheet._HOME_2,
                  {
                    position: 'relative',
                    flexGrow: 1,
                    left: 0,
                    top: 0,
                    height: '100%',
                    transform: [{translateX: 0}, {translateY: 0}],
                  },
                ]}>
                MyLGR
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          stylesheet._DOCUMENTATION,
          {display: 'flex', flexDirection: 'row', alignItems: 'center'},
        ]}>
        <Text
          style={[
            stylesheet._DOCUMENTATION,
            {
              position: 'relative',
              flexGrow: 1,
              left: 0,
              top: 0,
              height: '100%',
              transform: [{translateX: 0}, {translateY: 0}],
            },
          ]}>
          ENSEIGNEMENT
        </Text>
      </View>
      <View style={stylesheet._Menu_Copy}>
        <View style={stylesheet._Rectangle_1} />
        <View style={stylesheet._Rectangle_2} />
        <View style={stylesheet._Rectangle_3} />
      </View>
    </View>
  </ScrollView>
);

DrawerContent.propTypes = {
  activeRoute: PropTypes.shape({
    name: PropTypes.string.isRequired,
    screen: PropTypes.any.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigateTo: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  routes: state.routes.routes,
  activeRoute: state.routes.activeRoute,
  closeDrawer: ownProps.closeDrawer,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: routeName => {
    dispatch(navigateTo(routeName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
