# 横スクロール
## ScrollView
### `horizontal={true}` で設定可能
### 例
```
          <ScrollView horizontal={true} ref={_scrollViewRef}>
            {list.map((item, index) => {
              return (
                <View key={index} style={styles.card}>
                  <Text>{item.name}</Text>
                </View>
              );
            })}
          </ScrollView>
```

## FlatList
### horizontal={true}で設定可能
### 例
```
          <FlatList
            data={list}
            renderItem={({item, index}) => {
              return (
                <TouchableHighlight
                  onPress={() => {
                    alert(item.name);
                  }}>
                  <View key={index} style={styles.card}>
                    <Text>名前: {item.name}</Text>
                    <Text>年齢: {item.age}</Text>
                    <Text>備考: {item.description}</Text>
                  </View>
                </TouchableHighlight>
              );
            }}
            horizontal={true}
            ref={_flatListRef}
            keyExtractor={(item, index) => String(index)}
          />

```

## refについて
設定することで参照情報を保持できるため、ボタン押下などでスクロールバーの位置を変えたりすることができる
### 準備としてuseRefを設定
```
  const _scrollViewRef = useRef(null);
  const _flatListRef = useRef(null);
```

### コンポーネントへ設定
```
<ScrollView horizontal={true} ref={_scrollViewRef}>
```

### アクセス
```
// スクロール最左端へ移動
_scrollViewRef.current.scrollTo({y: 0});
```
