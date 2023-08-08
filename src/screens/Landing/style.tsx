import {StyleSheet} from 'react-native';
import {color} from '../../styles/commonStyle';

export const landingStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  textColor: {
    color: color.primaryHeader,
  },
  headerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 36,
  },
  headerText: {
    fontSize: 32,
    marginBottom: 20,
    width: 209,
  },
  yearText: {fontSize: 22, margin: 8},

  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  canlenderStyle: {
    padding: 7,
    borderRadius: 100,
    borderColor: color.primaryHeader,
    borderWidth: 4,
    backgroundColor: color.dynastyGreen,
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
  moneyContainer: {marginBottom: 16},
  expenseWapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expenseText: {
    fontSize: 18,
    fontWeight: '400',
    color: color.secondaryHeader,
    marginBottom: 5,
  },
  moneyText: {
    fontSize: 14,
    fontWeight: '400',
  },
  moneySpend: {
    borderLeftColor: color.secondaryHeader,
    borderRightColor: color.secondaryHeader,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingHorizontal: 30,
  },
  dogContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 75,
  },
  dogText: {
    fontSize: 18,
    color: color.natureBlack,
    paddingBottom: 75,
    textAlign: 'center',
  },
  informationText: {
    fontSize: 18,
    color: color.natureBlack,
    marginTop: 34,
    marginBottom: 12,
  },
  addOptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OptionWidth: {
    width: '45%',
  },
  optionContainer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  optionText: {
    marginTop: 8,
    fontSize: 14,
    color: color.incomeColor,
  },
});
