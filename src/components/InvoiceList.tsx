import React from 'react';
import InvoiceItem from "./InvoiceItem"
type Props = {
    data: {[key:string]:any}
}

class InvoiceList extends React.Component<Props> {
  static defaultProps = {
    data: [],
  };

  render() {
    return (
      <>
      { this.props.data.map( (item:any,index:number)=> <InvoiceItem key={index} item={item} />)}
      </>
    );
  }
}


export default InvoiceList;
