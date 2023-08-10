import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Background} from '../../components/background/Background';

interface SummaryProps {}

export const Summary: React.FC<SummaryProps> = ({navigation}: any) => {
  return (
    <Background>
      <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
        <Text>Text</Text>
      </TouchableOpacity>
    </Background>
  );
};
