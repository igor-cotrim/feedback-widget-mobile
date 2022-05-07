import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import { Copyright } from '../Copyright';
import successImg from '../../assets/success.png'

import { styles } from './styles';

export const Success = () => {
  return (
    <View style={styles.container}>
      <Image
        source={successImg}
        style={styles.image}
      />
      <Text style={styles.title}>
        Agradecemos o feedback
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>
          Quero enviar outro
        </Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
}