import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  IconAbout,
  IconDelivery,
  IconHelp,
  IconMyDetail,
  IconNotification,
  IconOrders,
  IconPayment,
  IconPensil,
  IconPromo,
  Profil,
} from '../../assets';
import {AccountItem, Button, Gap} from '../../components';
import {fonts} from '../../utils';

const Account = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.profil}>
        <Image source={Profil} style={styles.img} />
        <View style={styles.username}>
          <View style={styles.nameWrapper}>
            <Text style={styles.name}>John Doe</Text>
            <TouchableOpacity>
              <IconPensil />
            </TouchableOpacity>
          </View>
          <Text style={styles.email}>johndoe@gmail.com</Text>
        </View>
      </View>
      <View>
        <AccountItem img={<IconOrders />} label="Orders" />
        <AccountItem img={<IconMyDetail />} label="My Details" />
        <AccountItem img={<IconDelivery />} label="Delivery Address" />
        <AccountItem img={<IconPayment />} label="Payment Methods" />
        <AccountItem img={<IconPromo />} label="Promo Cards" />
        <AccountItem img={<IconNotification />} label="Notifications" />
        <AccountItem img={<IconHelp />} label="Help" />
        <AccountItem img={<IconAbout />} label="About" />
      </View>
      <Gap height={20} />
      <View style={styles.button}>
        <Button label="Logout" type="secondary" />
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  profil: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  img: {
    height: 64,
    width: 64,
    borderRadius: 50,
    marginRight: 20,
  },
  username: {
    flex: 3,
  },
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.primary[700],
    fontSize: 20,
    color: '#181725',
    marginRight: 10,
    lineHeight: 25,
  },
  email: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: '#7C7C7C',
    lineHeight: 20,
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
