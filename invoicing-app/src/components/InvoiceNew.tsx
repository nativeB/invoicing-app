import React from "react";
import { connect } from "react-redux";
import Input from "./elements/Input";
import Select from "./elements/Select";
type Props = {
  app: any
}

type State = {
  paymentTerms: { label: string, value: string }[],
}
class InvoiceNew extends React.Component<Props,State> {
    
    constructor(props: Props) {
        super(props);
        this.state = {
            paymentTerms: [
                { label: "Due on Receipt", value: "Due on Receipt" },
                { label: "Next 30 Days", value: "Next 30 Days" },
            ]
        }
    }

    render() {
      const className = `invoice-view-side ${!this.props.app.toggleInvoiceSideBar ? "hidden":"" }`
     return( 
      <div className={className}>
      <div className="invoice-edit">
          <div className="invoice-new-header">
            <h2>New Invoice</h2>
          </div>
          <div className="invoice-new-body">
            <h3 className="text-sm-bold">Fill Form</h3>
            <section>
              <Input customClass={['input-full']}  label={"Street Address"} onInput={()=>console.log('test')} type= {"grey"} />
            </section>
            <section>
              <Input customClass={['input-xs']} label={"City"} onInput={()=>console.log('test')} type= {"grey"} />
              <Input customClass={['input-xs']} label={"Post Code"} onInput={()=>console.log('test')} type= {"grey"} />
              <Input customClass={['input-xs']} label={"Country"} onInput={()=>console.log('test')} type= {"grey"} />
            </section>

            <h3 className="text-sm-bold">Bill To</h3>
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

            </div>
          <div className="invoice-new-footer"></div>
      </div>
      </div>
      );
    }
  }


  function mapStateToProps(state: { app: any; }) {
    const app = state.app;
    return {
      app
    };
  }
  
  function mapDispatchToProps(dispatch: any) {
    return {
      setShowInvoiceMenu: (data: boolean) => dispatch({ type: "app/toggleInvoiceSideBar", payload: data })
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceNew);