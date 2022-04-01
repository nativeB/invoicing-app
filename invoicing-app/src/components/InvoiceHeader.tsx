import React from "react";

type Props = {
    left: any;
    right: any;
    customClass?: string
}

class InvoiceHeader extends React.Component<Props> {
    render() {
     return( 
      <div className={`App-header ${this.props.customClass || ""}`}>
        <div className="App-header-left">
          {this.props.left}
        </div>
        <div className="App-header-right">
        {this.props.right}
      </div>
      </div>
      );
    }
  }

export default InvoiceHeader;