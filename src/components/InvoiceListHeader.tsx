import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import Button from "./elements/Button";
import Dropdown from "./elements/Dropdown";
type Props = {
    title: string;
    description: string;
    totalInvoices: number;
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
        <Button icon={solid('plus-circle' )}label={"New Invoice"} onClick={()=>console.log('test')}   />
      </div>
      </div>
      );
    }
  }


export default InvoiceHeader