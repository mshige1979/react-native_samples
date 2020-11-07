import React from 'react';
import {View, Text, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Page3 = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Page3</Text>
    </View>
  );
};

export default Page3;
