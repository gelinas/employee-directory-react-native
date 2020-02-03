import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingTop: 0
  },
  editButton: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.orangeDark,
    margin: 10,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
})
