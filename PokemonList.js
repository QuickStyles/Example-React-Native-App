import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableHighlight } from 'react-native'

function PokemonList({ list, navigation }) {
  console.log('logging navigation prop')
  console.log(navigation);
  return(
    <ScrollView>
      {
        list.map((pokemon, i) => {
          return(
            <TouchableHighlight
              underlayColor="lightblue"
              activeOpacity={0.3}
              key={i}
              onPress={(event) => navigation.navigate('Pokemon Details')}>
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