import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers/app'
import invoiceReducer from './reducers/invoice'

export const store  = configureStore({
  reducer: {
    app: appReducer,
    invoice: invoiceReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch