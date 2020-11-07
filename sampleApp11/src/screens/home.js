import React from 'react';
import {View, Text, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Page1へ遷移"
        onPress={() => {
          navigation.push('Page1');
        }}
      />
    </View>
  );
};

export default Home;
