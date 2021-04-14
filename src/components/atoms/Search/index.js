import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {IconSearch} from '../../../assets';
import {fonts} from '../../../utils';

const Search = () => {
  return (
    <View style={styles.container}>
      <IconSearch />
      <TextInput style={styles.input} placeholder="Search Store" />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  input: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: '#181725',
    paddingTop: 15,
    width: '100%',
    marginLeft: 10,
  },
});
