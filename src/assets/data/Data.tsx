import React from 'react';

import {color} from '../../styles/commonStyle';
import BillIcon from '../icons/BillIcon';
import FoodIcon from '../icons/FoodIcon';
import RentIcon from '../icons/RentIcon';
import SalaryIcon from '../icons/SalaryIcon';
import ShoppingIcon from '../icons/ShoppingIcon';
import TravelIcon from '../icons/TravelIcon';

export const ExpenseCategory = [
  {key: '1', value: 'Food', iconImg: <FoodIcon size={35} />},
  {key: '2', value: 'Travel', iconImg: <TravelIcon size={35} />},
  {key: '3', value: 'Geocery', iconImg: <ShoppingIcon size={35} />},
];
export const IncomeCategory = [
  {key: '1', value: 'Salary', iconImg: <SalaryIcon size={35} />},
  {key: '2', value: 'Rent', iconImg: <RentIcon size={35} />},
  {key: '3', value: 'Business Profit', iconImg: <BillIcon size={35} />},
];

export const IconCategory = [
  {key: '1', value: 'Food', iconImg: <FoodIcon size={35} />},
  {key: '2', value: 'Travel', iconImg: <TravelIcon size={35} />},
  {key: '3', value: 'Geocery', iconImg: <ShoppingIcon size={35} />},
  {key: '4', value: 'Salary', iconImg: <SalaryIcon size={35} />},
  {key: '5', value: 'Rent', iconImg: <RentIcon size={35} />},
  {key: '6', value: 'Business Profit', iconImg: <BillIcon size={35} />},
];
export const Color = [
  {key: '1', value: 'Red', color: color.expensColor},
  {key: '2', value: 'Purple', color: color.purple},
  {key: '3', value: 'Orange', color: color.orange},
  {key: '4', value: 'Yellow', color: color.yellow},
  {key: '5', value: 'Light Blue', color: color.lightBlue},
];
