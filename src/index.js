import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { theme } from './theme';
// import { ThemeProvider } from '@emotion/react';
import { App } from './components/App/App.jsx';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>
);
