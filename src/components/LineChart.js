import React from 'react';
import {LineChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {Circle, G, Line, Text} from 'react-native-svg';
import {View} from 'react-native';

class ExtrasExample extends React.PureComponent {
  render() {
    const data1 = [15, 30, 20, 38, 50];
    const data2 = [20, 35, 20, 30, 45];

    const data = [
      {
        data: data2,
        svg: {stroke: '#eee'},
      },
      {
        data: data1,
        svg: {stroke: '#11f2fe'},
      },
    ];
    const Tooltip = () => (
      <G x={0} key="tooltip">
        <G y={70}>
          <Text
            style={{fontSize: 20, fontWeight: '500'}}
            x={250}
            dy={-30}
            alignmentBaseline="middle"
            textAnchor="middle"
            stroke="#999"
            fill="#999">
            {`${data[1].data[3]} min`}
          </Text>
        </G>
        <G x={250}>
          <Line y1={50} y2={80} stroke="grey" strokeWidth={2} />
          <Circle cy={80} r={8} stroke="#11f2fe" strokeWidth={4} fill="white" />
        </G>
        <G x={90} y={-5}>
          <Circle cy={80} r={8} stroke="#eee" strokeWidth={4} fill="white" />
        </G>
      </G>
    );

    return (
      <View style={{flex: 1}}>
        <LineChart
          style={{height: 170}}
          data={data}
          svg={{
            strokeWidth: 5,
          }}
          contentInset={{top: 20, bottom: 20}}
          curve={shape.curveCardinal}>
          <Tooltip />
        </LineChart>
      </View>
    );
  }
}

export default ExtrasExample;
