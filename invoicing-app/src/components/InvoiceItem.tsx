import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type Props = {
    item: {id: string;
    paymentDue: string;
    clientName: string;
    total: number;
    status: "paid" | "pending"}
}

class InvoiceItem extends React.Component<Props> {
  static defaultProps = {
    item: {
      id: "",
      paymentDue: "",
      clientName: "",
      total: 0,
      status: ""
    }
  };
  render() {
    const formatDate = (date:string)=> {
      if(!date) return ""
      return (new Date(date)).toLocaleDateString("en-US",{month:"short",year:"numeric",day:"numeric"})
    }
    const formatNumber = (price:number)=> {
      if(!price) return ""
      return price.toFixed(2);
    }
    return (
      <div className='invoice-item '>
        <p className='text-sm-bold'> <span>#</span>{this.props.item.id}</p>
        <p className='text-sm'> {formatDate(this.props.item.paymentDue)}</p>
        <p className='text-sm'> {this.props.item.clientName}</p>
        <h3 className='header-text-sm'> {formatNumber(this.props.item.total)}</h3>
        <p> {this.props.item.status}</p>
        <FontAwesomeIcon  className="arrow"  icon={solid('angle-right')} />
      </div>
    );
  }
}


export default InvoiceItem;
