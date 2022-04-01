import React from "react";
import {ReactComponent as Plus} from "../../assets/icon-plus.svg";
type Props = {
    label: string,
    size: "medium"|"large"
    customClass?: string[],
    iconClass?: string[]
    icon?: "plus" | "none",
    onClick?: (event:any)=>void,
    type: "button"|"submit"
}

class Button extends React.Component<Props> {
    static defaultProps = {
        size: "medium",
        icon: "",
        customClasses: [],
        type: "button"
      };
    render() {

     const className = `text-sm-bold ${(this.props.customClass || []).join(' ')}`;
     
     let icon = <></>;
     if(this.props.icon === "plus"){
         icon = <Plus/>
     }
     return( 
        <button type={this.props.type} onClick={this.props.onClick} className = {className} > 
        <span className={(this.props.iconClass||[]).join(' ')} > {icon} </span>
        <span className="button-text">{ this.props.label}</span>
        </button>
      );
    }
  }


export default Button