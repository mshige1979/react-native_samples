# 親コンポーネントで定義した state を子コンポーネントで変動させる

## state のオブジェクトを子コンポーネントへ渡す際は props 経由となる

```
        {/** 子コンポーネント */}
        <Child name={name} age={age} setName={setName} setAge={setAge} />

```

のように`set`系の props を渡すことで対応は可能  
この懸念点としては孫のように深い階層まで props を経由させてあげる必要があり、props の管理が結構面倒になる。

この問題は`redux`や`unstated`の外部ライブラリで対応できるが、React の`ContextAPI`でも対応が可能のよう
