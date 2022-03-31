import React from "react";
import { connect } from "react-redux";
import {cloneDeep, set} from "lodash-es"
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
  toggleInvoiceSideBar: () => void;
}

type State = {
  paymentTerms: { label: string, value: string }[],
  invoiceItem: any;
  required: boolean;
}
class InvoiceNew extends React.Component<Props,State> {
    
    constructor(props: Props) {
        super(props);
        this.state = {
            paymentTerms: [
                { label: "Due on Receipt", value: "Due on Receipt" },
                { label: "Next 30 Days", value: "Next 30 Days" },
            ],
            invoiceItem: generateDefaultInvoice(),
            required: true
        }
        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.updateItem = this.updateItem.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setInvoiceProperty = this.setInvoiceProperty.bind(this)
    }

    setInvoiceProperty(key:string,value:any){

       const invoice = cloneDeep(this.state.invoiceItem)
       set(invoice,key,value)
       console.log({invoice})
      this.setState({
        invoiceItem: {
            ...invoice
        }
    })
   
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
      this.setState(prevState => {
        const item = prevState.invoiceItem.items.find((item:any)=> item.id === id);
        let total = 0;

        if(key === "price"){
            total = value * item.quantity
        }
        if(key === "quantity"){
            total = item.price * value
        }

        return {
          invoiceItem: {
            ...prevState.invoiceItem,
            items: prevState.invoiceItem.items.map((item:any)=> item.id === id ? {...item, [key]: value, total} : item)
          }
        }
      })
    }
    

    handleSubmit(e:any){
      e.preventDefault();
      this.props.setOneInvoice({...this.state.invoiceItem,status:"pending"})
    }

    render() {
      const className = `invoice-view-side ${!this.props.app.toggleInvoiceSideBar ? "hidden":"" }`

      const items = this.state.invoiceItem.items.map((item:any, index:number) => <InvoiceItem  required={this.state.required}key={index} item={item} setItem={(key:string,value:any)=>this.updateItem(item.id,key,value)} removeItem={(key:string)=>this.removeItem(key)} />)
     return( 
       <form  onSubmit={this.handleSubmit}>
          <div className={className}>
          <div className="invoice-edit">
              <div className="invoice-new-header">
                <h2>New Invoice</h2>
              </div>
              <div className="invoice-new-body">
                <h3 className="text-sm-bold heading">Fill Form</h3>
                <section>
                  <Input required={this.state.required} customClass={['input-full']}  label={"Street Address"} onInput={(value)=> this.setInvoiceProperty("senderAddress.street", value)}  />
                </section>
                <section>
                  <Input required={this.state.required} customClass={['input-xs']} label={"City"} onInput={(value)=> this.setInvoiceProperty("senderAddress.city", value)}  />
                  <Input required={this.state.required} customClass={['input-xs']} label={"Post Code"} onInput={(value)=> this.setInvoiceProperty("senderAddress.postCode", value)}  />
                  <Input required={this.state.required} customClass={['input-xs']} label={"Country"} onInput={(value)=> this.setInvoiceProperty("senderAddress.country", value)}  />
                </section>

                <h3 className="text-sm-bold heading">Bill To</h3>
                <section>
                  <Input required={this.state.required} customClass={['input-full']}  label={"Client's Name"} onInput={(value)=> this.setInvoiceProperty("clientName", value)}  />
                </section>
                <section>
                  <Input required={this.state.required} customClass={['input-full']}  label={"Client's Email"} onInput={(value)=> this.setInvoiceProperty("clientEmail", value)}  />
                </section>
                <section>
                  <Input required={this.state.required} customClass={['input-full']}  label={"Street Address"} onInput={(value)=> this.setInvoiceProperty("clientAddress.street", value)}  />
                </section>
      
              
                <section>
                  <Input required={this.state.required} customClass={['input-xs']} label={"City"} onInput={(value)=> this.setInvoiceProperty("clientAddress.city", value)}  />
                  <Input required={this.state.required} customClass={['input-xs']} label={"Post Code"} onInput={(value)=> this.setInvoiceProperty("clientAddress.postCode", value)}  />
                  <Input required={this.state.required} customClass={['input-xs']} label={"Country"} onInput={(value)=> this.setInvoiceProperty("clientAddress.country", value)}  />
                </section>

                <section>
                  <Input required={this.state.required} value='' customClass={['input-sm']} label={"Invoice Date"} onInput={(value)=> this.setInvoiceProperty("paymentDue", value)} inputType={"date"} />
                  <Select required={this.state.required} onChange={(value)=> this.setInvoiceProperty("paymentTerms", value)}   customClass={['input-sm']} options={this.state.paymentTerms} label={"Payment Terms"}   />
                </section>

                <section>
                  <Input required={this.state.required} customClass={['input-full']} label={"Project Description"} onInput={(value)=> this.setInvoiceProperty("description", value)}   placeholder="e.g. Graphic Design Service"/>
                </section>

                <h3 className="text-sm-bold heading">Item List</h3>
                <section>
                  <InvoiceItemHead/>
                  {items}
                  <Button icon="plus" label={"New Invoice"} customClass={["large", "button-4"]} onClick={this.addItem}  />
                </section>

                </div>
              <div className="invoice-new-footer">
                <div className="invoice-new-footer-left">
                  <Button  label={"Discard"} customClass={["button-6"]} onClick={this.props.toggleInvoiceSideBar}  />
                </div>
                <div className="invoice-new-footer-right">
                  <Button type="button" label={"Save to Draft"} customClass={["button-7"]} 
                  onClick={()=>{ 
                    this.props.setOneInvoice({...this.state.invoiceItem,status:"draft"})
                    
                    }}  />
                  <Button  type="submit" label={"Save & Send"} customClass={["default"]}  />
                </div>
              </div>
          </div>
          </div>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceNew);