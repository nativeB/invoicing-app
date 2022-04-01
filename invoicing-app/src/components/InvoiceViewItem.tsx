import React from 'react';
import { formatDateNice } from '../helpers';
import InvoiceId from './invoiceId';

type Props = {
    invoice: any,
}

class InvoiceViewOne extends React.Component<Props> {
  static defaultProps = {
    invoice: {},
  };

  render() {
    return (
      <div className='invoice-view-one'>
         <section>
           <div className='column'>
              <InvoiceId id = {this.props.invoice.id}/>
              <h3 className='text-sm'>{this.props.invoice.description}</h3>
           </div>
           <div className='column'>
             <h3 className='text-sm'>{this.props.invoice.senderAddress.street}</h3>
             <h3 className='text-sm'>{this.props.invoice.senderAddress.city}</h3>
             <h3 className='text-sm'>{this.props.invoice.senderAddress.postCode}</h3>
             <h3 className='text-sm'>{this.props.invoice.senderAddress.country}</h3>
           </div>
         </section>
         <section> 
           <div className='column'>
              <h3 className="text-sm-bold heading">Invoice Date</h3>
              <h3 className='text-sm'>{ formatDateNice(this.props.invoice.createdAt)}</h3>
            </div>
           <div className='column'>
           <h3 className="text-sm-bold heading">Bill to </h3>
           <h3 className='text-sm'>{ this.props.invoice.clientName}</h3>
              <h3 className='text-sm'>{this.props.invoice.clientAddress.street}</h3>
             <h3 className='text-sm'>{this.props.invoice.clientAddress.city}</h3>
             <h3 className='text-sm'>{this.props.invoice.clientAddress.postCode}</h3>
             <h3 className='text-sm'>{this.props.invoice.clientAddress.country}</h3>
           </div>
           <div className='column'>
              <h3 className="text-sm-bold heading">Sent to </h3>
              <h3 className='text-sm'>{ this.props.invoice.clientEmail}</h3>
           </div>
         </section>
         <section> 
           <div className='column'>
              <h3 className="text-sm-bold heading">Payment Due</h3>
              <h3 className='text-sm'>{ formatDateNice(this.props.invoice.paymentDue)}</h3>
            </div>
         </section>
         <section> </section>
      </div>
    );
  }
}

export default InvoiceViewOne;
