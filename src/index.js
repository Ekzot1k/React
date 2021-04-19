import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let DataSourceMessages = [
  { Text: 'Сообщение 1' },
  { Text: 'Сообщение 2' },
  { Text: 'Сообщение 3' },
  { Text: 'Сообщение 4' },
  { Text: 'Сообщение 5' },
];

let DataSourceItems = [
  { ID: 1, Name: 'Denis' },
  { ID: 2, Name: 'Diana' },
  { ID: 3, Name: 'Lena' },
  { ID: 4, Name: 'Dima' },
  { ID: 5, Name: 'Oleg' },
  { ID: 6, Name: 'Lada' }
];

let DataSourcePosts = [
  { Text: 'Post #1', Date: 14 },
  { Text: 'Post #2', Date: 15 },
  { Text: 'Post #3', Date: 16 },
  { Text: 'Post #4', Date: 17 },
  { Text: 'Post #5', Date: 18 },
  { Text: 'Post #6', Date: 19 },
];

ReactDOM.render(
  <React.StrictMode>
    <App  DataSourcePosts = {DataSourcePosts} DataSourceItems = {DataSourceItems} DataSourceMessages = {DataSourceMessages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
