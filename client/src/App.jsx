import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import DoctorsPage from "./pages/DoctorsPage";
import PatientsPage from "./pages/PatientsPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import BillingPage from "./pages/BillingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="/doctors"
          element={<DoctorsPage />}
        />

        <Route
          path="/patients"
          element={<PatientsPage />}
        />

        <Route
          path="/appointments"
          element={<AppointmentsPage />}
        />

        <Route
          path="/billing"
          element={<BillingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;