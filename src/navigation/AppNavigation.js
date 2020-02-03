import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// screens
// import LaunchScreen from '../containers/LaunchScreen'
import ProfileListScreen from '../screens/ProfileListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddProfileScreen from '../screens/AddProfileScreen';

// styles
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles/NavigationStyles';
import {Colors} from '../themes';

// Stack navigator for the Employee Directory Tab
const DirectoryNav = createStackNavigator({
  ProfileList: { 
    screen: ProfileListScreen,
    // can override default navigation settings with an object
    navigationOptions: {
      title: "Employee Directory",
    }
  },
  Profile: { 
    screen: ProfileScreen,
    // can override default navigation settings with a function that returns an object
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.item.first_name}'s Profile`,
      headerStyle: styles.header,
    })},
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'ProfileList',
  navigationOptions: {
    headerStyle: styles.header
  }
})

// Stack navigator for the Add Profile Tab
const AddProfileNav = createStackNavigator({
  AddProfile: { 
    screen: AddProfileScreen,
    // can override default navigation settings with an object
    navigationOptions: {
      title: "Add Employee",
    }
  },
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'AddProfile',
  navigationOptions: {
    headerStyle: styles.header
  }
})

// Tab navigator for the bottom of the screen
const PrimaryNav = createBottomTabNavigator({
  Profile: { 
    screen: DirectoryNav,
    // can override default navigation settings with an object
    navigationOptions: {
      title: "Employee Directory",
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        let IconComponent = Ionicons;
        let iconName = focused
          ? 'ios-list-box'
          : 'ios-list';
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }
  },
  AddProfile: { 
    screen: AddProfileNav,
    // can override default navigation settings with a function that returns an object
    navigationOptions: {
      title: 'Add Employee',
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        let IconComponent = Ionicons;
        let iconName = focused
          ? 'ios-add-circle'
          : 'ios-add-circle-outline';
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    },
  }
}, {
  // Default config for all screens
  initialRouteName: 'Profile',
  navigationOptions: {
    headerStyle: styles.header
  },
  tabBarOptions: {
    activeTintColor: Colors.orangeDark,
    inactiveTintColor: Colors.union,
  },
})

export default createAppContainer(PrimaryNav)