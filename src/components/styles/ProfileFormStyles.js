import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  form: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    padding: 10,
    justifyContent: "space-between"
  },
  formLabel: {
    fontSize: 20,
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#DCDCDC',
  },
})
