# View や Text コンポーネントを組み合わせてリスト出力

## useState や props でデータを作成

```
  const [message, setMessage] = useState('');
  const [cardList, setCardList] = useState([]);
```

基本的に固定値でも良いがロジック上可変した値を出すことが多いため`useState`を利用

## map で記載する

```
        {cardList.map((card) => {
          return (
            <View style={styles.box}>
              <View style={styles.nameAndTime}>
                <Text style={styles.name}>{card.name}</Text>
                <Text style={styles.time}>{card.time}</Text>
              </View>
              <Text>{card.message}</Text>
            </View>
          );
        })}
```

`forEach`などでも良いがたぶん`map`の方がスマートにかける
`return`文を省略する記法もあるが可読性を考慮して記載する

`map`内は別途コンポーネントを作成して props で渡しても良い
