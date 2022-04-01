import { createSlice } from '@reduxjs/toolkit'

export const AppSlice = createSlice({
  name: 'app',
  initialState: {
    mode: "light",
    toggleInvoiceSideBar: "",
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload
      return state
    },
    toggleInvoiceSideBar: (state, action) => {
      state.toggleInvoiceSideBar =  action.payload
      return state
    }
  },
})

export const { setMode, toggleInvoiceSideBar } = AppSlice.actions

export default AppSlice.reducer