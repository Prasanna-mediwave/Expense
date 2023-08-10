import React, {useState} from 'react';
import {Background} from '../../components/background/Background';
import Toggle from '../../components/Toggle/Toggle';
import {StyleSheet, View} from 'react-native';
import CardLayout from '../../components/CardLayout/CardLayout';
import Expense from './Expense/Expense';

export const AddExpense = () => {
  const [toggle, setToggel] = useState(true);

  return (
    <Background>
      <Toggle
        back={false}
        title={toggle ? 'Add Expense' : 'Add Income'}
        toggle={toggle}
        setToggel={setToggel}
      />
      <View style={style.expenseContainer}>
        <CardLayout>
          <Expense toggle={toggle} />
        </CardLayout>
      </View>
    </Background>
  );
};

const style = StyleSheet.create({
  expenseContainer: {
    marginTop: 30,
  },
});
