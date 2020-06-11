import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

function PokemonDetails({ navigation, route }) {
  const [pokemon, setPokemon] = useState({});
  const [currentSprite, setCurrentSprite] = useState(0);
  const url = route.params.pokemon.url

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(payload => {
        setPokemon(payload);
      })
  }, [])

  function updateDisplaySprite(direction) {
    if (direction === 'left') {
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

  const displayPicture = pokemon.sprites ? (
    <View style={styles.imageContainer}>
      <Button
        title='👈'
        onPress={() => updateDisplaySprite('left')}
      />
      <Image
        style={styles.image}
        source={{
          uri: pokemon.sprites[Object.keys(pokemon.sprites)[currentSprite]] || '#'
        }}
      />
      <Button
        title='👉'
        onPress={() => updateDisplaySprite('right')}
      />
    </View>
  ) : null
  return(
    <View style={styles.container}>
      {displayPicture}
      <View style={styles.informationContainer}>
        <Text style={styles.name}>{pokemon.name}</Text>
        <Text style={styles.infoBox}>Weight: {pokemon.weight}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  informationContainer: {
    flex: 5,
    alignItems: 'center'
  },
  name: {
    paddingTop: 20,
    fontSize: 40
  },
  imageContainer: {
    flexDirection: 'row',
    flex: 2,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width:300,
    height:300
  },
})

export default PokemonDetails