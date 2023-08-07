import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function BillIcon(props: any) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={48} height={48} rx={24} fill="#F4CB21" fillOpacity={0.2} />
      <Rect x={4} y={4} width={40} height={40} rx={20} fill="#F4CB21" />
      <Path
        d="M29.313 15.535a1.1 1.1 0 00-.667-.17c-.231.017-.454.109-.644.266a.757.757 0 01-.557.216.85.85 0 01-.648-.293A1.923 1.923 0 0025.47 15c-.483 0-.95.195-1.327.554a.89.89 0 01-.646.293.89.89 0 01-.647-.293A1.921 1.921 0 0021.525 15c-.481 0-.949.195-1.325.554a.85.85 0 01-.647.293.748.748 0 01-.553-.214 1.15 1.15 0 00-.648-.264 1.11 1.11 0 00-.67.173c-.205.13-.377.323-.498.56-.12.237-.184.509-.184.786v14.224c0 .277.064.549.184.786s.293.43.499.56c.205.128.437.188.669.172a1.15 1.15 0 00.648-.263.75.75 0 01.553-.214.85.85 0 01.647.293c.376.359.844.554 1.325.554.482 0 .95-.195 1.326-.554a.89.89 0 01.647-.293.89.89 0 01.646.293c.377.359.845.554 1.327.554s.95-.195 1.326-.554a.85.85 0 01.648-.293c.2-.01.398.066.556.214.192.157.416.247.648.263a1.11 1.11 0 00.668-.173c.206-.129.378-.322.498-.559a1.75 1.75 0 00.185-.785V16.887c0-.28-.064-.552-.185-.79a1.403 1.403 0 00-.502-.562zm-9.353 3.55h3.595c.154 0 .301.072.41.202.11.13.17.306.17.49 0 .183-.06.36-.17.49a.538.538 0 01-.41.202H19.96a.538.538 0 01-.411-.203.765.765 0 01-.17-.49c0-.183.061-.359.17-.489a.538.538 0 01.41-.202zm0 2.813h7.08c.154 0 .302.073.411.203.109.13.17.306.17.49 0 .183-.061.36-.17.489a.538.538 0 01-.41.203H19.96a.538.538 0 01-.411-.203.765.765 0 01-.17-.49c0-.183.061-.36.17-.49a.538.538 0 01.41-.202zm7.607 3.509c0 .183-.062.36-.17.49a.538.538 0 01-.411.202h-6.969a.538.538 0 01-.41-.203.764.764 0 01-.17-.49c0-.183.06-.359.17-.489a.538.538 0 01.41-.203h6.969c.154 0 .301.073.41.203.11.13.17.306.17.49zm-.407 3.508h-7.32a.538.538 0 01-.41-.202.764.764 0 01-.17-.49c0-.183.06-.36.17-.49a.538.538 0 01.41-.202h7.32c.154 0 .302.073.41.203.11.13.17.305.17.49 0 .183-.06.359-.17.489a.538.538 0 01-.41.202z"
        fill="#fff"
      />
    </Svg>
  );
}

export default BillIcon;
