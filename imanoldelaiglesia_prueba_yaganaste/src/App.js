import logo from './logo.svg';
import './App.css';

import React from 'react';
import logo from './logo.svg';
import './App.css';
import bankList from './bankList';

function App() {
  return (
    <div>
      {bankList.map(bank => (
        <div key={bank.bankName}>
          <h2>{bank.bankName}</h2>
          <p>{bank.description}</p>
          <a href={bank.url}>Go to website</a>
        </div>
      ))}
    </div>
  );
}

export default App;

