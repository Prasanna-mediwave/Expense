import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function MusicIcon(props: any) {
  return (
    <Svg
      width={props.size ? props.size : 48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        width={48}
        height={48}
        rx={24}
        fill={props.color ? props.color : '#9948A6'}
        fillOpacity={0.2}
      />
      <Rect
        x={4}
        y={4}
        width={40}
        height={40}
        rx={20}
        fill={props.color ? props.color : '#9948A6'}
      />
      <Path
        d="M32.363 15.301l-10.175 2.06h-8.194v.625h7.046v2.61h-7.046v.625h7.046v2.61h-7.046v.625h7.046v2.61h-7.046v.625h3.172c-.923.53-1.529 1.402-1.529 2.389 0 .074.007.147.014.22h-1.657v.626h1.798c.446 1.198 1.815 2.074 3.43 2.074 1.617 0 2.985-.876 3.431-2.074h3.568c.651.54 1.556.875 2.556.875s1.904-.336 2.555-.875h2.674V30.3H31.91c.284-.414.449-.89.454-1.396v-1.212h1.643v-.626h-1.643v-2.61h1.643v-.625h-1.643v-2.61h1.643v-.625h-1.643v-2.61h1.643v-.625h-1.643v-2.06zm-6.716 15h-2.853a2.34 2.34 0 00.014-.221V27.69h2.699c-.2.364-.315.766-.315 1.19 0 .516.166.999.455 1.42zm4.845-3.983a4.197 4.197 0 00-1.715-.357c-1.134 0-2.145.433-2.803 1.105h-3.166v-2.61h7.684v1.862zm0-2.487h-7.684v-1.424l7.506-1.186h.179v2.61z"
        fill="#fff"
      />
    </Svg>
  );
}

export default MusicIcon;
