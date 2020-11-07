import React from 'react';
import {View, Text, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Page1 = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Page1</Text>
      <Button
        title="Page2へ遷移"
        onPress={() => {
          navigation.push('Page2');
        }}
      />
    </View>
  );
};

export default Page1;
