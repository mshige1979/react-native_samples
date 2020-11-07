import React, {createContext, useContext, useState} from 'react';

// context作成
const AuthContext = createContext();

// AuthProvider
export const AuthProvider = (props) => {
  const [token, setToken] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const signIn = (userId, password) => {
    console.log('signIn');
    console.log(userId, password);
    setToken('aaaa');
    setIsAuth(true);
  };
  const signOut = () => {
    console.log('signOut');
    setToken('');
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        signIn,
        signOut,
        isAuth,
        setIsAuth,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

// カスタムhookとしてuseAuthをexport
export const useAuth = () => {
  return useContext(AuthContext);
};
