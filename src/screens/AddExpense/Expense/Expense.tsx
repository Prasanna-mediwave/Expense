import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import CalendarIcon from '../../../assets/icons/CalendarIcon';
import {landingStyles} from '../../Landing/style';
import {color, fontStyles} from '../../../styles/commonStyle';
import {expenseStyle} from './style';
import {Controller, useForm} from 'react-hook-form';
import {TextInput} from 'react-native-gesture-handler';
import {DropDown} from '../../../components/DropDown/DropDown';
import AddIcon from '../../../assets/icons/AddIcon';

const Expense = ({toggle, navigation}: any) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      amount: '',
      category: '',
      note: '',
    },
  });
  const onSubmit = ({data}: any) => console.log(data);
  return (
    <>
      <View style={expenseStyle.calenderContainer}>
        <View>
          <Text style={[fontStyles.font, expenseStyle.date]}>
            22nd June 2023
          </Text>
        </View>
        <TouchableOpacity
          style={[
            landingStyles.canlenderStyle,
            {borderColor: color.calenderoutline},
          ]}>
          <CalendarIcon />
        </TouchableOpacity>
      </View>
      <View style={expenseStyle.inputContainer}>
        <Text style={[fontStyles.font, expenseStyle.header]}>
          Enter the amount
        </Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={[
                expenseStyle.inputText,
                expenseStyle.palceholderText,
                fontStyles.font,
              ]}
              placeholder="Enter the amount"
              placeholderTextColor="grey"
            />
          )}
          name="amount"
        />
        {errors.amount && (
          <Text style={[expenseStyle.errorMessage, fontStyles.font]}>
            Amount is required.
          </Text>
        )}
      </View>
      <View style={expenseStyle.inputContainer}>
        <Text style={[fontStyles.font, expenseStyle.header]}>
          Choose cateogry
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
              categoryItem={toggle}
            />
          )}
          name="category"
        />
        {errors.category && (
          <Text style={[expenseStyle.errorMessage, fontStyles.font]}>
            Category is required.
          </Text>
        )}
        <View style={expenseStyle.addCategoryContainer}>
          <TouchableOpacity
            style={expenseStyle.addCategoryBtn}
            onPress={() => {
              navigation.navigate('Category');
            }}>
            <Text style={[expenseStyle.addCategoryBtnText, fontStyles.font]}>
              Add new category
            </Text>
            <View>
              <AddIcon color={color.dynastyGreen} size={14} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={expenseStyle.inputContainer}>
        <Text style={[fontStyles.font, expenseStyle.header]}>Note</Text>
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
              textAlignVertical="top"
              style={[
                expenseStyle.inputText,
                expenseStyle.palceholderText,
                fontStyles.font,
              ]}
              numberOfLines={5}
              multiline={true}
              placeholder="Add your notes here..."
              placeholderTextColor="grey"
            />
          )}
          name="note"
        />
        {errors.note && (
          <Text style={[expenseStyle.errorMessage, fontStyles.font]}>
            Note is required.
          </Text>
        )}
      </View>
      <View>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={expenseStyle.btnSubmit}>
          <Text style={expenseStyle.addSubmitText}>
            {toggle ? 'Add Expense' : 'Add Income'}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Expense;
