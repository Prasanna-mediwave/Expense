import React from 'react';
import {View, Text} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import {styles} from './style';
import {color} from '../../styles/commonStyle';
// import {ExpenseCategory, IncomeCategory} from '../../assets/data/Data';

interface DropDownProps {
  onBlur: any;
  onChange: any;
  data?: any;
  placeHolder?: string;
}

export const DropDown: React.FC<DropDownProps> = ({
  onBlur,
  onChange,
  data,
  placeHolder,
}) => {
  return (
    <>
      <SelectDropdown
        onBlur={onBlur}
        data={data}
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
                {selectedItem ? selectedItem.value : placeHolder}
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
