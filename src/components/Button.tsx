import React from "react";
type Props = {
    label: string,
    type: "violet"|"dark"|"dark-light"|"red"|"grey"|"grey-light"
    size: "medium"|"large"
    customClass?: string[],
    onClick: (event:any)=>void
}

class Button extends React.Component<Props> {
    static defaultProps = {
        type: "violet",
        size: "medium",
        customClasses: []
      };
    render() {

     const className = `text-sm-bold ${this.props.type} ${this.props.size} ${(this.props.customClass || []).join(' ')}`;
      return( 
        <button onClick={this.props.onClick} className = {className} >{ this.props.label}</button>
      );
    }
  }


export default Button