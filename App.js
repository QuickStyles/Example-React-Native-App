import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './Header';
import PokemonList from './PokemonList';

const POKEMON_API_ENDPOINT = `https://pokeapi.co/api/v2/`;
const FIRST_100_QUERY = `pokemon?limit=100`;

const Stack = createStackNavigator();

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(`${POKEMON_API_ENDPOINT}${FIRST_100_QUERY}`)
      .then(res => res.json())
      .then(payload => {
        console.log(payload)
        setPokemonList(payload.results)
      })
  }, [])

  return (
    <NavigationContainer>
      <Header/>
      <View style={styles.body}>
        <Stack.Navigator
          screenOptions={
            {
              headerShown: false
            }
          }
        >
          <Stack.Screen
            name="Pokemon List"
            children={() => {
              return <PokemonList list={pokemonList}/>
            }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
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
