import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Background} from '../../components/background/Background';
import {useNavigation} from '@react-navigation/native';
import MenuIcon from '../../assets/icons/MenuIcone';
import BellIcon from '../../assets/icons/BellIcon';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import CalendarIcon from '../../assets/icons/CalendarIcon';
import CardLayout from '../../components/CardLayout/CardLayout';
import DogIcon from '../../assets/icons/DogIcon';
import PigIcon from '../../assets/icons/PigIcon';
import ReminderIcon from '../../assets/icons/ReminderIcon';
import {landingStyles} from './style';
import {color, fontStyles} from '../../styles/commonStyle';

interface LandingProps {}

export const Landing: React.FC<LandingProps> = ({}) => {
  const navigation: any = useNavigation();

  return (
    <Background>
      <View style={landingStyles.headerContainer}>
        <View>
          <Text style={[landingStyles.textColor, fontStyles.font]}>
            Welcome back
          </Text>
          <Text style={[landingStyles.textColor, fontStyles.font]}>
            Prasanna
          </Text>
        </View>
        <View style={landingStyles.headerIcon}>
          <View>
            <BellIcon />
          </View>
          <Pressable onPress={() => navigation.openDrawer()}>
            <MenuIcon />
          </Pressable>
        </View>
      </View>
      <View>
        <Text
          style={[
            landingStyles.textColor,
            landingStyles.headerText,
            fontStyles.font,
          ]}>
          Manage your expenses
        </Text>
      </View>
      <View style={landingStyles.calendarContainer}>
        <View style={landingStyles.monthContainer}>
          <Pressable style={{transform: [{rotate: '180deg'}]}}>
            <ArrowIcon />
          </Pressable>
          <Text
            style={[
              landingStyles.textColor,
              landingStyles.yearText,
              fontStyles.font,
            ]}>
            June 2023
          </Text>
          <Pressable>
            <ArrowIcon />
          </Pressable>
        </View>
        <Pressable style={landingStyles.canlenderStyle}>
          <CalendarIcon />
        </Pressable>
      </View>
      <View style={landingStyles.moneyContainer}>
        <CardLayout>
          <View style={landingStyles.expenseWapper}>
            <View style={landingStyles.expenseContainer}>
              <Text style={[landingStyles.expenseText, fontStyles.font]}>
                Income
              </Text>
              <Text
                style={[
                  landingStyles.moneyText,
                  {color: color.incomeColor},
                  fontStyles.font,
                ]}>
                $0.00
              </Text>
            </View>
            <View
              style={[
                landingStyles.expenseContainer,
                landingStyles.moneySpend,
              ]}>
              <Text style={[landingStyles.expenseText, fontStyles.font]}>
                Expenses
              </Text>
              <Text
                style={[
                  landingStyles.moneyText,
                  {color: color.expensColor},
                  fontStyles.font,
                ]}>
                $0.00
              </Text>
            </View>
            <View style={landingStyles.expenseContainer}>
              <Text style={[landingStyles.expenseText, fontStyles.font]}>
                Total
              </Text>
              <Text
                style={[
                  landingStyles.moneyText,
                  {color: color.secondaryHeader},
                  fontStyles.font,
                ]}>
                $0.00
              </Text>
            </View>
          </View>
        </CardLayout>
      </View>
      <CardLayout>
        <View style={landingStyles.dogContainer}>
          <DogIcon />
        </View>
        <View>
          <Text style={[landingStyles.dogText, fontStyles.font]}>
            No data available
          </Text>
        </View>
      </CardLayout>

      <View>
        <Text style={[landingStyles.informationText, fontStyles.font]}>
          Additional informations
        </Text>
      </View>
      <View style={landingStyles.addOptionContainer}>
        <Pressable style={landingStyles.OptionWidth}>
          <CardLayout>
            <View style={landingStyles.optionContainer}>
              <PigIcon />
              <Text style={[landingStyles.optionText, fontStyles.font]}>
                Savings
              </Text>
            </View>
          </CardLayout>
        </Pressable>
        <Pressable style={landingStyles.OptionWidth}>
          <CardLayout>
            <View style={landingStyles.optionContainer}>
              <ReminderIcon />
              <Text style={[landingStyles.optionText, fontStyles.font]}>
                Reminders
              </Text>
            </View>
          </CardLayout>
        </Pressable>
      </View>
    </Background>
  );
};
