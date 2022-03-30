import React from "react";
import { connect } from "react-redux";
import { generateDefaultInvoice } from "../helpers";
import Button from "./elements/Button";
import Input from "./elements/Input";
import Select from "./elements/Select";
import InvoiceItem from "./InvoiceItem";
import InvoiceItemHead from "./InvoiceItemHead";
type Props = {
  invoice: any;
  app: any;
  setOneInvoice: (invoiceItem:any) => void;
}

type State = {
  paymentTerms: { label: string, value: string }[],
  invoiceItem: any;
}
class InvoiceNew extends React.Component<Props,State> {
    
    constructor(props: Props) {
        super(props);
        this.state = {
            paymentTerms: [
                { label: "Due on Receipt", value: "Due on Receipt" },
                { label: "Next 30 Days", value: "Next 30 Days" },
            ],
            invoiceItem: generateDefaultInvoice()
        }
        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.updateItem = this.updateItem.bind(this)
        this.saveInvoice = this.saveInvoice.bind(this)
    }
    addItem(){
      this.setState(prevState => ({
        invoiceItem: {
          ...prevState.invoiceItem,
          items: [...prevState.invoiceItem.items, generateDefaultInvoice()]
        }
      }))
    }
    removeItem(id: string){
      this.setState(prevState => ({
        invoiceItem: {
          ...prevState.invoiceItem,
          items: prevState.invoiceItem.items.filter((item:any)=> item.id !== id)
        }
      }))
    }
    updateItem(id:string,key:string,value:any){
      this.setState(prevState => ({
        invoiceItem: {
          ...prevState.invoiceItem,
          items: prevState.invoiceItem.items.map((item:any)=> item.id === id ? {...item, [key]: value} : item)
        }
      }))
    }
    
    saveInvoice(){
      this.props.setOneInvoice(this.state.invoiceItem)
    }
    render() {
      console.log(this.state.invoiceItem)
      const className = `invoice-view-side ${!this.props.app.toggleInvoiceSideBar ? "hidden":"" }`

      const items = this.state.invoiceItem.items.map((item:any, index:number) => <InvoiceItem key={index} item={item} setItem={(key:string,value:any)=>this.updateItem(item.id,key,value)} removeItem={(key:string)=>this.removeItem(key)} />)
     return( 
      <div className={className}>
      <div className="invoice-edit">
          <div className="invoice-new-header">
            <h2>New Invoice</h2>
          </div>
          <div className="invoice-new-body">
            <h3 className="text-sm-bold heading">Fill Form</h3>
            <section>
              <Input customClass={['input-full']}  label={"Street Address"} onInput={()=>console.log('test')} type= {"grey"} />
            </section>
            <section>
              <Input customClass={['input-xs']} label={"City"} onInput={()=>console.log('test')} type= {"grey"} />
              <Input customClass={['input-xs']} label={"Post Code"} onInput={()=>console.log('test')} type= {"grey"} />
              <Input customClass={['input-xs']} label={"Country"} onInput={()=>console.log('test')} type= {"grey"} />
            </section>

            <h3 className="text-sm-bold heading">Bill To</h3>
            <section>
              <Input customClass={['input-full']}  label={"Client's Name"} onInput={()=>console.log('test')} type= {"grey"} />
            </section>
            <section>
              <Input customClass={['input-full']}  label={"Client's Email"} onInput={()=>console.log('test')} type= {"grey"} />
            </section>
            <section>
              <Input customClass={['input-full']}  label={"Street Address"} onInput={()=>console.log('test')} type= {"grey"} />
            </section>
  
          
            <section>
              <Input customClass={['input-xs']} label={"City"} onInput={()=>console.log('test')} type= {"grey"} />
              <Input customClass={['input-xs']} label={"Post Code"} onInput={()=>console.log('test')} type= {"grey"} />
              <Input customClass={['input-xs']} label={"Country"} onInput={()=>console.log('test')} type= {"grey"} />
            </section>

            <section>
              <Input value='' customClass={['input-sm']} label={"Invoice Date"} onInput={()=>console.log('test')} inputType={"date"} />
              <Select  onChange={()=>console.log('test')}   customClass={['input-sm']} options={this.state.paymentTerms} label={"Payment Terms"}   />
            </section>

            <section>
              <Input customClass={['input-full']} label={"Project Description"} onInput={()=>console.log('test')} type= {"grey"}  placeholder="e.g. Graphic Design Service"/>
            </section>

            <h3 className="text-sm-bold heading">Item List</h3>
            <section>
              <InvoiceItemHead/>
              {items}
              <Button icon="plus" label={"New Invoice"} customClass={["large", "dark"]} onClick={this.addItem}  />
            </section>

            </div>
          <div className="invoice-new-footer"></div>
      </div>
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
      setOneInvoice: (data: boolean) => dispatch({ type: "invoice/setOneInvoice", payload: data }),
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceNew);