import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Melon, RightArrow} from '../../../assets';
import {fonts} from '../../../utils';

const FavItem = ({image, name}) => {
  return (
    <View style={styles.main}>
      <Image source={image} style={styles.img} />
      <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </View>
  );
};

export default FavItem;

const styles = StyleSheet.create({
  main: {
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  img: {
    width: '100%',
    height: '100%',
    flex: 2,
  },
  item: {
    flex: 4,
    marginLeft: 30,
    marginBottom: 12,
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 16,
    color: '#181725',
  },
  unit: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: '#7C7C7C',
  },
  priceWrapper: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  price: {
    fontFamily: fonts.primary[700],
    fontSize: 18,
    color: '#181725',
    lineHeight: 25,
    marginRight: 10,
  },
});
