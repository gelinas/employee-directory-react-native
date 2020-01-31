import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
// import LaunchScreen from '../containers/LaunchScreen'
import ProfileListScreen from '../screens/ProfileListScreen';
import ProfileScreen from '../screens/ProfileScreen';

import styles from './styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  ProfileList: { 
    screen: ProfileListScreen,
    navigationOptions: ({navigation}) => ({
      title: "Employee Directory",
    })
  },
  Profile: { 
    screen: ProfileScreen,
    // headerMode: 'float',
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

export default createAppContainer(PrimaryNav)
