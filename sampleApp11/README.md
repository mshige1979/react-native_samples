# react-navigation

## install

```
cd sampleApp11
yarn add @react-navigation/native
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
yarn add @react-navigation/stack
yarn add @react-navigation/drawer
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/material-bottom-tabs react-native-paper
yarn add @react-navigation/material-top-tabs react-native-tab-view
```

## 使い方(今回は stack)

### 画面用のコンポーネントを作成する

```home.js
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
```

### 複数の画面を組み合わせて stack コンポーネントを作成する

```
const TopStack = createStackNavigator();
const TopStackScreen = () => {
  return (
    <TopStack.Navigator>
      <TopStack.Screen name="Home" component={Home} />
      <TopStack.Screen name="Page1" component={Page1} />
      <TopStack.Screen name="Page2" component={Page2} />
    </TopStack.Navigator>
  );
};
```

### navigation 設定

```
const App = () => {
  return (
    <NavigationContainer>
      <TopStackScreen />
    </NavigationContainer>
  );
};
```
