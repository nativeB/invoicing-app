import React from "react";
import { connect } from "react-redux";
import Button from "./elements/Button";
import Dropdown from "./elements/Dropdown";
type Props = {
    title: string;
    description: string;
    totalInvoices: number;
    toggleInvoiceSideBar: () => void;
    app: any;
}

class InvoiceHeader extends React.Component<Props> {
    static defaultProps = {
       title: "",
       description: "",
       totalInvoices: 0
      };

    render() {
      let invoiceCount = ""
      if(this.props.totalInvoices){
        invoiceCount = `There are ${this.props.totalInvoices} total invoices`
      }else{
        invoiceCount = "No invoices"
      }
     return( 
      <div className="App-header ">
        <div className="header-label">
          <h1 className="header-text-sm">Invoices</h1>
          <h3 className="header-text-xs">{invoiceCount}</h3>
        </div>
        <div className="App-header-right">
        <Dropdown options={[{label:"Volvo",value:"volvo"},{label:"Saab",value:"saab"}]} label="Filter By Status" onChange={()=>console.log('test')} />
        <Button icon="plus" iconClass={["icon"]} label={"New Invoice"} onClick={()=>this.props.toggleInvoiceSideBar()}   />
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
      toggleInvoiceSideBar: () => dispatch({ type: "app/toggleInvoiceSideBar" })
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceHeader);