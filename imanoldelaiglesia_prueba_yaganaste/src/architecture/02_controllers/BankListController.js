/* No hay mucho que controlar en esta app en concreto,
pero aquí pondría el código relevante para controlar las 
lógicas e interacciones entre los elementos y 'views'
*/

/* Por no dejarlo vacío y practicar, he añadido un pequeño 
proceso de interacción que sucede al hacer clic en el enlace que
no lleva a ningún lado */
function BankListController() {
	function handleBankLinkClick(event, url) {
	  event.preventDefault();
	  alert(`No hay nada en este link ${url}`);
	}
  
	return {
	  handleBankLinkClick,
	};
  }
  
  export default BankListController;
  