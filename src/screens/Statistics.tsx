import React from 'react';
import {Text} from 'react-native';
import {Background} from '../components/background/Background';

interface StatisticsProps {}

export const Statistics: React.FC<StatisticsProps> = ({}) => {
  return (
    <Background>
      <Text>Statistic</Text>
    </Background>
  );
};
