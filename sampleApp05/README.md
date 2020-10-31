# 子要素を設定できるコンポーネントを作成

## `props.children`を使う

以下のようにコンポーネントで`props.children`を設定することで呼び出し元で設定された小要素を展開できる。

この指定がないと、設定していても展開されない[*1]

```
const Child = (props) => {
  return (
    <View style={styles.container}>
      <Text>子コンポーネント</Text>
      <View>{props.children}</View>
    </View>
  );
};
```

[*1]: propより展開されるため、propsを定義しないと使えない

## props にはコンポーネントの受け渡しもできる

任意のコンポーネントを渡せるため、継承のようなことも可能。
