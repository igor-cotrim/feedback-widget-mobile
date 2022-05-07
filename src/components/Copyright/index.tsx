import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export const Copyright = () => {
  return (
    <View>
      <Text style={styles.text}>
        Feito com ♥ por Igor Cotrim
      </Text>
    </View>
  );
}