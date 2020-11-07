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
| No | App名 | 説明 | 作成 | 
| :--: | :- | :-- | :--: 
| 1 | [sampleApp01](https://github.com/mshige1979/react-native_samples/tree/main/sampleApp01) | hello, world | OK | 
| 2 | sampleApp02 | TextInputとTextでstateの変化を検知 | OK |
| 3 | sampleApp03 | ViewやTextを組み合わせて１つのコンポーネントを作成あとpropsについて | OK |
| 4 | sampleApp04 | 親コンポーネントで定義したstateを子コンポーネントで変動させる | OK |
| 5 | sampleApp05 | 子要素を設定できるコンポーネントを作成 | OK |
| 6 | sampleApp06 | ViewやTextコンポーネントを組み合わせてリスト出力| OK |
| 7 | sampleApp07 | FlatList出力| OK |
| 8 | sampleApp08 | ScrollView縦スクロール| OK |
| 9 | sampleApp09 | ScrollView、　FlatList横スクロール| OK |
| 10 | sampleApp11 | (未作成)contextAPI| |
| 11 | sampleApp12 | (未作成)react-navigationによる簡易画面遷移| |
| 12 | sampleApp13 | (未作成)ログイン画面| |
| 13 | sampleApp14 | (未作成)スプラッシュ画面| |

## 外部ライブラリ関連
| No | App名 | 説明 |
| :--: | :- | :-- |
| 1 | sampleLib01 | (未作成)AsyncStorageの動作確認|
| 2 | sampleLib02 | (未作成)axiosを利用してAPIと通信|
| 3 | sampleLib03 | (未作成)React Navigation(Stack)|
| 4 | sampleLib04 | (未作成)React Navigation(Tab)|
| 5 | sampleLib05 | (未作成)React Navigation(Tab+Stack)|
| 6 | sampleLib06 | (未作成)React Navigation(Drawer)|
| 7 | sampleLib07 | (未作成)React Navigation(Drawer)レイアウトカスタマイズ|
| 8 | sampleLib08 | (未作成)React Navigation(Tab+Stack+Drawer)|
| 9 | sampleLib09 | (未作成)Google maps|
| 10 | sampleLib10 | (未作成)Google maps(marker v1)|
| 11 | sampleLib11 | (未作成)Google maps(marker v2)独自マーカー作成|
| 12 | sampleLib12 | (未作成)Google maps(marker v3)独自吹き出し作成|
| 13 | sampleLib13 | (未作成)react-native-snap-carousel|
| 14 | sampleLib14 | (未作成)スマホの向きを固定|

## デモアプリ集
| No | App名 | 説明 |
| :--: | :- | :-- |
| 1 | sampleDemo01 | (未作成)TODOリストアプリ|
| 2 | sampleDemo02 | (未作成)天気予報アプリ|
| 3 | sampleDemo03 | (未作成)ニュースアプリ|

## VSCode拡張機能
- Material Icon Theme
- Path Autocomplete
- Path Intellisense
- Prettier - Code formatter
- React Native Snippet
- Japanese Language Pack for Visual Studio Code

ssss
