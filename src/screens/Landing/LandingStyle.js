import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    //backgroundColor: '#7EE7C9',
    backgroundColor: '#020024',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(69,85,117,0.6)',
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    flexDirection: 'row',
    marginBottom: 40,
  },
  descBox: {
    flex: 1,
    width: null,
    height: null,
    padding: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 99,
  },
  logoTextTop: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  logoTextBottom: {
    color: '#fff',
  },
  btnPart: {
    display: 'flex',
    gap: 15,
    width: '100%',
    marginTop: 7,
  },
  btn: {
    borderRadius: 20,
    //backgroundColor: '#44187A',
    backgroundColor: '#3E35F1',
    height: 50,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemImage: {
    width: '100%',
    height: 300,
    aspectRatio: 1,
    alignSelf: 'center',
  },
  itemTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  itemDesc: {
    color: '#fff',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
