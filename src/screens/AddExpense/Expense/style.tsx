import {StyleSheet} from 'react-native';
import {color} from '../../../styles/commonStyle';

export const expenseStyle = StyleSheet.create({
  calenderContainer: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  date: {
    fontSize: 22,
    color: color.secondaryHeader,
    fontWeight: '400',
  },
  inputContainer: {
    marginHorizontal: 6,
    marginBottom: 30,
  },
  header: {
    fontSize: 18,
    color: color.secondaryHeader,
    fontWeight: '400',
    marginBottom: 8,
  },
  inputText: {
    backgroundColor: color.primaryContant,
    borderRadius: 10,
    marginTop: 10,
    shadowOffset: {width: 3, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 3,
    position: 'relative',
    fontSize: 16,
    flexDirection: 'column',
  },
  palceholderText: {
    paddingHorizontal: 20,
    fontSize: 18,
    color: color.placeHolderTextColor,
  },
  errorMessage: {
    marginTop: 5,
    color: color.expensColor,
  },
  addCategoryContainer: {
    marginTop: 20,
  },
  addCategoryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  addCategoryBtnText: {
    fontSize: 18,
    color: color.dynastyGreen,
    marginRight: 10,
  },
  btnSubmit: {
    backgroundColor: '#08979D',
    padding: 15,
    borderRadius: 40,
    marginBottom: 20,
  },
  addSubmitText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
});
