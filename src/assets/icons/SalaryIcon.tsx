import * as React from 'react';
import Svg, {Rect, G, Path} from 'react-native-svg';

function SalaryIcon(props: any) {
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
        fill={props.color ? props.color : '#7DD15F'}
        fillOpacity={0.2}
      />
      <Rect
        x={4}
        y={4}
        width={40}
        height={40}
        rx={20}
        fill={props.color ? props.color : '#7DD15F'}
      />
      <G fill="#fff">
        <Path d="M20.866 27.928c.061.057.166.083.233.057l13.848-5.402c.067-.026.07-.094.009-.152l-6.821-6.363c-.062-.058-.167-.084-.234-.058l-13.848 5.403c-.067.026-.07.094-.01.152l6.823 6.363zm-4.494-6.396l10.757-4.197c.427.398 1.147.576 1.607.396l3.952 3.686c-.46.18-.487.648-.06 1.047l-10.757 4.197c-.427-.398-1.146-.576-1.607-.397l-3.952-3.686c.46-.18.487-.648.06-1.046z" />
        <Path d="M34.596 23.101L21.16 28.343a.328.328 0 01-.12.022.432.432 0 01-.289-.113l-6.384-5.955-.314.123c-.067.026-.07.094-.01.152l6.823 6.363c.061.057.166.083.233.057l13.848-5.403c.067-.026.07-.093.009-.151l-.36-.337z" />
        <Path d="M20.907 24.44c.468-.182.495-.66.06-1.064-.435-.405-1.166-.586-1.635-.404-.468.183-.495.66-.06 1.065.434.406 1.166.586 1.635.404zM29.668 21.023c.468-.183.495-.66.06-1.065-.434-.406-1.166-.586-1.635-.403-.468.182-.495.659-.06 1.064.434.406 1.166.587 1.635.404zM21.936 22.998c1.315 1.226 3.529 1.772 4.944 1.22 1.416-.553 1.498-1.994.184-3.22-1.315-1.227-3.528-1.773-4.944-1.22-1.416.552-1.498 1.994-.184 3.22z" />
        <Path d="M34.596 24.108L21.16 29.35a.334.334 0 01-.12.021.43.43 0 01-.289-.113l-6.384-5.954-.314.123c-.067.025-.07.093-.01.152l6.823 6.362c.061.058.166.084.233.058l13.848-5.403c.067-.026.07-.094.009-.152l-.36-.336z" />
        <Path d="M34.596 25.115L21.16 30.356a.33.33 0 01-.12.022.431.431 0 01-.289-.113l-6.384-5.954-.314.122c-.067.026-.07.094-.01.152l6.823 6.363c.061.058.166.084.233.057l13.848-5.402c.067-.026.07-.094.009-.152l-.36-.336z" />
        <Path d="M34.596 26.121L21.16 31.363a.334.334 0 01-.12.022.432.432 0 01-.289-.113l-6.384-5.955-.314.123c-.067.025-.07.094-.01.152l6.823 6.363c.061.057.166.083.233.057l13.848-5.403c.067-.026.07-.094.009-.152l-.36-.336z" />
      </G>
    </Svg>
  );
}

export default SalaryIcon;
