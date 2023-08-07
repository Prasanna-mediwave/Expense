import React from 'react';
import {Pressable, Text} from 'react-native';
import {Background} from '../components/background/Background';

interface AddExpenseProps {}

export const AddExpense: React.FC<AddExpenseProps> = ({navigation}: any) => {
  return (
    <Background>
      <Pressable
        onPress={() => {
          navigation.navigate('Category');
        }}>
        <Text>Text</Text>
      </Pressable>
    </Background>
  );
};
