import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type Props = {
    item: {
      id: string;
      paymentDue: string;
      clientName: string;
      total: number;
      status: "paid" | "pending"| "draft"
  }
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
  formatDate = (date:string)=> {
    if(!date) return ""
    return (new Date(date)).toLocaleDateString("en-US",{month:"short",year:"numeric",day:"numeric"})
  }

  formatNumber = (price:number)=> {
    if(!price) return ""
    return price.toFixed(2);
  }
  upperCaseFirst(data:string) {
    return `${data[0].toUpperCase()}${data.substring(1)}`
  }
  render() {
    
    let statusClass = "paid";
    if(this.props.item.status === 'pending'){
      statusClass='pending'
    }else if (this.props.item.status === 'draft'){
      statusClass = "draft"
    }
    return (
      <div className='invoice-item '>
        <p className='text-sm-bold'> <span className='pound'>#</span>{this.props.item.id}</p>
        <p className='text-sm'> {this.formatDate(this.props.item.paymentDue)}</p>
        <p className='text-sm'> {this.props.item.clientName}</p>
        <h3 className='header-text-sm'> {this.formatNumber(this.props.item.total)}</h3>
        <div className={`invoice-status ${statusClass}`}>
          <span> &#8226;</span>
           <p > {this.upperCaseFirst(this.props.item.status)}</p>
       </div>
       <div>
        <FontAwesomeIcon  className="arrow"  icon={solid('angle-right')} />
        </div>
      </div>
    );
  }
}


export default InvoiceItem;
