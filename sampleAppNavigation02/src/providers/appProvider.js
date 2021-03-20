import React, {createContext, useContext, useEffect, useState} from 'react';

const AppContext = createContext();

/**
 * 共有するデータやメソッドを定義
 * @returns
 */
export const AppProvider = props => {
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider
      value={{
        count,
        setCount,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

/**
 * 共通するデータやメソッドを取得する
 * @returns
 */
export const useAppService = () => {
  return useContext(AppContext);
};
