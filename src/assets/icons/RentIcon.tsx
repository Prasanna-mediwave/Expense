import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function RentIcon(props: any) {
  return (
    <Svg
      width={50}
      height={48}
      viewBox="0 0 50 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        width={49.1089}
        height={48}
        rx={24}
        fill="#2A96A2"
        fillOpacity={0.25}
      />
      <Rect
        x={4.09241}
        y={4}
        width={40.9241}
        height={40}
        rx={20}
        fill="#2A96A2"
      />
      <Path
        d="M17.669 32v-8.087h-2.322L24.555 16l4.93 4.192v-2.715h1.67v4.176l2.607 2.249H31.44V32h-4.95v-5.677h-3.86V32h-4.961zm4.777-9.789h4.227c0-.523-.213-.953-.64-1.29a2.321 2.321 0 00-1.479-.504c-.56 0-1.05.167-1.473.5a1.572 1.572 0 00-.635 1.294z"
        fill="#fff"
      />
    </Svg>
  );
}

export default RentIcon;
