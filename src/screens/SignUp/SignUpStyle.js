import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  container: {
    // flex: 1,
    // marginVertical: 10,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  blockContainer: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#d4d4d4',
    borderWidth: 1,
    borderColor: 'black',
  },
  numberText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  descText: {
    fontSize: 14,
    color: 'black',
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    flexDirection: 'row',
    marginBottom: 40,
  },
  logoTextTop: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  register: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
  },
  logoTextBottom: {
    color: '#fff',
  },
  allBlocks: {
    marginTop: 20,
  },
});
