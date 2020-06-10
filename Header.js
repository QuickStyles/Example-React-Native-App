import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Header() {
  return(
    <View style={styles.header}>
      <Text style={styles.h1}>Pokédex</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25
  },
  h1: {
    fontSize: 40
  },
})

export default Header