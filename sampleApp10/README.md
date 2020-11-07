# ContextAPI

## props を利用しない値の伝搬

共通ので使い回す値を props で伝搬するといちいち子コンポーネントへ設定するのは手間となる
その考慮として ContextAPI を利用する

## 基本的にはオブジェクトでも値でも伝搬可能

`useState`で生成した getter、setter などのメソッドの渡すことも可能

## FlatList などのリストごとの値は props で対応

使用するのは共通のオブジェクトで子コンポーネント単位の個別の値の使い回しは props で制御する

## 使用方法

### 1. createContext で定義

```
const CommonContext = React.createContext();
```

### 2. 管理するオブジェクトを作成

```
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const contextValue = {
    name,
    setName,
  };
```

### 3.impport する

```
mport {CommonContext} from './src/contexts/commonContext';
```

### 4. プロバイダとして挟む

```
    <CommonContext.Provider value={contextValue}>
       ・・・
    </CommonContext.Provider>

```

### 5. 子コンポーネントで使用する

```
  const {name, setName} = useContext(CommonContext);

```
