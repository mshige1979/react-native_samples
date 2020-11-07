import React from 'react';
import {View, Text, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Page4 = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Page4</Text>
    </View>
  );
};

export default Page4;
