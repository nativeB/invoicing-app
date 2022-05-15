import React from 'react';
import { upperCaseFirst } from '../helpers';

type Props = {
      status: "paid" | "pending"| "draft"
  }

class InvoiceStatusTag extends React.Component<Props> {
  static defaultProps = {
      status: ""
  };

  render() {
    
    let statusClass = "paid";
    if(this.props.status === 'pending'){
      statusClass='pending'
    }else if (this.props.status === 'draft'){
      statusClass = "draft"
    }
    return (
        <div className={`invoice-status ${statusClass}`}>
          <span> &#8226;</span>
           <p> {upperCaseFirst(this.props.status)}</p>
       </div>
    );
  }
}

export default InvoiceStatusTag;
