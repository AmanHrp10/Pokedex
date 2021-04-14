import axios from 'axios';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as action from '../../redux/action';
import {BackArrow, FavouriteInactive} from '../../assets';
import {Button, Gap} from '../../components';
import {
  DetailAbout,
  DetailBase,
  Evolution,
  Moves,
} from '../../components/molecules/detail';
import {fonts} from '../../utils';

const DetailItem = ({navigation, route}) => {
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(true);
  const [power, setPower] = useState([]);
  // const [gender, setGender] = useState('');
  const [groups, setGroups] = useState([]);
  const [cycle, setCycle] = useState('');
  let [hide, setHide] = useState('none');
  let [isActive, setIsActive] = useState('About');

  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  console.log('State: ', favorites);

  const getPokemon = async () => {
    const id = [[1, 2, 3]];
    try {
      setLoading(true);
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${route.params.pokemon}`,
      );
      const getPower = await axios.get(
        `https://pokeapi.co/api/v2/berry/${route.params.id}`,
      );
      // const getGender = await axios.get(
      //   `https://pokeapi.co/api/v2/gender/${}`,
      // );
      const getGroups = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${route.params.id}`,
      );

      setCycle(getGroups.data.evolves_from_species);
      setGroups(getGroups.data.egg_groups);
      // setGender(getGender.data.name);
      setPower(getPower.data.natural_gift_type.name);
      setDetail(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPokemon();
  }, []);
  return loading ? null : (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackArrow />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => dispatch(action.addFavorite(detail))}>
              <FavouriteInactive />
            </TouchableOpacity>
          </View>
          <View style={styles.pokeTitle}>
            <View style={styles.pokeName1}>
              <Text style={styles.pokeName}>{detail.name}</Text>
              <View style={styles.pokeAbilityWrapper}>
                {detail.abilities.slice(0, 2).map((data, index) => (
                  <Text key={index} style={styles.pokeAbility}>
                    {data.ability.name}
                  </Text>
                ))}
              </View>
            </View>
            <Text style={styles.pokeColor}>#004</Text>
          </View>
          <View style={styles.pokeImage}>
            <Image
              source={{
                uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${detail.name}.png`,
              }}
              style={{width: 350, height: 350}}
            />
          </View>
          <View style={styles.pokeDescription} />
          <View>
            <View style={styles.pokeListPowers}>
              <TouchableOpacity onPress={() => setIsActive('About')}>
                <Text
                  style={
                    isActive === 'About'
                      ? styles.pokeListPowerActive
                      : styles.pokeListPower
                  }>
                  About
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsActive('Base Stats')}>
                <Text
                  style={
                    isActive === 'Base Stats'
                      ? styles.pokeListPowerActive
                      : styles.pokeListPower
                  }>
                  Base Stats
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsActive('Evolution')}>
                <Text
                  style={
                    isActive === 'Evolution'
                      ? styles.pokeListPowerActive
                      : styles.pokeListPower
                  }>
                  Evolution
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsActive('Moves')}>
                <Text
                  style={
                    isActive === 'Moves'
                      ? styles.pokeListPowerActive
                      : styles.pokeListPower
                  }>
                  Moves
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: -480,
                paddingHorizontal: 15,
              }}>
              {isActive === 'About' && (
                <DetailAbout
                  name={detail.name}
                  height={detail.height}
                  weight={detail.weight}
                  ability={detail.abilities.map(
                    (data) => `${data.ability.name}, `,
                  )}
                  gender="male"
                  groups={
                    groups.length == 0
                      ? ''
                      : groups.map((data) => `${data.name}, `)
                  }
                  cycle
                />
              )}

              {isActive === 'Base Stats' && <DetailBase />}
              {isActive === 'Evolution' && <Evolution />}
              {isActive === 'Moves' && <Moves />}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#98ddca',
    flex: 1,
  },
  imgWrapper: {
    backgroundColor: '#F2F3F2',
    padding: 20,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#fff',
  },
  wrapper: {
    padding: 20,
  },
  pokeTitle: {
    color: '#fff',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  pokeName: {
    fontFamily: fonts.primary[700],
    fontSize: 28,
    color: '#fff',
  },
  pokeAbility: {
    backgroundColor: '#98ddca',
    borderRadius: 10,
    width: 80,
    paddingVertical: 5,
    paddingHorizontal: 6,
    marginRight: 5,
    fontSize: 12,
  },
  pokeAbilityWrapper: {
    flexDirection: 'row',
  },

  pokeColor: {
    marginTop: 20,
    fontFamily: fonts.primary[700],
    fontSize: 14,
    color: '#fff',
  },
  pokeImage: {
    marginTop: -5,
  },
  pokeDescription: {
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 600,
    marginTop: -120,
    zIndex: -1,
  },

  pokeListPowers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: -530,
  },
  pokeListPowerActive: {
    color: '#000',
    fontFamily: fonts.primary[600],
    fontSize: 12,
  },
  pokeListPower: {
    color: '#777',
    fontFamily: fonts.primary[600],
    fontSize: 12,
  },
  img: {
    width: 320,
    height: 200,
    marginVertical: 20,
  },
  detail: {
    paddingHorizontal: 20,
  },
  label: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  titleItem: {
    color: '#181725',
    fontSize: 20,
    fontFamily: fonts.primary[600],
  },
  unit: {
    color: '#7C7C7C',
    fontSize: 16,
    fontFamily: fonts.primary[600],
    lineHeight: 20,
  },
  unitWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sum: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberWrapper: {
    width: 45,
    height: 45,
    borderColor: '#E2E2E2',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 17,
  },
  number: {
    color: '#7C7C7C',
    fontSize: 16,
    fontFamily: fonts.primary[700],
  },
  price: {
    color: '#181725',
    fontSize: 24,
    fontFamily: fonts.primary[700],
  },
  detailsWrapper: {
    padding: 20,
  },
  itemDetail: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.primary[600],
    color: '#181725',
    fontSize: 16,
    flex: 2,
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 13,
    color: '#7C7C7C',
    textAlign: 'justify',
  },
  nutritionUnit: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sumNutritions: {
    marginRight: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#EBEBEB',
    color: '#7C7C7C',
    borderRadius: 5,
  },
  rating: {
    flexDirection: 'row',
    marginRight: 20,
  },
  button: {
    position: 'absolute',
    width: '100%',
    padding: 20,
    bottom: 0,
  },
});
