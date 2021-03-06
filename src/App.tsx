import React from 'react';
import Demo from './views/Demo';
import Invoices from './views/Invoices';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import InvoiceSideHeader from './components/InvoiceSideBar';
import InvoiceSideContent from './views/InvoicesSideContent';
import InvoicesView from './views/InvoicesView';

function App() {
  return (
      <Router>
      <div className="App">
        <Routes>
          <Route path="/invoicing-app" element={<Invoices />}> 
          </Route>
          <Route path="/invoicing-app/demo" element={<Demo />}>
          </Route>
         
          <Route path="/invoicing-app/invoices/:id" element={<InvoicesView />}> 
          </Route>
        </Routes>

      <div className='App-side'>
        <InvoiceSideHeader/>
        <InvoiceSideContent/>
      </div>
      </div>
    </Router>
  );
}

export default App;
