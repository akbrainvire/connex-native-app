import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  signupMain: {
    padding: 30,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: '#020024',
    backgroundColor: '#fff',
  },
  topSection: {
    marginBottom: 20,
  },
  topTitle: {
    //color: '#fff',
    color: '#020024',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 26,
  },
  topDesc: {
    //color: '#fff',
    color: '#020024',
    textAlign: 'center',
  },
  middleSection: {},
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontWeight: 'bold',
    //color: '#fff',
    color: '#020024',
    marginBottom: 10,
  },
  input: {
    paddingLeft: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    height: 50,
  },
  bottomSection: {
    marginTop: 40,
  },
  privacyPolicy: {
    marginTop: 30,
    textAlign: 'center',
    opacity: 0.7,
    lineHeight: 20,
    //color: '#fff'
    color: '#020024',
  },
  errorMsg: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  },
  passwordIcon: {
    position: 'absolute',
    right: 10,

    bottom: 15,
  },
});
