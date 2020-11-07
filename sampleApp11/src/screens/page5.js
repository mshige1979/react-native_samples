import React from 'react';
import {View, Text, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Page5 = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Page5</Text>
    </View>
  );
};

export default Page5;
