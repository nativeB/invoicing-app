import {ReactComponent as ArrowDown} from "../../assets/icon-arrow-down.svg";
import React from "react";
type Props = {
    label: string,
    customClass?: string[],
    placeholder?: string;
    onChange: (event:any)=>void;
    options: {label: string, value: string}[]
}

class Dropdown extends React.Component<Props> {
    static defaultProps = {
        customClasses: [],
        options: []
      };
    render() {

     const className = `dropbtn text-xs ${(this.props.customClass || []).join(' ')}`;
     const options = this.props.options.map((option,index) =>{
        return  <span onClick={()=>this.props.onChange(option.value)} key={index} >{option.label}</span>
     })
      return( 
    <div className="dropdown">
    <div className={className}>
      <span className="dropbtn">{this.props.label}</span>
      <ArrowDown/>
      </div>
    <div className="dropdown-content text-sm">
    {options}
    </div>
    </div>
     );
    }
  }

export default Dropdown