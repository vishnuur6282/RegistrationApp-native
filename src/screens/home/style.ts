// styles.js
import {StyleSheet} from 'react-native';

export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
    paddingTop: 16,
  },
  drawerbutton: {
    backgroundColor: 'red',
    height: 60,
  },
  imageWrap: {
    height: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 94,
    objectFit: 'cover',
  },
  detailWrap: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  section: {
    padding: 24,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  label: {
    fontWeight: '600',
    color: 'grey',
  },
  data: {
    fontWeight: '500',
    color: 'grey',
  },
});
