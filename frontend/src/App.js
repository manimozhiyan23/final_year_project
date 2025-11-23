import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLogin from "../src/pages/customerLogin";
import WorkerLogin from "../src/pages/workerLogin";
import WorkerSignup from "../src/pages/workersignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/worker-login" element={<WorkerLogin />} />
        <Route path="/worker-signup" element={<WorkerSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
