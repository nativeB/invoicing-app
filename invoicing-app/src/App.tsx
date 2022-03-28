import React from 'react';
import Demo from './views/Demo';
import Invoices from './views/Invoices';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App dark">
      <Routes>
        <Route path="/demo" element={<Demo />}>
        </Route>
        <Route path="/" element={<Invoices />}> 
        </Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
