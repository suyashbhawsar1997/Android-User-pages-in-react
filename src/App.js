import './App.css';
import PaymentMade from './Component/Payments/Payment_Made';
import Available from './Component/Available/available'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PaymentMade />}/>
          <Route path="/available" element={<Available/>}/>
      </Routes>
    </>
  );
}

export default App;
