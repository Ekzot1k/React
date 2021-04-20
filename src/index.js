import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataSource from './DataSourceJSON/DataSource';


ReactDOM.render(
  <React.StrictMode>
    <App DataSource={DataSource} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
