import { createSlice } from '@reduxjs/toolkit'

export const InvoiceSlice = createSlice({
  name: 'app',
  initialState: {
    data: []
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    setOneInvoice: (state, action) => {
      switch(action.payload.type) {
        case "add":
          state.data = [...state.data, action.payload] as any
          break;
        case "update":
          const data:any = state.data.map((invoice:any) => {
            if(invoice.id === action.payload.id) {
              return action.payload
            }
            return invoice
          })
          state.data = data
    }
  }
}
})

export const { setData, setOneInvoice } = InvoiceSlice.actions

export default InvoiceSlice.reducer