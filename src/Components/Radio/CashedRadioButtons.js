import React, { PropTypes } from 'react';

const renderCashRadioButtons = currentCashSelector => (
    <form onClick={event => currentCashSelector(event.target.value)}>
    <input
      type="radio"
      name="cash-type"
      value="Transaction"
    />
    <input
      type="radio"
      name="cash-type"
      value="Transfer"
    />
  </form>
  );
  
  
  const CashRadioButtons = ({ currentCashSelector }) => (
    <div className="container">
      {renderCashRadioButtons(currentCashSelector)}
    </div>
  );
  
  CashRadioButtons.propTypes = {
    currentCashSelector: PropTypes.func.isRequired
  };
  
  
  export default CashRadioButtons;