import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const DIRECTION_LEFT = 'left'
const DIRECTION_RIGHT = 'right'
function PokemonDetails(props) {
  const { route } = props;
  const { params } = route;

  const [pokemon, setPokemon] = useState({});
  const [currentSprite, setCurrentSprite] = useState(0);

  useEffect(() => {
    fetch(params.pokemon.url)
      .then(res => res.json())
      .then(data => {
        setPokemon(data)
      })
  }, [])

  function updateDisplaySprite(direction) {
    if (direction === DIRECTION_LEFT) {
      if (currentSprite > 0) {
        setCurrentSprite(currentSprite - 1)
      } else {
        setCurrentSprite(Object.keys(pokemon.sprites).length - 1)
      }
    } else {
      if (currentSprite === Object.keys(pokemon.sprites).length - 1) {
        setCurrentSprite(0)
      } else {
        setCurrentSprite(currentSprite + 1)
      }
    }
  }

  const content = pokemon.name ? (
    <>
      <View style={styles.imageContainer}>
        <Button style={styles.btn} title='👈' onPress={ () => updateDisplaySprite(DIRECTION_LEFT) }/>
        <Image style={styles.image} source={{ uri: pokemon.sprites[Object.keys(pokemon.sprites)[currentSprite]] || '#' }}/>
        <Button style={styles.btn} title='👉' onPress={ () => updateDisplaySprite(DIRECTION_RIGHT) }/>
      </View>
      <Text style={styles.h1}>{pokemon.name}</Text>
      <Text style={styles.text}>Weight: {pokemon.weight}</Text>
    </>
    ) :
    <Text>Loading...</Text>

  return(
    <View style={styles.container}>
      { content }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 300,
    width: 300,
  },
  h1: {
    fontSize: 50,
  },
  text: {
    fontSize: 25
  }
})

export default PokemonDetails