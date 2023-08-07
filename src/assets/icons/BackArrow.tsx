import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BackArrow(props: any) {
  return (
    <Svg
      width={28}
      height={15}
      viewBox="0 0 28 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.533 1L1 7.5 8.533 14M2.046 7.5H27"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BackArrow;
