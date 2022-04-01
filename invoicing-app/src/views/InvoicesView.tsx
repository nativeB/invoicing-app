import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/elements/Button';
import InvoiceHeader from '../components/InvoiceHeader';
import InvoiceStatusTag from '../components/InvoiceStatusTag';
import InvoiceViewOne from '../components/InvoiceViewOne';
import Navigation from '../components/Navigation';
import { withParams } from '../helpers/wrappers';


type Prop = {
    params?: any;
    getOneInvoice: (id: string) => any;
    toggleInvoiceSideBar: (type:string) => void;
    setEditingInvoice: (data: any) => void;
    setOneInvoice: (invoiceItem:any) => void;
}
type State = {
  invoice: any;
}

class InvoiceView extends React.Component<Prop, State> {
  constructor(props: Prop) {
    super(props);
    this.markAsPaid = this.markAsPaid.bind(this);
  }

  static defaultProps = {
 
  }
  markAsPaid() {
    const invoice = this.props.getOneInvoice(this.props.params.id)||{};
    const newInvoice = {
      ...invoice,
      status: 'paid',
    }
    this.props.setOneInvoice(newInvoice);
  }
  
  render(){
    const invoice = this.props.getOneInvoice(this.props.params.id)||{};
    const headerLeft = <div className='App-header-status'>
    <h2> Status </h2>
     <InvoiceStatusTag status={invoice.status} />
    </div>
    const headerRight = <>
      <Button  onClick={()=>{
       
        this.props.setEditingInvoice(invoice);
       this.props.toggleInvoiceSideBar("edit")
      }}  label={"Edit"} customClass={["button-4"]}  />
      <Button  label={"Delete"}  customClass={["button-5"]}  />
      
      {
      invoice.status !== 'paid'? <Button onClick={this.markAsPaid}  label={"Mark as Paid"} customClass={["default"]}  />
      : <></>}
     </>
    return (
        <div className='content'> 
        <Navigation path="/" label="Go Back" />
        <InvoiceHeader customClass="invoice-view-header" left={headerLeft}  right={headerRight}  />
        <InvoiceViewOne invoice={invoice}/>
        </div>
      );
  }
  
}
function mapStateToProps(state: { invoice: any; app:any; }) {
  return {
    getOneInvoice: (id: string) => state.invoice.data.find((invoice:any) => invoice.id === id),
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    setOneInvoice: (data: any) => dispatch({ type: "invoice/setOneInvoice", payload: data }),
    toggleInvoiceSideBar: (type:string) => dispatch({ type: "app/toggleInvoiceSideBar", payload: type }),
    setEditingInvoice: (data: any) => dispatch({ type: "invoice/setEditingInvoice", payload: data })
  };
}

export default withParams(connect(mapStateToProps, mapDispatchToProps)(InvoiceView));