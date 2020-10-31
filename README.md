# react-native_samples

## 説明
react-nativeのサンプルコード集
いろいろ試したやつを記載する
サブディレクトリにディレクトリ単位に追記
ブランチにするのはめんどいのでしない

## 補足
各ディレクトリ配下でパッケージとか追加していると思うのでgit clone後はパッケージをの更新を行い
ローカル側のnode_modulesとかを更新する

たぶん、コレを実行するとかカナ・・・
```
yarn
cd ios
pod install
```

## 起動方法
### android
ターミナルで以下を実行
```
npx react-native run-android
```
※エミュレータは起動指定れば良い、実機はUSBデバッグ状態でusbに接続していればOK

### ios
#### シミュレータ用
```
npx react-native run-ios
```
#### 実機
```
cd ios
pod install
Bundle Idenifierにdeveloperアカウントを選択（apple developer account必須）
プロジェクト名.xcworkspaceを開き、実機を選択して実行
```

## サンプル集
| No | App名 | 説明 |
| :--: | :- | :-- |
| 1 | sampleApp01 | hello, world |
| 2 | sampleApp02 | TextInputとTextでstateの変化を検知 |
| 3 | sampleApp03 | ViewやTextを組み合わせて１つのコンポーネントを作成あとpropsについて |
| 4 | sampleApp04 | (未作成)親コンポーネントで定義したstateを子コンポーネントで変動させる |
| 5 | sampleApp05 | (未作成)子要素の出力するコンポーネントを作成 |
| 6 | sampleApp06 | (未作成)useEffectを利用した副作用フック |
| 7 | sampleApp07 | (未作成)AsyncStorageの動作確認|
| 8 | sampleApp08 | (未作成)リスト出力|
| 9 | sampleApp09 | (未作成)axiosを利用してAPIと通信|
| 10 | sampleApp10 | (未作成)React Navigation(Stack)|
| 11 | sampleApp11 | (未作成)React Navigation(Tab)|
| 12 | sampleApp12 | (未作成)React Navigation(Tab+Stack)|
| 13 | sampleApp13 | (未作成)React Navigation(Drawer)|
| 14 | sampleApp14 | (未作成)React Navigation(Drawer)レイアウトカスタマイズ|
| 15 | sampleApp15 | (未作成)React Navigation(Tab+Stack+Drawer)|
| 16 | sampleApp16 | (未作成)Google maps|
| 17 | sampleApp17 | (未作成)Google maps(marker v1)|
| 18 | sampleApp18 | (未作成)Google maps(marker v2)独自マーカー作成|
| 19 | sampleApp19 | (未作成)Google maps(marker v3)独自吹き出し作成|
| 20 | sampleApp20 | (未作成)react-native-snap-carousel|
| 21 | sampleApp21 | (未作成)スマホの向きを固定|
| 22 | sampleApp22 | (未作成)スプラッシュ画面|
| 23 | sampleApp23 | (未作成)ログイン画面|

## サンプル集
| No | App名 | 説明 |
| :--: | :- | :-- |
| 1 | demoApp01 | (未作成)TODOリストアプリ|
| 2 | demoApp02 | (未作成)天気予報アプリ|
| 3 | demoApp03 | (未作成)ニュースアプリ|



## VSCode拡張機能
- Material Icon Theme
- Path Autocomplete
- Path Intellisense
- Prettier - Code formatter
- React Native Snippet
- Japanese Language Pack for Visual Studio Code
