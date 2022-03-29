import { createSlice } from '@reduxjs/toolkit'

export const AppSlice = createSlice({
  name: 'app',
  initialState: {
    mode: "light",
    toggleInvoiceSideBar: false,
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload
    },
    toggleInvoiceSideBar: (state) => {
      state.toggleInvoiceSideBar =  !state.toggleInvoiceSideBar
    }
  },
})

export const { setMode, toggleInvoiceSideBar } = AppSlice.actions

export default AppSlice.reducer