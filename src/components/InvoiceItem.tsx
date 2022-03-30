import React from 'react';
import {ReactComponent as Delete} from "../assets/icon-delete.svg";
import Input from './elements/Input';
type Props = {
    item: {
      name: string
      quantity: number,
      price: number,
      id: string
  },
  setItem: (key:string,value:any)=>void,
  removeItem: (key:string)=>void
}

class InvoiceItem extends React.Component<Props> {
   constructor(props:Props) {
    super(props);
    this.state = {
      item: this.props.item,
      setItem: this.props.setItem,
      removeItem: this.props.removeItem
    }
  }
  
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
        <div className={"invoice-item-pad"}>
          <Input value={this.props.item.name}  customClass={["input-full"]} label={""} onInput={(event)=>this.props.setItem("",event?.target.value)} inputType={'text'} />
        </div>
        <div className={"invoice-item-pad"}>
          <Input  value={this.props.item.quantity}  customClass={["input-full"]} label={""} onInput={(event)=>this.props.setItem("",event?.target.value)} inputType={'text'} />
        </div>
        <div className={"invoice-item-pad"}>
          <Input value={this.props.item.price} customClass={["input-full"]} label={""} onInput={(event)=>this.props.setItem("",event?.target.value)} inputType={'text'} />
        </div>
        <div className={"invoice-item-pad"}>
          <div className='labels'><span  className='text-sm'>{this.props.item.quantity}</span></div>
        </div>
        <div className={"invoice-item-pad"}>
        <div className= 'labels'>
          <Delete onClick={()=>this.props.removeItem(this.props.item.id)} />
        </div>
        </div>
      </div>
    );
  }
}


export default InvoiceItem;
