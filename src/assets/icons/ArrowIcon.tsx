import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function ArrowIcon(props: any) {
  return (
    <Svg
      width={props.size ? props.size : 11}
      height={16}
      viewBox="0 0 11 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G
        stroke={props.color ? props.color : '#FFF'}
        strokeWidth={2}
        strokeLinecap="round">
        <Path d="M1 15l8.614-6.973M9.614 7.973L1 1" />
      </G>
    </Svg>
  );
}

export default ArrowIcon;
