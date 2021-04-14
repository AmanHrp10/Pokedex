import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {BGPoke} from '../../assets';
import {Button, Gap} from '../../components';
import {fonts} from '../../utils/fonts';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={BGPoke} style={styles.main}>
      <View style={{flex: 1}} />
      <View style={styles.content}>
        <Gap height={60} />
        <Text style={styles.welcome}>Welcome to Pokedex</Text>
        <Text style={styles.tagline}>Get your Favorite Pokemon.</Text>
        <Gap height={40} />
        <View style={{width: '100%'}}>
          <Button
            type="warning"
            label="Get Started"
            onPress={() => navigation.navigate('MainApp')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  content: {
    alignItems: 'center',
    flex: 1,
  },
  welcome: {
    color: '#fff',
    fontSize: 42,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    maxWidth: 250,
  },
  tagline: {
    color: '#FCFCFC',
    fontFamily: fonts.primary[400],
    fontSize: 12,
  },
});
