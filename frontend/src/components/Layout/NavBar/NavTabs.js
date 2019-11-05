import * as React from 'react';
import { useState } from 'react';
import { Appbar, withTheme, Drawer } from 'react-native-paper';
import { StyleSheet, View, Image } from 'react-native';
import theme from '../../../theme.js';
import { connect } from 'react-redux';
import Layout from '../Layout';
import { userLogout } from '../../../store/actions/user.js';
import * as firebase from 'firebase';
import styles from '../../../styling/NavStyling';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NavTabs = props => {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Appbar
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
        theme={theme}
      >
        <Image source={require('../../../../assets/BrewPlansLogo.png')} />

        <View style={{ flexDirection: 'row' }}>
          <Appbar.Action
            icon={require('../../../../assets/coffee.png')}
            onPress={() => props.navigation.navigate('MyRecipes')}
            color='white'
          />

          <Appbar.Action
            onPress={() => {
              firebase.auth().signOut();
              props.userLogout();
              props.navigation.navigate('Landing');
            }}
            color='white'
            icon={require('../../../../assets/logout.png')}
          />
        </View>
        {/* <Appbar.Action
          icon='menu'
          onPress={() => {
            setOpen(!open);
            console.log(open);
          }}
        /> */}
      </Appbar>
      {/* {open ? <NavDrawer {...props} /> : null} */}
    </View>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {
    userLogout
  }
)(NavTabs);
