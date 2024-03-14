import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import RootNavigation from './src/components/Navigation/RootNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
