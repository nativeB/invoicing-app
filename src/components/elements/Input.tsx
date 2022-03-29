import React from "react";
type Props = {
    label: string,
    type: "violet"|"dark"|"dark-light"|"red"|"grey"|"grey-light"
    size: "medium"|"large"
    inputType?: "text" | "date"
    customClass?: string[],
    placeholder?: string;
    value?: string;
    onInput: (event:any)=>void
}

class Input extends React.Component<Props> {
    static defaultProps = {
        type: "violet",
        size: "medium",
        customClass: [],
        inputType: "text"
      };
    render() {

     const className = `input-wrapper ${(this.props.customClass || []).join(' ')}`;
      return( 
        <div className={className}>
          <label> {this.props.label}</label>
          <input type={this.props.inputType} value={this.props.value} placeholder={this.props.placeholder} onInput={this.props.onInput}  />
        </div>
     );
    }
  }


export default Input