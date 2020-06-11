import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function PokemonDetails(props) {
  const { route } = props;
  const { params } = route;

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(params.pokemon.url)
      .then(res => res.json())
      .then(data => {
        setPokemon(data)
      })
  }, [])

  return(
    <View style={styles.container}>
      { pokemon.name ? (
        <>
          <Image style={styles.image} source={{ uri: pokemon.sprites.front_default}}/>
          <Text style={styles.h1}>{pokemon.name}</Text>
          <Text style={styles.text}>Weight: {pokemon.weight}</Text>
        </>
        ) :
        <Text>Loading...</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 300,
    width: 300
  },
  h1: {
    fontSize: 50
  },
  text: {
    fontSize: 25
  }
})

export default PokemonDetails