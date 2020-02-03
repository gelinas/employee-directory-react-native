import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  form: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  errorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 10,
  },
  formLabel: {
    width: 80,
    fontSize: 20,
    marginLeft: 10,
  },
  inputStyleDouble: {
    flex: 4,
    marginTop: 10,
    marginHorizontal: 10,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#DCDCDC',
  },
  inputStyle: {
    flex: 8,
    marginTop: 10,
    marginHorizontal: 10,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#DCDCDC',
  },
  error: {
    flex: 8,
    marginHorizontal: 14,
    fontSize: 10,
    color: Colors.fire
  },
  errorDouble: {
    flex: 4,
    marginHorizontal: 14,
    fontSize: 10,
    color: Colors.fire
  },
  submitButton: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.orangeDark,
    margin: 10,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  }
})
