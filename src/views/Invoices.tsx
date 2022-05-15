import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/elements/Button';
import Dropdown from '../components/elements/Dropdown';
import InvoiceEmpty from '../components/InvoiceEmpty';
import InvoiceList from '../components/InvoiceList';
import InvoiceHeader from '../components/InvoiceHeader';
import { invoiceStatus } from '../helpers';

type Prop = {
  invoice: { 
    data:  { [key:string]: any}[]
    },
    toggleInvoiceSideBar: (type:string) => void,

}
type State = {
  filter: string,
}
class Invoices extends React.Component<Prop, State> {
  static defaultProps = {
    invoice: {
      data: []
    }
  }
  constructor(props: Prop) {
    super(props);
    this.state = {
      filter: ""
    }
    this.setFilter  = this.setFilter.bind(this);
    
  }

  setFilter(filter:string) {
    this.setState({
      filter
    })
  }


  render(){
    const {invoice} = this.props;
    const {filter} = this.state;
    const filteredInvoices = filter? invoice.data.filter((invoiceItem:any)=>{
      return invoiceItem.status.toLowerCase().includes(filter.toLowerCase());
    }) : invoice.data;

    const invoiceCount = filteredInvoices? filteredInvoices.length:0
    let invoiceCountText = ""
      if(invoiceCount){
        invoiceCountText = `There are ${invoiceCount} total invoices`
      }else{
        invoiceCountText = "No invoices"
      }
      const headerLeft = <>
      <h1 className="header-text-sm">Invoices</h1>
          <h3 className="header-text-xs">{invoiceCountText}</h3>
      </>

      const headerRight = <> 
       <Dropdown options={invoiceStatus} label="Filter By Status" onChange={(e)=> this.setFilter(e)} />
        <Button customClass={["default"]} icon="plus" iconClass={["icon "]} label={"New Invoice"} onClick={()=>this.props.toggleInvoiceSideBar("new")}   />
      </>
    return (
        <div className='content'> 
        <InvoiceHeader  left={headerLeft} right={headerRight} />
          {
            filteredInvoices && filteredInvoices.length? 
            <InvoiceList data={filteredInvoices} />
            : <InvoiceEmpty />
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
    toggleInvoiceSideBar: (type:string) => dispatch({ type: "app/toggleInvoiceSideBar", payload: type })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoices);
