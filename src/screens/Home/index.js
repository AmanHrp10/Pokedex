import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {IconMenu} from '../../assets';
import {Button, CartItem} from '../../components';
import Gap from '../../components/atoms/Gap/index';
import {fonts} from '../../utils';

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [power, setPower] = useState([]);

  const getData = async () => {
    try {
      setLoading(true);
      const listPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      setData(listPokemon.data.results);

      let id = listPokemon.data.results
        .map((data) => data.url.split('/')[6])
        .map((id) => parseInt(id));

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const RenderItem = ({item}) => {
    <CartItem title={item.name} power={item} />;
  };

  useEffect(() => {
    getData();
  }, []);

  console.log('Data: ', data);
  console.log('Power: ', power);
  return loading ? null : (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Gap height={20} />
      <View style={styles.banner}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Favourite')}>
            <IconMenu />
          </TouchableOpacity>
        </View>
        <Text>
          <Text style={styles.titleHeader}>Pokedex</Text>
        </Text>
      </View>
      <ScrollView style={styles} showsVerticalScrollIndicator={false}>
        {/* <Search /> */}
        <View style={styles.container}>
          {data &&
            data.map((pokemon, index) => (
              <CartItem
                onPress={() =>
                  navigation.navigate('DetailItem', {
                    pokemon: pokemon.name,
                    id: index + 1,
                  })
                }
                key={index}
                name={pokemon.name}
                photo={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 2,
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  titleHeader: {
    fontSize: 24,
    fontFamily: fonts.primary[700],
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  banner: {
    width: '90%',
    height: '10%',
    alignSelf: 'center',
    borderRadius: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
