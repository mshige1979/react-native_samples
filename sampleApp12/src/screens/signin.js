import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import {useAuth} from '../contexts/authContext';

const SiginScreen = () => {
  // 認証用のカスタムフック
  const {signIn} = useAuth();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>認証</Text>
      <View>
        <TextInput value={userId} onChangeText={setUserId} />
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <Button
        title="ログイン"
        onPress={() => {
          signIn(userId, password);
        }}
      />
    </View>
  );
};

export default SiginScreen;
