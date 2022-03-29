import React from 'react';
import {ReactComponent as Delete} from "../assets/icon-delete.svg";
import Input from './elements/Input';
type Props = {
    item: {
      name: string
      quantity: number,
      price: number,
  }
}

class InvoiceItem extends React.Component<Props> {
  static defaultProps = {
    item: {
      name: "",
      quantity: 0,
      price: 0
    }
  };
  
  render() {
    
    return (
      <div className='invoice-item'>
       <Input customClass={["invoice-item-name"]} label={"Item Name"} onInput={()=>console.log('test')} inputType={'text'} />
       <Input customClass={['invoice-item-qty']} label={"Qty"} onInput={()=>console.log('test')} inputType={'text'} />
       <Input customClass={['invoice-item-price']} label={"Price"} onInput={()=>console.log('test')} inputType={'text'} />
        <span className='text-sm'>Total</span>
        <Delete/>
      </div>
    );
  }
}


export default InvoiceItem;
