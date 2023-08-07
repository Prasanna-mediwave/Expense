import {StyleSheet, View} from 'react-native';
import React from 'react';

export default function CardLayout({children, addClass}: any) {
  return <View style={[styles.cardContainer, addClass]}>{children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    elevation: 4,
    borderRadius: 20,
    backgroundColor: '#FFFFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
});
