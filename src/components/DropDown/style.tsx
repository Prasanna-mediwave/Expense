import {StyleSheet} from 'react-native';
import {color} from '../../styles/commonStyle';

export const styles = StyleSheet.create({
  dropdownBtn: {
    width: '100%',
    backgroundColor: color.primaryContant,
    borderWidth: 0,
    borderRadius: 10,
    shadowOffset: {width: 3, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 3,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  dropdownText: {
    color: color.placeHolderTextColor,
    fontSize: 16,
  },
  dropdownListStyle: {
    backgroundColor: color.primaryContant,
    borderRadius: 10,
    shadowOffset: {width: 3, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 4,
  },
  dropdownListContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownListText: {
    color: color.secondaryContant,
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 20,
  },
});
