import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
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
          <TouchableOpacity style={back ? toggleStyle.backBtn : null}>
            <BackArrow />
          </TouchableOpacity>
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
        <TouchableOpacity
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
        </TouchableOpacity>
        <TouchableOpacity
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
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Toggle;
