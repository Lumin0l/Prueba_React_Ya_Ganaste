import React from 'react';
import logo from './logo.svg';
import './App.css';
import bankList from './bankList';

function App() {
	return (
	  <div className="imanolApp">
		<div className="bank-list">
		  {bankList.map(bank => (
			<div key={bank.bankName} className="bank-item">
			  <h2>{bank.bankName}</h2>
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

