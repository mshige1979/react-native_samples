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
| 2 | [sampleApp02](https://github.com/mshige1979/react-native_samples/tree/main/sampleApp02) | TextInputとTextでstateの変化を検知 | OK |
| 3 | [sampleApp03](https://github.com/mshige1979/react-native_samples/tree/main/sampleApp03) | ViewやTextを組み合わせて１つのコンポーネントを作成あとpropsについて | OK |
| 4 | [sampleApp04](https://github.com/mshige1979/react-native_samples/tree/main/sampleApp04) | 親コンポーネントで定義したstateを子コンポーネントで変動させる | OK |
| 5 | [sampleApp05](https://github.com/mshige1979/react-native_samples/tree/main/sampleApp05) | 子要素を設定できるコンポーネントを作成 | OK |
| 6 | [sampleApp06](https://github.com/mshige1979/react-native_samples/tree/main/sampleApp06) | ViewやTextコンポーネントを組み合わせてリスト出力| OK |
| 7 | [sampleApp07](https://github.com/mshige1979/react-native_samples/tree/main/sampleApp07) | FlatList出力| OK |
| 8 | [sampleApp08](https://github.com/mshige1979/react-native_samples/tree/main/sampleApp08) | ScrollView縦スクロール| OK |
| 9 | [sampleApp09](https://github.com/mshige1979/react-native_samples/tree/main/sampleApp09) | ScrollView、　FlatList横スクロール| OK |
| 10 | [sampleApp10](https://github.com/mshige1979/react-native_samples/tree/main/sampleApp10) | contextAPI| OK |
| 11 | [sampleApp11](https://github.com/mshige1979/react-native_samples/tree/main/sampleApp11) | react-navigationによる簡易画面遷移| OK |
| 12 | [sampleApp12](https://github.com/mshige1979/react-native_samples/tree/main/sampleApp12) | ログイン画面 | OK |
| 13 | [sampleApp13](https://github.com/mshige1979/react-native_samples/tree/main/sampleApp13) | 画面引っぱってロードするやつ | OK |
| 14 | [sampleApp14](https://github.com/mshige1979/react-native_samples/tree/main/sampleApp14) | モーダル画面 | OK |
| 15 | [sampleApp15](https://github.com/mshige1979/react-native_samples/tree/main/sampleApp15) | state値でstyleの位置を変化させる | OK |
| 16 | [sampleApp16](https://github.com/mshige1979/react-native_samples/tree/main/sampleApp16) | アニメーションサンプル| OK |
| - | sampleAppNN | (未作成)スプラッシュ画面| |

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
