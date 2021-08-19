import React from 'react';
import { Provider } from 'react-redux';
import Store from './redux/store'
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Provider store={Store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;