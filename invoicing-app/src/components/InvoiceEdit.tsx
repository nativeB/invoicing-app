import React from "react";
import { connect } from "react-redux";
import {cloneDeep, set} from "lodash-es"
import { formatDate, generateDefaultInvoice, paymentTerms } from "../helpers";
import Button from "./elements/Button";
import Input from "./elements/Input";
import Select from "./elements/Select";
import InvoiceItem from "./InvoiceItem";
import InvoiceItemHead from "./InvoiceItemHead";
type Props = {
  invoice: any;
  app: any;
  setOneInvoice: (invoiceItem:any) => void;
  toggleInvoiceSideBar: (type:string) => void;
}

type State = {
  paymentTerms: { label: string, value: any }[],
  invoiceItem: any;
  required: boolean;
}
class InvoiceEdit extends React.Component<Props,State> {
    
    constructor(props: Props) {
        super(props);

        this.state = {
            paymentTerms,
            invoiceItem: this.props.invoice.editingInvoice,
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

       if(key === 'paymentTerms') {
         const created = new Date(invoice.createdAt);
         created.setDate(created.getDate() + parseInt(value));
         console.log(created.getDate(), parseInt(value))
         const paymentDue = formatDate(created)
         set(invoice,'paymentDue',paymentDue)
         console.log(invoice)
       }


    set(invoice,key,value)
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
        let total = 0, itemTotal = 0;

        if(key === "price" && item.quantity){
            total = value * item.quantity
        }
        if(key === "quantity" && item.price){
            total = item.price * value
        }


        const state =  {
          invoiceItem: {
            ...prevState.invoiceItem,
            items: prevState.invoiceItem.items.map((item:any)=> item.id === id ? {...item, [key]: value, total} : item)
          }
        }
        itemTotal = state.invoiceItem.items.reduce((total:number,current:any)=>{
          return total + current.total
        },0)
        state.invoiceItem['total'] = itemTotal

        return state

      })
    }
    

    handleSubmit(e:any){
      e.preventDefault();
      this.props.setOneInvoice({...this.state.invoiceItem,status:"pending"})
      this.props.toggleInvoiceSideBar("");
    }

    render() {
  
      const items = this.state.invoiceItem.items.map((item:any, index:number) => <InvoiceItem  required={this.state.required}key={index} item={item} setItem={(key:string,value:any)=>this.updateItem(item.id,key,value)} removeItem={(key:string)=>this.removeItem(key)} />)
     return( 
       <form  onSubmit={this.handleSubmit}>
          <div className="invoice-view-side">
          <div className="invoice-edit">
              <div className="invoice-new-header">
                <h2>New Invoice</h2>
              </div>
              <div className="invoice-new-body">
                <h3 className="text-sm-bold heading">Fill Form</h3>
                <section>
                  <Input required={this.state.required} customClass={['input-full']}  label={"Street Address"} onInput={(value)=> this.setInvoiceProperty("senderAddress.street", value)} value={this.state.invoiceItem.senderAddress.street}  />
                </section>
                <section>
                  <Input required={this.state.required} customClass={['input-xs']} label={"City"} onInput={(value)=> this.setInvoiceProperty("senderAddress.city", value)}  value={this.state.invoiceItem.senderAddress.city} />
                  <Input required={this.state.required} customClass={['input-xs']} label={"Post Code"} onInput={(value)=> this.setInvoiceProperty("senderAddress.postCode", value)} value={this.state.invoiceItem.senderAddress.postCode}  />
                  <Input required={this.state.required} customClass={['input-xs']} label={"Country"} onInput={(value)=> this.setInvoiceProperty("senderAddress.country", value)}  value={this.state.invoiceItem.senderAddress.country} />
                </section>

                <h3 className="text-sm-bold heading">Bill To</h3>
                <section>
                  <Input required={this.state.required} customClass={['input-full']}  label={"Client's Name"} onInput={(value)=> this.setInvoiceProperty("clientName", value)} value={this.state.invoiceItem.clientName}  />
                </section>
                <section>
                  <Input required={this.state.required} customClass={['input-full']}  label={"Client's Email"} onInput={(value)=> this.setInvoiceProperty("clientEmail", value)} value={this.state.invoiceItem.clientEmail} />
                </section>
                <section>
                  <Input required={this.state.required} customClass={['input-full']}  label={"Street Address"} onInput={(value)=> this.setInvoiceProperty("clientAddress.street", value)}  value={this.state.invoiceItem.clientAddress.street} />
                </section>
      
              
                <section>
                  <Input required={this.state.required} customClass={['input-xs']} label={"City"} onInput={(value)=> this.setInvoiceProperty("clientAddress.city", value)} value={this.state.invoiceItem.clientAddress.city} />
                  <Input required={this.state.required} customClass={['input-xs']} label={"Post Code"} onInput={(value)=> this.setInvoiceProperty("clientAddress.postCode", value)} value={this.state.invoiceItem.clientAddress.postCode}  />
                  <Input required={this.state.required} customClass={['input-xs']} label={"Country"} onInput={(value)=> this.setInvoiceProperty("clientAddress.country", value)}  value={this.state.invoiceItem.clientAddress.country} />
                </section>

                <section>
                  <Input required={this.state.required} value={this.state.invoiceItem.paymentDue} customClass={['input-sm']} label={"Invoice Date"} onInput={(value)=> this.setInvoiceProperty("paymentDue", value)} inputType={"date"}  />
                  <Select required={this.state.required} onChange={(value)=> this.setInvoiceProperty("paymentTerms", value)}   customClass={['input-sm']} options={this.state.paymentTerms} label={"Payment Terms"}  value={this.state.invoiceItem.paymentTerms}  />
                </section>

                <section>
                  <Input required={this.state.required} customClass={['input-full']} label={"Project Description"} onInput={(value)=> this.setInvoiceProperty("description", value)}   placeholder="e.g. Graphic Design Service" value={this.state.invoiceItem.description}/>
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
                </div>
                <div className="invoice-new-footer-right">
                  <Button type="button" label={"Cancel"} onClick={()=>this.props.toggleInvoiceSideBar("")} customClass={["button-4"]} />
                  <Button type="submit" label={"Save Changes"} customClass={["default"]}  />
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
      toggleInvoiceSideBar: (type: string) => dispatch({ type: "app/toggleInvoiceSideBar", payload: type })
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceEdit);