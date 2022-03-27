import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";
type Props = {
    label: string,
    type: "violet"|"dark"|"dark-light"|"red"|"grey"|"grey-light"
    size: "medium"|"large"
    customClass?: string[],
    iconClass: string[]
    icon?: IconProp,
    onClick: (event:any)=>void
}

class Button extends React.Component<Props> {
    static defaultProps = {
        type: "violet",
        size: "medium",
        customClasses: [],
        iconClass: []
      };
    render() {

     const className = `text-sm-bold ${this.props.type} ${this.props.size} ${(this.props.customClass || []).join(' ')}`;
     
     let icon = <></>;
     if(this.props.icon){
         icon = <FontAwesomeIcon  className={this.props.iconClass.join(' ')} icon={this.props.icon} />
     }
     return( 
        <button onClick={this.props.onClick} className = {className} > 
        {icon}
        <span>{ this.props.label}</span>
        </button>
      );
    }
  }


export default Button