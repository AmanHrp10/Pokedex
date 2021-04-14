import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fonts} from '../../../utils';

const index = ({active, title}) => {
  if (title == 'About') {
    return active;
  }

  return (
    <>
      <TouchableOpacity onPress={() => alert('Test')}>
        <Text style={styles.pokeListPower}>{title}</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => alert('Test')}>
        <Text style={styles.text}>Base Stats</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Test')}>
        <Text style={styles.text}>Evolution</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Test')}>
        <Text style={styles.text}>Moves</Text>
      </TouchableOpacity> */}
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  pokeListPower: {
    color: '#53B175',
    fontFamily: fonts.primary[600],
    fontSize: 12,
  },
  pokeListPowerActive: {
    fontSize: 14,
  },
});
