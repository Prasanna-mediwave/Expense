import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function AddIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M22.372 10.852h-8.64v-8.64a1.44 1.44 0 10-2.88 0v8.64h-8.64a1.44 1.44 0 100 2.88h8.64v8.64a1.44 1.44 0 102.88 0v-8.64h8.64a1.44 1.44 0 100-2.88z"
        fill="#ffffff"
      />
    </Svg>
  );
}

export default AddIcon;
