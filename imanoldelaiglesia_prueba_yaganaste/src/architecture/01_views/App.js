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
			  <h2 onClick={e => controller.handleBankLinkClick(e, bank.url)}>{bank.bankName}</h2>
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