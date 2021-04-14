import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fonts} from '../../../utils';

const CardCategory = ({img, label, color, borderColor}) => {
  return (
    <TouchableOpacity style={styles.container(color, borderColor)}>
      <Image source={img} style={styles.image} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CardCategory;

const styles = StyleSheet.create({
  container: (color, borderColor) => ({
    width: '48%',
    height: '32%',
    backgroundColor: color,
    borderRadius: 18,
    borderColor: borderColor,
    borderWidth: 1,
    marginBottom: 15,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  }),
  image: {
    width: '100%',
    height: '50%',
  },
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    textAlign: 'center',
  },
});
