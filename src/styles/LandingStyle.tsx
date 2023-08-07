import {StyleSheet} from 'react-native';

const dummy = {red: '#FFFF', blue: '#000000'};
export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  textColor: {
    color: '#ffffffff',
  },
  headerText: {
    fontSize: 32,
    marginBottom: 20,
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  canlenderStyle: {
    padding: 7,
    borderRadius: 100,
    borderColor: '#FFFFFF',
    borderWidth: 4,
    backgroundColor: dummy.blue,
  },
  monthContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  expenseContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expenseWapper: {flexDirection: 'row', justifyContent: 'space-between'},
  expenseText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#4D4D4D',
    marginBottom: 5,
  },
  moneyText: {fontSize: 14, fontWeight: '400'},
  moneySpend: {
    borderLeftColor: '#4D4D4D60',
    borderRightColor: '#4D4D4D60',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingHorizontal: 30,
  },
});
