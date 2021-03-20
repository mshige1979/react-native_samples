# react-native-config で.env に記載されている内容を読み込む

## 手順

### アプリ作成

```
npx react-native init sampleConfig01
```

### ディレクトリ移動

```
cd sampleConfig01
```

### インストール

```
yarn add react-native-config
```

### pod install

```
npx pod-install
```

### android 手動設定

#### android/settings.gradle に追加

```
// react-native-config用追加
include ':react-native-config'
project(':react-native-config').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-config/android')
```

#### android/app/build.gradle に react-native-config を追加

```
dependencies {
    implementation fileTree(dir: "libs", include: ["*.jar"])
    //noinspection GradleDynamicVersion
    implementation "com.facebook.react:react-native:+"  // From node_modules

    // react-native-condig用追加
    implementation project(':react-native-config')

・
・
・
}
```

#### android/app/build.gradle に.env ファイルを読み込む設定を追加

```
project.ext.envConfigFiles = [
    debug: ".env",
    dev: ".env.dev",
    stg: ".env.staging",
    prd: ".env.production",
    anycustombuildlowercase: ".env",
]
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```

これは２行目くらいに挿入する

### ios 手動設定

#### node_modules 配下の react-native-condig よりプロジェクトを紐付け

#### project の pod 配下にある、react-native-config.a モジュールを紐付け
