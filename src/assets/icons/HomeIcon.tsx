import React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeIcon(props: any) {
  return (
    <Svg
      width={props.width ? props.width : 28}
      height={props.height ? props.height : 30}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11.347 14.065H9.335a.946.946 0 01-.67-.268.895.895 0 01-.269-.648V9.147c0-.023 0-.023-.022-.045 0 0-.022-.022-.045-.022H5.624c-.022 0-.022 0-.045.022 0 0-.022.022-.022.045v4.002c0 .246-.09.491-.268.648a.895.895 0 01-.649.268H2.628c-.38 0-.737-.156-1.006-.425a1.422 1.422 0 01-.424-1.006V7.738H.84a.876.876 0 01-.783-.536c-.134-.313-.022-.693.224-.917L5.825 1.39a1.768 1.768 0 012.325 0l5.522 4.896c.246.224.358.604.224.917a.792.792 0 01-.76.536h-.38v4.919c0 .38-.157.738-.425 1.006a1.388 1.388 0 01-.984.402z"
        fill={props.fillColor ? props.fillColor : '#08979D'}
      />
    </Svg>
  );
}

export default HomeIcon;
