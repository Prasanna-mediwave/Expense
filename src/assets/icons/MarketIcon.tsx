import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function MarketIcon(props: any) {
  return (
    <Svg
      width={props.width ? props.width : 27}
      height={props.height ? props.height : 25}
      viewBox="0 0 27 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G fill={props.fillColor ? props.fillColor : '#08979D'}>
        <Path d="M5.661 19.263H0V25h5.661v-5.737zM12.594 17.029H6.933v7.97h5.661v-7.97zM19.527 11.444h-5.662V25h5.662V11.444zM26.46 4.742h-5.662V25h5.662V4.742zM3.871 12.662L13.936 2.597v2.457l1.478-1.479V.093H11.93L10.453 1.57h2.456L2.844 11.634l1.027 1.027z" />
      </G>
    </Svg>
  );
}

export default MarketIcon;
