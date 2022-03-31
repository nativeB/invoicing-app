import React from 'react';
import InvoiceRow from "./InvoiceRow"
type Props = {
    data: {[key:string]:any},
}

class InvoiceList extends React.Component<Props> {
  static defaultProps = {
    data: [],
  };

  render() {
    return (
      <>
      { this.props.data.map( (item:any,index:number)=> <InvoiceRow  key={index} item={item} />)}
      </>
    );
  }
}

export default InvoiceList;
