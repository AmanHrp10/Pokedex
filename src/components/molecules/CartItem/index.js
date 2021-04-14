import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fonts} from '../../../utils';

const CartItem = ({name, power, photo, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.pokeWrapper}>
        <View style={styles.pokeDesc}>
          <Text style={styles.pokeName}>{name}</Text>
          <View style={styles.pokePower} />
          <Text>{power}</Text>
        </View>
        <View style={styles.pokeImage}>
          <Image
            source={{uri: photo}}
            alt="Pokemon-Image"
            style={{width: 140, height: 80, marginRight: -20}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingHorizontal: 20,
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 5,
    margin: 5,
  },
  pokeWrapper: {
    justifyContent: 'space-around',
  },
  pokeImage: {
    paddingRight: -20,
  },
  pokeName: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: '#fff',
  },
  img: {
    width: '100%',
    height: '60%',
    flex: 1,
  },
  detail: {
    flex: 3,
    marginLeft: 30,
  },
  item: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 16,
    color: '#181725',
    lineHeight: 18,
  },
  unit: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: '#7C7C7C',
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    fontFamily: fonts.primary[600],
    paddingHorizontal: 10,
    fontSize: 16,
  },
  total: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
  },
});
