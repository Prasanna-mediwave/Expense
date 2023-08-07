import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function MenuIcon(props: any) {
  return (
    <Svg
      width={10}
      height={28}
      viewBox="0 0 10 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G fill="#fff">
        <Path d="M7 16.333a3.3 3.3 0 10-4.667-4.667A3.3 3.3 0 007 16.333zM7 7a3.3 3.3 0 10-4.666-4.667A3.3 3.3 0 007 7zM7 25.666a3.3 3.3 0 10-4.667-4.667A3.3 3.3 0 007 25.666z" />
      </G>
    </Svg>
  );
}

export default MenuIcon;
