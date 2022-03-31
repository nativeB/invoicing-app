import React from 'react';
import {ReactComponent as Delete} from "../assets/icon-delete.svg";
import Input from './elements/Input';
type Props = {
    item: {
      name: string
      quantity: number,
      price: number,
      id: string,
      total: number
  },
  setItem: (key:string,value:any)=>void,
  removeItem: (key:string)=>void,
  required: boolean
}

class InvoiceItem extends React.Component<Props> {
  static defaultProps = {
    item: {
      name: "",
      quantity: 0,
      price: 0,
      total: 0
    },
    required: false
  };
 

  render() {
    
    return (
      <div className='invoice-item'>
        <div className={"invoice-item-pad"}>
          <Input required={this.props.required} value={this.props.item.name||""}  customClass={["input-full"]} label={""} onInput={(value)=>this.props.setItem("name",value)} inputType={'text'} />
        </div>
        <div className={"invoice-item-pad"}>
          <Input required={this.props.required}  value={this.props.item.quantity||0}  customClass={["input-full"]} label={""} onInput={(value)=>{this.props.setItem("quantity",value)}} inputType={'text'} />
        </div>
        <div className={"invoice-item-pad"}>
          <Input required={this.props.required}  value={this.props.item.price||0} customClass={["input-full"]} label={""} onInput={(value)=>{this.props.setItem("price",value)}} inputType={'text'} />
        </div>
        <div className={"invoice-item-pad"}>
          <div className='labels'><span  className='text-sm'>{this.props.item.total||0}</span></div>
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
