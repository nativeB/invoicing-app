import React from 'react';

class InvoiceItemHead extends React.Component {

  render() {
    
    return (
      <div className='invoice-item head'>
        <div className={"invoice-item-pad"}>
          <h3 className="text-sm">Item Name</h3>
        </div>
        <div className={"invoice-item-pad"}>
          <h3 className="text-sm">Qty</h3>
        </div>
        <div className={"invoice-item-pad"}>
          <h3 className="text-sm">Price</h3>
         </div>
        <div className={"invoice-item-pad"}>
          <h3 className="text-sm">Total</h3>
        </div>
      </div>
    );
  }
}


export default InvoiceItemHead;
