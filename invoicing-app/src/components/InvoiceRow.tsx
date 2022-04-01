import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {ReactComponent as ArrowRight} from "../assets/icon-arrow-right.svg";
import { formatDateNice, formatNumber } from '../helpers';
import InvoiceId from './invoiceId';
import InvoiceStatusTag from './InvoiceStatusTag';

type Props = {
    item: {
      id: string;
      paymentDue: string;
      clientName: string;
      total: number;
      status: "paid" | "pending"| "draft",
      
  }
}

function InvoiceRow(props: Props) {
  const navigate = useNavigate()
  const { item } = props;
  const { id, paymentDue, clientName, total, status } = item;
    return (
      <div className='invoice-row ' onClick={()=>{
        navigate(`/invoices/${id}`)
      }}>
       <InvoiceId id = {id}/>
        <h3 className='text-sm'> {formatDateNice(paymentDue)}</h3>
        <h3 className='text-sm'> {clientName}</h3>
        <h2 > {formatNumber(total)}</h2>
        <InvoiceStatusTag status={status}/>
       <div>
        <ArrowRight/>
        </div>
      </div>
    );
}


function mapStateToProps(state: { app: any; }) {
  const app = state.app;
  return {
    app
  };
}
export default connect(mapStateToProps)(InvoiceRow);
