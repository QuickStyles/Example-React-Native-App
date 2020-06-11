import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableHighlight } from 'react-native'

function handlePress(event, navigation, pokemon) {
  navigation.navigate('Pokemon Details', {pokemon})
}

function PokemonList({ list, navigation }) {
  return(
    <ScrollView>
      {
        list.map((pokemon, i) => {
          return(
            <TouchableHighlight
              underlayColor="lightblue"
              activeOpacity={0.3}
              key={i}
              onPress={(event) => handlePress(event, navigation, pokemon)}>
              <View style={styles.pokemon}>
                <Text>{pokemon.name}</Text>
              </View>
            </TouchableHighlight>
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