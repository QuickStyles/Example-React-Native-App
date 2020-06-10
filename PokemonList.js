import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native'

function PokemonList({ list }) {
  return(
    <ScrollView>
      {
        list.map((pokemon, i) => {
          return(
            <View key={i} style={styles.pokemon}>
              <Text>{pokemon.name}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pokemon: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  }
})
export default PokemonList