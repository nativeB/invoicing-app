import React from 'react';
import { connect } from 'react-redux';
import InvoiceEmpty from '../components/InvoiceEmpty';
import InvoiceList from '../components/InvoiceList';
import InvoiceHeader from '../components/InvoiceListHeader';

type Prop = {
  invoice: { 
    data:  { [key:string]: any}[]
    }
}
class Invoices extends React.Component<Prop> {
  static defaultProps = {
    invoice: {
      data: []
    }
  }
  render(){
    return (
        <div className='content'> 
        <InvoiceHeader totalInvoices={this.props.invoice.data? this.props.invoice.data.length:0} />
          {
            this.props.invoice.data && this.props.invoice.data.length? 
            <InvoiceList data={this.props.invoice.data} />
            :<InvoiceEmpty />
          }
        </div>
      );
  }
  
}
function mapStateToProps(state: { invoice: any; app:any; }) {
  const invoice = state.invoice;
  const app = state.app;
  return {
    invoice,
    app
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    setOneInvoice: (data: any) => dispatch({ type: "invoice/setOneInvoice", payload: data }),
    toggleInvoiceSideBar: () => dispatch({ type: "app/toggleInvoiceSideBar" })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoices);
