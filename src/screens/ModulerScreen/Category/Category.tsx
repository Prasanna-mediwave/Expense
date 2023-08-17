import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Pressable, TouchableOpacity, View} from 'react-native';
// import CloseIcon from '../../../assets/icons/CloseIcon';
import {modulerStyle} from '../style';
// import {expenseStyle} from '../../AddExpense/Expense/style';
// import {fontStyles} from '../../../styles/commonStyle';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';
import CloseIcon from '../../../assets/icons/CloseIcon';
import {expenseStyle} from '../../AddExpense/Expense/style';
import {fontStyles} from '../../../styles/commonStyle';

export const Category = () => {
  const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, [navigation]);

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  return (
    <>
      <AnimatedPressable
        style={modulerStyle.backdrop}
        onPress={() => navigation.goBack()}
        entering={FadeIn}
        exiting={FadeOut}
      />
      <Animated.View
        style={modulerStyle.sheet}
        entering={SlideInDown}
        exiting={SlideOutDown}>
        <View style={modulerStyle.moduleContainer}>
          <View style={modulerStyle.innerContainer}>
            <TouchableOpacity
              style={modulerStyle.closeBtn}
              onPress={() => {
                navigation.goBack();
              }}>
              <CloseIcon />
            </TouchableOpacity>
            <View style={modulerStyle.fieldContainer}>
              <Text style={[expenseStyle.header, fontStyles.font]}>
                Category title
              </Text>
            </View>
            <View style={modulerStyle.fieldContainer}>
              <Text style={[expenseStyle.header, fontStyles.font]}>
                Choose icon
              </Text>
            </View>
            <View style={modulerStyle.fieldContainer}>
              <Text style={[expenseStyle.header, fontStyles.font]}>
                Choose color
              </Text>
            </View>
            <View>
              <TouchableOpacity style={expenseStyle.btnSubmit}>
                <Text style={expenseStyle.addSubmitText}>Add Category</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Animated.View>
    </>
  );
};
