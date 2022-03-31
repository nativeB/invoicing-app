import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as ArrowRight} from "../assets/icon-arrow-right.svg";
type Props = {
    item: {
      id: string;
      paymentDue: string;
      clientName: string;
      total: number;
      status: "paid" | "pending"| "draft",
      
  },
  toggleInvoiceSideBar: (type: string) => void;
  setEditingInvoice: (invoice: any) => void;
  app: any;
}

class InvoiceRow extends React.Component<Props> {
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
    const format = Intl.NumberFormat('en-US',{ style: 'currency', currency: 'GBP' }).format
    return `${format(price)}`;
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
      <div className='invoice-row ' onClick={()=>{
        this.props.setEditingInvoice(this.props.item);this.props.toggleInvoiceSideBar("edit")
      }}>
        <h3 className='text-sm-bold'> <span className='pound'>#</span>{this.props.item.id}</h3>
        <h3 className='text-sm'> {this.formatDate(this.props.item.paymentDue)}</h3>
        <h3 className='text-sm'> {this.props.item.clientName}</h3>
        <h2 > {this.formatNumber(this.props.item.total)}</h2>
        <div className={`invoice-status ${statusClass}`}>
          <span> &#8226;</span>
           <p > {this.upperCaseFirst(this.props.item.status)}</p>
       </div>
       <div>
        <ArrowRight/>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state: { app: any; }) {
  const app = state.app;
  return {
    app
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    toggleInvoiceSideBar: (type: string) => dispatch({ type: "app/toggleInvoiceSideBar", payload: type }),
    setEditingInvoice: (invoice: any) => dispatch({ type: "invoice/setEditingInvoice", payload: invoice })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceRow);
