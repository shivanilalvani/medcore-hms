import { Link } from "react-router-dom";
import {
  FaHospital,
  FaUserMd,
  FaUsers,
  FaCalendarCheck,
  FaMoneyBillWave,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-5">
      <div className="flex items-center gap-2 mb-8">
        <FaHospital size={28} />
        <h1 className="text-xl font-bold">
          MedCore HMS
        </h1>
      </div>

      <nav className="space-y-4">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaHospital />
          Dashboard
        </Link>

        <Link
          to="/doctors"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaUserMd />
          Doctors
        </Link>

        <Link
          to="/patients"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaUsers />
          Patients
        </Link>

        <Link
          to="/appointments"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaCalendarCheck />
          Appointments
        </Link>

        <Link
          to="/billing"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaMoneyBillWave />
          Billing
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;