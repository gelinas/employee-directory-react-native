import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingTop: 40,
    paddingBottom: Metrics.baseMargin
  },
  section: {
    borderBottomColor: Colors.steel,
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 5,
    flexDirection: 'row'
  },
  profile: {
    padding: 10,
    justifyContent: "space-between"
    // height: 44,
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
})
