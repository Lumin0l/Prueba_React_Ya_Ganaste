import React, { useState, useEffect } from 'react';
import './App.css';
import BankListController from '../02_controllers/BankListController.js';
import fetchBankList from '../00_models/bankList.js';

const controller = BankListController();

function App() {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    fetchBankList()
      .then(data => setBanks(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="imanolApp">
      <div className="bank-list">
        {banks.map(bank => (
          <div key={bank.bankName} className="bank-item">
            <h2 onClick={e => controller.handleBankLinkClick(e)}>{bank.bankName}</h2>
            <p>{bank.description}</p>
            <p>{bank.age}</p>
            <a href={bank.url}>Haz Clic Aquí para Acceder a la Web</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

/* 
Así estaba antes de la tarea 3:

import React from 'react';
import './App.css';
import bankList from '../00_models/bankList.js';
import BankListController from '../02_controllers/BankListController.js';

const controller = BankListController();

function App() {
	return (
	  <div className="imanolApp">
		<div className="bank-list">
		  {bankList.map(bank => (
			<div key={bank.bankName} className="bank-item">
			  <h2 onClick={e => controller.handleBankLinkClick(e)}>{bank.bankName}</h2>
			  <p>{bank.description}</p>
			  <p>{bank.age}</p>
			  <a href={bank.url}>Haz Clic Aquí para Acceder a la Web</a>
			</div>
		  ))}
		</div>
	  </div>
	);
  }
  
  export default App;
*/