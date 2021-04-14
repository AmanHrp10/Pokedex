import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {fonts} from '../../../utils/fonts';

const InputText = ({label}) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  text: {
    color: '#7C7C7C',
    fontSize: 16,
    fontFamily: fonts.primary[400],
  },
  input: {
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: '#181725',
    paddingHorizontal: 0,
    paddingVertical: 3,
  },
});
