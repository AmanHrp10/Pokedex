import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {
  ShopActive,
  ShopInactive,
  FavouriteActive,
  FavouriteInactive,
  AccountActive,
  AccountInactive,
} from '../../../assets';
import {fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Poke List') {
      return active ? <ShopActive /> : <ShopInactive />;
    }
    if (title === 'Favourite') {
      return active ? <FavouriteActive /> : <FavouriteInactive />;
    }
    if (title === 'About') {
      return active ? <AccountActive /> : <AccountInactive />;
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: (active) => ({
    color: active ? '#53B175' : '#777',
    fontFamily: fonts.primary[600],
    fontSize: 12,
  }),
});
