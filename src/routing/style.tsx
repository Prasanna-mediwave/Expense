import {StyleSheet} from 'react-native';
import {color} from '../styles/commonStyle';

export const tabStyle = StyleSheet.create({
  tabStyle: {
    height: 80,
    backgroundColor: color.primaryHeader,
    paddingHorizontal: 20,
  },
  addBtn: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: color.dynastyGreenText,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    transform: [{rotate: '45deg'}],
  },
  addContainer: {
    padding: 10,
    top: -30,
    borderRadius: 40,
    backgroundColor: color.primaryHeader,
    elevation: 2,
  },
  selectedBtn: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: color.dynastyGreenText,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
