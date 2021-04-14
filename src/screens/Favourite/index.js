import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {FavItem} from '../../components';
import {fonts} from '../../utils';

const Favourite = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  console.log('State: ', favorites);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourite</Text>
      <ScrollView style={styles.items} showsVerticalScrollIndicator={false}>
        {favorites.length == 0 ? (
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Not Data</Text>
          </View>
        ) : (
          favorites.map((data) => (
            <FavItem
              key={data.id}
              image={{
                uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${data.name}.png`,
              }}
              name={data.name}
              id={data.id}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.primary[700],
    fontSize: 18,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  textWrapper: {
    flex: 1,
  },
  text: {
    paddingVertical: 250,
    textAlign: 'center',
    fontSize: 32,
    fontFamily: fonts.primary[600],
    color: '#777',
  },
  items: {
    padding: 20,
    paddingTop: 0,
  },
  button: {
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
});
