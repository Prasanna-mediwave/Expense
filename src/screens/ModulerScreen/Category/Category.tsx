import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Pressable, TouchableOpacity, View, TextInput} from 'react-native';
import {modulerStyle} from '../style';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';
import CloseIcon from '../../../assets/icons/CloseIcon';
import {expenseStyle} from '../../AddExpense/Expense/style';
import {fontStyles} from '../../../styles/commonStyle';
import {Controller, useForm} from 'react-hook-form';
import {DropDown} from '../../../components/DropDown/DropDown';
import {Color, IconCategory} from '../../../assets/data/Data';

export const Category = () => {
  const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, [navigation]);

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      categoryTitle: '',
      Icon: '',
      Color: '',
    },
  });

  const onSubmit = ({data}: any) => console.log(data);

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
          <View style={[modulerStyle.innerContainer]}>
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
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    style={[
                      expenseStyle.inputText,
                      expenseStyle.palceholderText,
                      fontStyles.font,
                    ]}
                    placeholder="Enter the category title"
                    placeholderTextColor="grey"
                  />
                )}
                name="categoryTitle"
              />
              {errors.categoryTitle && (
                <Text style={[expenseStyle.errorMessage, fontStyles.font]}>
                  Cateogry Title is required.
                </Text>
              )}
            </View>
            <View style={modulerStyle.fieldContainer}>
              <Text style={[expenseStyle.header, fontStyles.font]}>
                Choose icon
              </Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur}}) => (
                  <DropDown
                    onChange={onChange}
                    onBlur={onBlur}
                    data={IconCategory}
                    placeHolder="Choose icon"
                  />
                )}
                name="Icon"
              />
              {errors.Icon && (
                <Text style={[expenseStyle.errorMessage, fontStyles.font]}>
                  Choose icon is required.
                </Text>
              )}
            </View>
            <View style={modulerStyle.fieldContainer}>
              <Text style={[expenseStyle.header, fontStyles.font]}>
                Choose color
              </Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur}}) => (
                  <DropDown
                    onChange={onChange}
                    onBlur={onBlur}
                    data={Color}
                    placeHolder="Choose color"
                  />
                )}
                name="Color"
              />
              {errors.Color && (
                <Text style={[expenseStyle.errorMessage, fontStyles.font]}>
                  color is required.
                </Text>
              )}
            </View>
            <View>
              <TouchableOpacity
                style={expenseStyle.btnSubmit}
                onPress={handleSubmit(onSubmit)}>
                <Text style={expenseStyle.addSubmitText}>Add Category</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Animated.View>
    </>
  );
};
