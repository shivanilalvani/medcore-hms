import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import DoctorsPage from "./pages/DoctorsPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import BillingPage from "./pages/BillingPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./pages/AdminDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import UsersPage from "./pages/UsersPage";
import PatientsPage from "./pages/PatientsPage";
import AddPatientPage from "./pages/AddPatientPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import AddDepartmentPage from "./pages/AddDepartmentPage";
import AddDoctorPage from "./pages/AddDoctorPage";

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
          path="/appointments"
          element={<AppointmentsPage />}
        />

        <Route
          path="/billing"
          element={<BillingPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="/doctor-dashboard"
          element={<DoctorDashboard />}
        />

        <Route
          path="/patient-dashboard"
          element={<PatientDashboard />}
        />

        <Route
          path="/users"
          element={<UsersPage />}
        />

        <Route
          path="/patients"
          element={<PatientsPage />}
        />

        <Route
          path="/patients/add"
          element={<AddPatientPage />}
        />

        <Route
          path="/departments"
          element={<DepartmentsPage />}
        />

        <Route
          path="/departments/add"
          element={<AddDepartmentPage />}
        />

        <Route
          path="/doctors/add"
          element={<AddDoctorPage />}
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;