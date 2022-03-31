import React from 'react';
import { connect } from 'react-redux';
import InvoiceEdit from '../components/InvoiceEdit';
import InvoiceNew from '../components/InvoiceNew';

type Prop = {
  app: any;
}
class InvoicesSideContent extends React.Component<Prop> {

  render(){
    let SideToRender = <></>
    if(this.props.app.toggleInvoiceSideBar === 'new') {
        SideToRender = <InvoiceNew />
    }else if(this.props.app.toggleInvoiceSideBar === 'edit') {
      SideToRender = <InvoiceEdit />
    }
    return (
      <>
        {SideToRender}
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(InvoicesSideContent);
