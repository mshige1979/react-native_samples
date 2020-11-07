import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import {useAuth} from '../contexts/authContext';

const TopScreen = () => {
  const {signOut} = useAuth();
  return (
    <View>
      <Text>TOPページ</Text>
      <Button
        title="ログアウト"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

export default TopScreen;
