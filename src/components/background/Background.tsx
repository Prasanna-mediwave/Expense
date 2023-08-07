import React from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import {styles} from './style';

interface BackgroundProps {
  children: any;
}

export const Background: React.FC<BackgroundProps> = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/image/background.png')}
      style={styles.image}>
      <ScrollView>
        <View style={styles.maincontainer}>{children}</View>
      </ScrollView>
    </ImageBackground>
  );
};
