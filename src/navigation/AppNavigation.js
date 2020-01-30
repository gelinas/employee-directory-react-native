import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
// import LaunchScreen from '../containers/LaunchScreen'
import ProtoScreen from '../containers/ProtoScreen';

import styles from './styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  ProtoScreen: { screen: ProtoScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ProtoScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
