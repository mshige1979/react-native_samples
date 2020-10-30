### useState

状態監視用オブジェクトを生成

```
const [text, setText] = useState('');
```

#### state を新規に作成する

`text`で読み込み、`setText`で値の更新を行う。

命名規則などはあまりないが設定用でわかるように定義しておくと良いかも・・・

※↑ のものはサンプルとして text、setText だが value とかでもよい

---

### コンポーネントでの指定

```
<Text style={[styles.text, styles.output]}>{text}</Text>
```

`{`と`}`で挟む

別に１つしか定義するとかではなく
必要な箇所に複数定義しても良い
