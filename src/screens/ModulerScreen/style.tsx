import {StyleSheet} from 'react-native';
import {color} from '../../styles/commonStyle';

export const modulerStyle = StyleSheet.create({
  moduleContainer: {
    flex: 1,
    backgroundColor: color.catBackground,
  },
  innerContainer: {
    backgroundColor: color.primaryContant,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingHorizontal: 30,
    paddingBottom: 40,
    paddingTop: 25,
  },
  closeBtn: {
    marginLeft: 'auto',
    marginBottom: 20,
  },
  fieldContainer: {
    marginBottom: 30,
  },
  sheet: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 1,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: color.catBackground,
    zIndex: 1,
  },
});
