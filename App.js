import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.body}>
        <Text style={styles.text}>Hello World!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 5,
    width: '100%'
  },
  text: {
    color: 'blue'
  }
});
