import { createSlice } from '@reduxjs/toolkit'
import { cloneDeep } from 'lodash-es'
import data from "../../../data/data.json"
export const InvoiceSlice = createSlice({
  name: 'invoice',
  initialState: {
    data: data || [],
    editingInvoice: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    setOneInvoice: (state, action) => {
        const { id } = action.payload
        const invoiceIndex = state.data.findIndex(invoice => invoice.id === id)
        let { data} = state;
        data = [...data]
        if(invoiceIndex !== -1){
          const invoice = cloneDeep(data)
          invoice[invoiceIndex] = action.payload
            data = invoice
            console.log({invoiceIndex,id, invoice: invoice[invoiceIndex]})
        }else{
          data = [...data, action.payload]
        }
        return {
          ...state,
          data
        }
    },
    setEditingInvoice: (state, action) => {
      return {
        ...state,
        editingInvoice:  action.payload
      }
    }
}
})

export const { setData, setOneInvoice } = InvoiceSlice.actions

export default InvoiceSlice.reducer