import React from "react";

type Props = {
    label: string,
    size: "medium"|"large"
    inputType?: "text" | "date"
    customClass?: string[],
    placeholder?: string;
    value?: string|number;
    onInput: (event:any)=>void
    required?: boolean
}

class Input extends React.Component<Props> {
    static defaultProps = {
        size: "medium",
        customClass: [],
        inputType: "text",
        required: false
      };
    render() {

     const className = `input-wrapper ${(this.props.customClass || []).join(' ')}`;
     const label =  this.props.label? <label>{this.props.label}</label>: <></>;
      return( 
        <div className={className}>
          {label}
          <input required={this.props.required} type={this.props.inputType} value={this.props.value} placeholder={this.props.placeholder} onInput={(event:any)=>this.props.onInput(event.target.value)}  />
        </div>
     );
    }
  }


export default Input