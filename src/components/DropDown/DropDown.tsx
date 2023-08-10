import React from 'react';
import {View, Text} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import FoodIcon from '../../assets/icons/FoodIcon';
import TravelIcon from '../../assets/icons/TravelIcon';
import ShoppingIcon from '../../assets/icons/ShoppingIcon';
import {styles} from './style';
import {color} from '../../styles/commonStyle';
import BillIcon from '../../assets/icons/BillIcon';
import SalaryIcon from '../../assets/icons/SalaryIcon';
import RentIcon from '../../assets/icons/RentIcon';

interface DropDownProps {
  onBlur: any;
  onChange: any;
  categoryItem: any;
}

export const DropDown: React.FC<DropDownProps> = ({
  onBlur,
  onChange,
  categoryItem,
}) => {
  const ExpenseCategory = [
    {key: '1', value: 'Food', iconImg: <FoodIcon size={35} />},
    {key: '2', value: 'Travel', iconImg: <TravelIcon size={35} />},
    {key: '3', value: 'Geocery', iconImg: <ShoppingIcon size={35} />},
  ];
  const IncomeCategory = [
    {key: '1', value: 'Salary', iconImg: <SalaryIcon size={35} />},
    {key: '2', value: 'Rent', iconImg: <RentIcon size={35} />},
    {key: '3', value: 'Business Profit', iconImg: <BillIcon size={35} />},
  ];
  return (
    <>
      <SelectDropdown
        onBlur={onBlur}
        data={categoryItem ? ExpenseCategory : IncomeCategory}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          onChange(selectedItem);
        }}
        buttonStyle={styles.dropdownBtn}
        renderCustomizedButtonChild={selectedItem => {
          return (
            <View style={styles.dropdownContainer}>
              {selectedItem ? selectedItem.iconImg : null}
              <Text
                style={
                  selectedItem
                    ? [styles.dropdownText, {color: color.secondaryContant}]
                    : styles.dropdownText
                }>
                {selectedItem ? selectedItem.value : 'Select category'}
              </Text>
              <View style={{transform: [{rotate: '90deg'}]}}>
                <ArrowIcon color={color.natureBlack} size={6} />
              </View>
            </View>
          );
        }}
        dropdownStyle={styles.dropdownListStyle}
        renderCustomizedRowChild={item => {
          return (
            <View style={styles.dropdownListContainer}>
              {item.iconImg}
              <Text style={styles.dropdownListText}>{item.value}</Text>
            </View>
          );
        }}
      />
    </>
  );
};
