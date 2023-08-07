import * as React from 'react';
import Svg, {Circle, G, Path} from 'react-native-svg';

function CloseIcon(props: any) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={13} cy={13} r={13} fill="#F9F9F9" />
      <G
        stroke="#08979D"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M8.483 8.934l8.966 8.132M8.483 17.066l8.966-8.132" />
      </G>
    </Svg>
  );
}

export default CloseIcon;
