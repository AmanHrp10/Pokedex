import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils';

const TitleCategory = ({title}) => {
  return (
    <View style={styles.category}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.all}>See All</Text>
    </View>
  );
};

export default TitleCategory;

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#181725',
    fontSize: 20,
    fontFamily: fonts.primary[600],
  },
  all: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: '#53B175',
  },
});
