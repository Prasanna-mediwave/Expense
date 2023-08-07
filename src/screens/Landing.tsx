import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Background} from '../components/background/Background';
import {useNavigation} from '@react-navigation/native';
import MenuIcon from '../assets/icons/MenuIcone';

interface LandingProps {}

export const Landing: React.FC<LandingProps> = ({}) => {
  const navigation: any = useNavigation();

  return (
    <Background>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Landing</Text>
        <Pressable onPress={() => navigation.openDrawer()}>
          <MenuIcon />
        </Pressable>
      </View>
    </Background>
  );
};
