import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AnimatedCircularProgress from 'react-native-conical-gradient-progress';

export default function CircularGradient(props) {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={105}
        width={5}
        fill={80}
        prefill={1000}
        beginColor="#0b0ba3"
        endColor="#11f2fe"
        segments={20}
        backgroundColor="#eee"
        linecap="round">
        {(_) => (
          <View style={styles.titleBox}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.quantity}>{props.quantity}</Text>
            <Text style={styles.measure}>{props.measure}</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexWrap: 'wrap',
    transform: [{scaleX: -1}],
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    color: '#999',
  },
  quantity: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#888',
  },
  measure: {
    fontSize: 12,
    textAlign: 'center',
    color: '#999',
  },
  titleBox: {
    ...StyleSheet.absoluteFillObject,
    transform: [{scaleX: -1}],
    justifyContent: 'center',
  },
});
