import React from 'react';
import {Pressable, Text} from 'react-native';
import {Background} from '../../components/background/Background';

interface SummaryProps {}

export const Summary: React.FC<SummaryProps> = ({navigation}: any) => {
  return (
    <Background>
      <Pressable onPress={() => navigation.navigate('Filter')}>
        <Text>Text</Text>
      </Pressable>
    </Background>
  );
};
