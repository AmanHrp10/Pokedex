import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {fonts} from '../../../utils/fonts';

const Button = ({label, type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'warning' ? '#ffcc29' : '#53B175',
    paddingVertical: 16,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),

  text: (type) => ({
    color: type === 'secondary' ? '#53B175' : '#fff',
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 18,
    marginRight: 10,
  }),
});
