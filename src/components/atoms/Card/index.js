import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconAdd} from '../../../assets';
import {fonts} from '../../../utils';
import {useNavigation} from '@react-navigation/native';

const Card = ({img, title, unit, price}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('DetailItem')}>
      <View style={styles.imgWrapper}>
        <Image source={img} style={styles.buah} />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.detail}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.unit}>{unit}</Text>
        </View>

        <View style={styles.priceWrapper}>
          <Text style={styles.price}>${price}</Text>
          <TouchableOpacity>
            <IconAdd />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 248,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    alignItems: 'center',
    padding: 20,
    marginRight: 10,
    marginLeft: 10,
  },

  imgWrapper: {
    width: 100,
    height: 70,
    marginBottom: 30,
  },
  buah: {
    width: '100%',
    height: '100%',
  },
  wrapper: {
    width: '100%',
    justifyContent: 'space-between',
    flex: 1,
  },

  detail: {
    flex: 2,
  },
  title: {
    color: '#181725',
    fontFamily: fonts.primary[600],
    fontSize: 16,
  },
  unit: {
    color: '#7C7C7C',
    fontFamily: fonts.primary[600],
    fontSize: 14,
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: '#181725',
    fontFamily: fonts.primary[700],
    fontSize: 18,
  },
});
