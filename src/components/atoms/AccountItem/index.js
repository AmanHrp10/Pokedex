import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconOrders, RightArrow} from '../../../assets';
import {fonts} from '../../../utils';

const AccountItem = ({label, img}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.main}>
        <View style={styles.icon}>{img}</View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.arrow}>
        <RightArrow />
      </View>
    </TouchableOpacity>
  );
};

export default AccountItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 20,
  },
  icon: {
    flex: 1,
  },
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    marginLeft: 20,
    color: '#181725',
    flex: 8,
  },
  arrow: {
    flex: 1,
  },
});
