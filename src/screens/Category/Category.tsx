import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';

interface CategoryProps {}

export const Category: React.FC<CategoryProps> = ({}) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'new page',
    });
  }, [navigation]);

  return (
    <View>
      <Text>Category</Text>
    </View>
  );
};
