import React from "react";
import {ReactComponent as Plus} from "../../assets/icon-plus.svg";
type Props = {
    label: string,
    type: "violet"|"dark"|"dark-light"|"red"|"grey"|"grey-light"
    size: "medium"|"large"
    customClass?: string[],
    iconClass?: string[]
    icon?: "plus" | "none",
    onClick: (event:any)=>void
}

class Button extends React.Component<Props> {
    static defaultProps = {
        type: "violet",
        size: "medium",
        icon: "plus",
        customClasses: [],
      };
    render() {

     const className = `text-sm-bold ${this.props.type} ${this.props.size} ${(this.props.customClass || []).join(' ')}`;
     
     let icon = <></>;
     if(this.props.icon === "plus"){
         icon = <Plus className={(this.props.iconClass||[]).join(' ')} />
     }
     return( 
        <button onClick={this.props.onClick} className = {className} > 
        <span className="icon"> {icon} </span>
        <span>{ this.props.label}</span>
        </button>
      );
    }
  }


export default Button