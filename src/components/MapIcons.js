import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

import running from '../../assets/run.png';
import cycling from '../../assets/invalid-name.png';
import driving from '../../assets/noun.png';

const MapIcons = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Trips and travels</Text>
    <View style={styles.statsContainer}>
      <View style={styles.iconContainer}>
        <View style={[styles.mapIcon, {backgroundColor: '#15d4d8'}]}>
          <Image source={running} style={styles.image} />
        </View>
        <Text style={styles.text}>RUNNING</Text>
        <Text style={styles.text}>8.6 hours</Text>
      </View>
      <View style={styles.iconContainer}>
        <View style={[styles.mapIcon, {backgroundColor: '#485bdd'}]}>
          <Image source={cycling} style={styles.image} />
        </View>
        <Text style={styles.text}>BICYCLE</Text>
        <Text style={styles.text}>1.1 hours</Text>
      </View>
      <View style={styles.iconContainer}>
        <View style={[styles.mapIcon, {backgroundColor: '#369ada'}]}>
          <Image source={driving} style={styles.image} />
        </View>
        <Text style={styles.text}>TRAVEL</Text>
        <Text style={styles.text}>39 minutes</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
  },
  statsContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    width: '100%',
    height: 800,
    paddingTop: 10,
    justifyContent: 'space-between',
    marginTop: 350,
    backgroundColor: 'rgba(9,9,9,0.5)',
  },
  mapIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 22,
    height: 22,
    margin: 7,
    resizeMode: 'contain',
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 2,
  },
  title: {
    padding: 10,
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    backgroundColor: 'rgba(9,9,9,0.5)',
  },
});

export default MapIcons;
