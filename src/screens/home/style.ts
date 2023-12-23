// styles.js
import {StyleSheet} from 'react-native';

export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
    paddingTop: 16,
    textAlign: 'left',
  },
  pagelistheading: {
    color: 'black',
    fontSize: 16,
    padding: 24,
    fontWeight: '600',
  },
  drawerbutton: {
    backgroundColor: 'red',
    height: 60,
  },
  imageWrap: {
    height: '20%',
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
    width: '100%',
  },

  section: {
    alignItems: 'center',
    padding: 24,
    display: 'flex',
    flexDirection: 'row',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 94,
    objectFit: 'cover',
  },
  data: {
    fontWeight: '500',
    color: 'grey',
    fontSize: 18,
    textTransform: 'capitalize',
    paddingLeft: 12,
  },
});
