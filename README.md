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
プロジェクト名.xcworkspaceを開き、実機を選択して実行
```

## サンプル集
| No | App名 | 説明 |
| :--: | :- | :-- |
| 1 | sampleApp01 | hello, world |
| 2 | sampleApp02 | TextInputとTextでstateの変化を検知 |
| 3 | sampleApp03 | ViewやTextを組み合わせて１つのコンポーネントを作成 |


## VSCode拡張機能
- Material Icon Theme
- Path Autocomplete
- Path Intellisense
- Prettier - Code formatter
- React Native Snippet
- Japanese Language Pack for Visual Studio Code
