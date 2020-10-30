# View や Text を組み合わせて１つのコンポーネントを作成

## コンポーネント定義

```
const Child = (props) => {
  return (
    <View style={[styles.container]}>
      <Text>子コンポーネント</Text>
      <Text>{props.name}</Text>
      <Text>{props.age}</Text>
      {/* 孫コンポーネントを追加 */}
      <GrandChild {...props} />
    </View>
  );
};
```

コンポーネントの作成方法は`functionコンポーネント`と`classコンポーネント`とあるが今回は`functionコンポーネント`で作成

基本的には`function`や`class`のオブジェクトを作成することで対応可能。  
※`classコンポーネント`時は`Component`クラスを継承する必要あり

## 呼び出し方

### 1. import を行う

```
// 子コンポーネントをインポート
import Child from './src/screens/child';
```

### 2. 呼び出し側で定義

```
        {/* 子コンポーネントを定義 */}
        <Child name={name} age={age} />
```

## props とは？

```
const Child = (props) => {
```

とか

```
      {/* 孫コンポーネントを追加 */}
      <GrandChild {...props} />
```

やつ

コンポーネントはそれぞれが独立しているため、親から渡された値を利用したいケースがあります。  
その際にどこかのキャッシュにとる場合は値の受け渡しが多少面倒な状況になります。

`<Child name={name} age={age} />`のように属性と値を子コンポーネントへ定義することで子コンポーネントで利用することが可能となります。

`props`には親から継承された値が全て入っているため、
`props.name`のような定義をすることで参照が可能になります。

### 注意

値の伝搬はできるが、更新はできない  
値の更新を行う場合は別途対応が必要になる。  
props では基本参照のみと考えておく方が良い

### で`{...props}`何してんの？

孫コンポーネントを呼び出す際に

```
      {/* 孫コンポーネントを追加 */}
      <GrandChild {...props} />
```

としています。
コレは何かというと

props 内の項目の展開をしています。
親で

```
        {/* 子コンポーネントを定義 */}
        <Child name={name} age={age} />
```

とすることで`name`と`age`を渡しています。  
コレをそのまま孫まで継承させたい場合に

```
        {/* 孫コンポーネントを定義 */}
        <GrandChild name={name} age={age} />
```

とするのがめんどくさいので
`...props`とすることで内部のオブジェクトを展開しています。

確か、スプレッド構文だったはず
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax
