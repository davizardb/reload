import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

import CircularGradient from './CircularGradient';
import LineChart from './LineChart';
import RoutesMap from './RoutesMap';

import arrow from '../../assets/layer-2.png';
import points from '../../assets/points.png';
import clock from '../../assets/clock.png';
import stick from '../../assets/stick.png';

export default function Dashboard() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.tabContainer}>
        <Image source={arrow} style={styles.arrow} />
        <Text style={styles.arrowText}>Running</Text>
      </View>
      <View style={styles.gradientContainer}>
        <CircularGradient title="Ran" quantity={5.1} measure="Miles" />
        <CircularGradient title="Pace" quantity={10.8} measure="Min/mi" />
        <CircularGradient title="Max Hr" quantity={144} measure="Bpm" />
      </View>
      <View style={styles.container}>
        <View style={styles.iconStatsContainer}>
          <View>
            <Image source={points} style={styles.iconStats} />
            <Text style={styles.statsText}>10kms</Text>
          </View>
          <View>
            <Image
              source={clock}
              style={[
                styles.iconStats,
                {width: 55, height: 55, marginBottom: 5},
              ]}
            />
            <Text style={styles.statsText}>38min</Text>
          </View>
          <View>
            <Image source={stick} style={styles.iconStats} />
            <Text style={styles.statsText}>4:50/KM</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Last run</Text>
            <Text style={styles.detailsText}>
              12km{'  '} - {'  '} 48min{'  '} -{'  '} 4:50/KM
            </Text>
          </View>
          <LineChart />
        </View>
      </View>
      <View style={styles.containerMap}>
        <View style={styles.mapCard}>
          <RoutesMap />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
    borderBottomWidth: 2,
    borderColor: 'rgba(170,170,170,0.1)',
    flex: 1,
  },
  gradientContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  iconStatsContainer: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    flexWrap: 'wrap',
    padding: 10,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderColor: 'rgba(170,170,170,0.1)',
    justifyContent: 'space-around',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsText: {
    padding: 10,
    fontSize: 15,
    fontWeight: '700',
    color: '#bbb',
  },
  arrow: {
    width: 30,
    height: 30,
  },
  arrowText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#555',
    marginLeft: 10,
  },
  statsText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#888',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  iconStats: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  containerMap: {
    backgroundColor: '#fff',
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapCard: {
    height: 500,
    width: 370,
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
});
