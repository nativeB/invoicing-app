import React from 'react';
import { ReactComponent as IllustrationEmpty } from '../assets/illustration-empty.svg';

type Props = {
    title: string,
    description: string
}

class InvoiceEmpty extends React.Component<Props> {
  static defaultProps = {
    title: '',
    description: '',
  };

  render() {
    return (
      <div className='invoice-empty'>
        <IllustrationEmpty />
        <h3 className='text-sm'> There is nothing here</h3>
        <p className='text-xs'> Create an invoice by clicking the <b>New Invoice</b> button and get started</p>
      </div>
    );
  }
}


export default InvoiceEmpty;
