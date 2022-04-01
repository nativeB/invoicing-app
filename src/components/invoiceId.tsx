import React from 'react';

type Props = {
    id: string,
    customClass?: string,
}

class InvoiceId extends React.Component<Props> {
  static defaultProps = {
    id: [],
    customClass: "",
  };

  render() {
    return (
      <h3 className={`text-sm-bold ${this.props.customClass}`}> <span className='pound'>#</span>{this.props.id}</h3>
    );
  }
}

export default InvoiceId;
