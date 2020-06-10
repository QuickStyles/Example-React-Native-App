import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';

const POKEMON_API_ENDPOINT = "https://pokeapi.co/api/v2/"
const GET_50_POKEMON_PATH = "pokemon?limit=50"

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    fetch(`${POKEMON_API_ENDPOINT}${GET_50_POKEMON_PATH}`)
      .then(res => res.json())
      .then(payload => {
        setPokemonList(payload.results)
      })
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Pokédex</Text>
      </View>
      <View style={styles.pokemonList}>
        <ScrollView>
          {pokemonList.map((pokemon, i) => {
            return(
              <TouchableHighlight key={i} onPress={() => { console.log('tapped') }} underlayColor="lightblue">
                <View style={styles.item}>
                  <Text style={styles.h2}>{pokemon.name}</Text>
                </View>
              </TouchableHighlight>
            )
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 30,
    flex: 2,
    backgroundColor: '#ee1515',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 5
  },
  h1: {
    fontSize: 50
  },
  pokemonList: {
    width: '100%',
    flex: 8
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1
  }
});
