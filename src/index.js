import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // Включение строгого режима React
  <React.StrictMode>
    {/* Предоставление хранилища Redux для всего приложения */}
    <Provider store={store}>
      {/* Оборачивание приложения в BrowserRouter для поддержки маршрутизации */}
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        {/* Оборачивание приложения в PersistGate для обеспечения сохранения состояния */}
        <PersistGate persistor={persistor}>
          {/* Рендеринг компонента App */}
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
