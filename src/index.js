import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import store from './redux/configureStore';
=======
import App from './components/App';
import reportWebVitals from './reportWebVitals';
>>>>>>> 57daad16aa2126a1c72e487de9f6dc62b748b257

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <Provider store={store}>
        <App />
      </Provider>
=======
      <App />
>>>>>>> 57daad16aa2126a1c72e487de9f6dc62b748b257
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
