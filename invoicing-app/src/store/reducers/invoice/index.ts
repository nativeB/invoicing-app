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
        if(invoiceIndex !== -1){
          const invoice = cloneDeep(data)
          invoice[invoiceIndex] = action.payload
            data = invoice
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
    },
    removeOneInvoice: (state, action) => {
      const invoiceIndex = state.data.findIndex(invoice => invoice.id === action.payload)
      let { data} = cloneDeep(state);
      if(invoiceIndex !== -1){
        data.splice(invoiceIndex, 1)
      }
      return {
        ...state,
        data
      }
    }
}
})

export const { setData, setOneInvoice } = InvoiceSlice.actions

export default InvoiceSlice.reducer