import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import { store } from './Components/SingleInput/store';
import SingleInput from './Components/SingleInput'

function App() {
  return (
    <Provider store={ store }>
      <SingleInput />
    </Provider>
  );
}

export default App;
