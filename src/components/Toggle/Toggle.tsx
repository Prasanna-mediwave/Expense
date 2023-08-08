import React from 'react';
import {Pressable, Text, View} from 'react-native';
import BackArrow from '../../assets/icons/BackArrow';
import {toggleStyle} from './style';
import {color, fontStyles} from '../../styles/commonStyle';

interface ToggleCompProps {
  title: string;
  toggle: boolean;
  setToggel: any;
  back: boolean;
}

const Toggle: React.FC<ToggleCompProps> = ({
  title,
  toggle,
  setToggel,
  back,
}) => {
  return (
    <>
      <View style={toggleStyle.toggleHeaderContainer}>
        {back ? (
          <Pressable style={back ? toggleStyle.backBtn : null}>
            <BackArrow />
          </Pressable>
        ) : null}
        <Text
          style={
            back
              ? [
                  toggleStyle.headerWidth,
                  toggleStyle.headerText,
                  fontStyles.font,
                ]
              : [toggleStyle.headerText, fontStyles.font]
          }>
          {title}
        </Text>
      </View>
      <View style={toggleStyle.toggleContainer}>
        <Pressable
          onPress={() => {
            setToggel(true);
          }}
          style={[
            toggleStyle.toggleBtn,
            {
              backgroundColor: `${
                toggle ? color.primaryHeader : color.lightDynastyGreen
              }`,
            },
          ]}>
          <Text
            style={[
              fontStyles.font,
              {
                color: `${toggle ? color.dynastyGreenText : color.natureBlack}`,
              },
            ]}>
            Expenses
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setToggel(false);
          }}
          style={[
            toggleStyle.toggleBtn,
            {
              backgroundColor: `${
                toggle ? color.lightDynastyGreen : color.primaryHeader
              }`,
            },
          ]}>
          <Text
            style={[
              fontStyles.font,
              {
                color: `${toggle ? color.natureBlack : color.dynastyGreenText}`,
              },
            ]}>
            Income
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default Toggle;
