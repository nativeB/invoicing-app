import React from 'react';
import Demo from './views/Demo';
import Invoices from './views/Invoices';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import InvoiceSideHeader from './components/InvoiceSideBar';
function App() {
  return (
      <Router>
      <div className="App">
        <Routes>
          <Route path="/demo" element={<Demo />}>
          </Route>
          <Route path="/" element={<Invoices />}> 
          </Route>
        </Routes>

        <InvoiceSideHeader/>
      </div>
    </Router>
  );
}

export default App;
