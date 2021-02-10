import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Dashboard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  },
});
