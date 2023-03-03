import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { persistor, store } from './redux/store';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
console.log(persistor);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
