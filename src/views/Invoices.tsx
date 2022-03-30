import React from 'react';
import InvoiceEmpty from '../components/InvoiceEmpty';
import InvoiceList from '../components/InvoiceList';
import InvoiceHeader from '../components/InvoiceListHeader';
import data from "../data/data.json"
type State = {
  data: { [key:string]: any}[]
}
type Prop = {}
class Demo extends React.Component<Prop,State> {
  constructor(props: Prop) {
    super(props);
    this.state = {data};
  }

  render(){
    return (
        <div className='content'> 
        <InvoiceHeader totalInvoices={this.state.data? this.state.data.length:0} />
          {
            this.state.data && this.state.data.length? 
            <InvoiceList data={this.state.data} />
            :<InvoiceEmpty />
          }
        </div>
      );
  }
  
}

export default Demo;