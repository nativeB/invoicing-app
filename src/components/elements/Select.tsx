import React from 'react';

type Props = {
    label: string,
    customClass?: string[],
    placeholder?: string;
    onChange: (event:any)=>void;
    options: {label: string, value: string}[]
}

class Select extends React.Component<Props> {
  static defaultProps = {
    customClasses: [],
    options: [],
  };

  render() {
    const className = (this.props.customClass || []).join(' ');
    const options = this.props.options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>);
    return (
      <div className="input-wrapper">
        <label>
          {' '}
          {this.props.label}
        </label>
        <select placeholder={this.props.placeholder} onChange={this.props.onChange} className={className}>
          {options}
        </select>

      </div>
    );
  }
}

export default Select;