import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {fonts} from '../../../../utils/fonts/index';

const index = ({hp, attact, defense, attspeed, defspeed, speed, total}) => {
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.pokeKeyAbout}>
          <Text style={styles.pokeKeyText}>HP</Text>
          <Text style={styles.pokeKeyText}>Attack</Text>
          <Text style={styles.pokeKeyText}>Defense</Text>
          <Text style={styles.pokeKeyText}>At. Speed</Text>
          <Text style={styles.pokeKeyText}>Def. Speed</Text>
          <Text style={styles.pokeKeyText}>Speed</Text>
          <Text style={styles.pokeKeyText}>Total</Text>
        </View>
        <View style={styles.pokeValueAbout}>
          <Text style={{fontFamily: fonts.primary[600], marginBottom: 10}}>
            {hp}
          </Text>
          <Text style={{fontFamily: fonts.primary[600], marginBottom: 10}}>
            {attact}
          </Text>
          <Text style={{fontFamily: fonts.primary[600], marginBottom: 10}}>
            {defense}
          </Text>
          <Text style={{fontFamily: fonts.primary[600], marginBottom: 10}}>
            {attspeed}
          </Text>
          <Text style={{fontFamily: fonts.primary[600], marginBottom: 10}}>
            {defspeed}
          </Text>
          <Text style={{fontFamily: fonts.primary[600], marginBottom: 10}}>
            {speed}
          </Text>
          <Text style={{fontFamily: fonts.primary[600], marginBottom: 10}}>
            {total}
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
});
