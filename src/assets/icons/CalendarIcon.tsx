import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

function CalendarIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      style={{width: '100%', height: '100%', contentVisibility: 'visible'}}
      viewBox="0 0 500 500"
      {...props}>
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0h500v500H0z" />
        </ClipPath>
        <ClipPath>
          <Path d="M0 0h500v500H0z" />
        </ClipPath>
        <ClipPath>
          <Path
            fill="#fff"
            d="M262.987 238.142h-25.373l-.004.939h25.373l.004-.939"
          />
        </ClipPath>
        <ClipPath id="b">
          <Path d="M0 0h500v500H0z" />
        </ClipPath>
        <ClipPath />
        <ClipPath id="c">
          <Path
            fill="#fff"
            d="M262.987 238.142h-25.373l.003 24.075h25.373l-.003-24.075"
          />
        </ClipPath>
        <ClipPath>
          <Path d="M0 0h500v500H0z" />
        </ClipPath>
        <ClipPath>
          <Path fill="#fff" d="M260.61 238.766h-21.556v20.932h21.556v-20.932" />
        </ClipPath>
        <ClipPath />
      </Defs>
      <G clipPath="url(#a)">
        <G clipPath="url(#b)" display="block">
          <G
            className="primary design"
            clipPath="url(#c)"
            transform="translate(-4957.502 -4957.504) scale(20.83)"
            display="block">
            <Path
              fill="#ffffff"
              d="M257 242h-2v-1a1 1 0 10-2 0v1h-6v-1a1 1 0 10-2 0v1h-2c-1.1 0-2 .9-2 2v2.04h18V244c0-1.1-.9-2-2-2zm0 5.54h-16V257c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9.46h-2zm-3.01 2.99h.01c.55 0 1 .44 1 1 0 .55-.45 1-1 1s-1-.45-1-1c0-.56.44-1 .99-1zm-3.99 0c.56 0 1 .44 1 1 0 .55-.44 1-1 1-.55 0-1-.45-1-1 0-.56.44-1 1-1zm0 3.5c.56 0 1 .45 1 1s-.44 1-1 1c-.55 0-1-.45-1-1s.44-1 1-1zm-4-3.5c.55 0 1 .44 1 1 0 .55-.44 1-.99 1H246c-.55 0-1-.45-1-1 0-.56.45-1 1-1zm0 3.5c.55 0 1 .45 1 1s-.44 1-.99 1H246c-.55 0-1-.45-1-1s.45-1 1-1z"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default CalendarIcon;
