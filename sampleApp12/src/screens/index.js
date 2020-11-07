import React from 'react';

import {useAuth} from '../contexts/authContext';
import TopScreen from './top';
import SiginScreen from './signin';

const IndexScreen = () => {
  const {isAuth} = useAuth();
  return <>{!isAuth ? <SiginScreen /> : <TopScreen />}</>;
};

export default IndexScreen;
