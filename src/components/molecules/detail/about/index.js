import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {fonts} from '../../../../utils';

const index = ({name, height, weight, ability, gender, groups, cycle}) => {
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.pokeKeyAbout}>
          <Text style={styles.pokeKeyText}>Species</Text>
          <Text style={styles.pokeKeyText}>Height</Text>
          <Text style={styles.pokeKeyText}>Weight</Text>
          <Text style={styles.pokeKeyText}>Abilities</Text>
        </View>
        <View style={styles.pokeValueAbout}>
          <Text style={{fontFamily: fonts.primary[600], marginBottom: 10}}>
            {name}
          </Text>
          <Text style={{fontFamily: fonts.primary[600], marginBottom: 10}}>
            {height}
          </Text>
          <Text style={{fontFamily: fonts.primary[600], marginBottom: 10}}>
            {weight}
          </Text>
          <Text style={{fontFamily: fonts.primary[600], marginBottom: 10}}>
            {ability}
          </Text>
        </View>
      </View>
      <View style={styles.pokeBreading}>
        <Text style={{fontFamily: fonts.primary[600], fontSize: 18}}>
          Breading
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.pokeKeyAbout}>
          <Text style={styles.pokeKeyText}>Gender</Text>
          <Text style={styles.pokeKeyText}>Egg Groups</Text>
          <Text style={styles.pokeKeyText}>Egg Cyrcle</Text>
        </View>
        <View style={styles.pokeValueAbout}>
          <Text style={{fontFamily: fonts.primary[600], marginBottom: 10}}>
            {gender}
          </Text>
          <Text style={{fontFamily: fonts.primary[600], marginBottom: 10}}>
            {groups}
          </Text>
          <Text style={{fontFamily: fonts.primary[600], marginBottom: 10}}>
            {cycle}
          </Text>
        </View>
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  pokeKeyAbout: {
    marginRight: 50,
  },
  pokeKeyText: {
    marginBottom: 15,
  },

  pokeValueAbout: {
    fontFamily: fonts.primary[600],
  },

  pokeBreading: {
    marginVertical: 15,
  },
});
