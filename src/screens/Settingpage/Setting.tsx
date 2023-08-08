import React from 'react';
import {Text} from 'react-native';
import {Background} from '../../components/background/Background';

interface SettingProps {}

export const Setting: React.FC<SettingProps> = ({}) => {
  return (
    <Background>
      <Text>setting</Text>
    </Background>
  );
};
