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
        if(invoiceIndex !== -1){
          const invoice = cloneDeep(state.data)
          invoice[invoiceIndex] = action.payload
            state.data = invoice
        }else{
          state.data = [...state.data, action.payload]
        }
    },
    setEditingInvoice: (state, action) => {
      state.editingInvoice = action.payload
    }
}
})

export const { setData, setOneInvoice } = InvoiceSlice.actions

export default InvoiceSlice.reducer