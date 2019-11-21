import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import { PersistGate } from 'redux-persist/integration/react'
import SingleInput from './Components/SingleInput'
import { store, persistor } from './Components/SingleInput/store';

function App() {
  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <SingleInput />
      </PersistGate>
    </Provider>
  );
}

export default App;
