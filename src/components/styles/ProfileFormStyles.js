import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  section: {
    borderBottomColor: Colors.steel,
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 3,
    marginRight: 3,
    flexDirection: 'row'
  },
  profile: {
    padding: 10,
    justifyContent: "space-between"
  },
})
