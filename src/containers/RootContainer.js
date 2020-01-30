import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
// import ReduxNavigation from '../navigation/ReduxNavigation'
import AppNavigation from '../navigation/AppNavigation'
// import { connect } from 'react-redux'
// import StartupActions from '../Redux/StartupRedux'

// Styles
import styles from './styles/RootContainerStyles'

class RootContainer extends Component {
  // componentDidMount () {
  //   this.props.startup()
  // }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        {/* <ReduxNavigation /> */}
        <AppNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
// const mapDispatchToProps = (dispatch) => ({
//   startup: () => dispatch(StartupActions.startup())
// })

// export default connect(null, mapDispatchToProps)(RootContainer)

export default RootContainer