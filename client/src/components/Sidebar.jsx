import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FaHospital,
  FaUserMd,
  FaUsers,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    navigate("/");
  };

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-5 flex flex-col">
      <div>
        <div className="flex items-center gap-2 mb-8">
          <FaHospital size={28} />
          <h1 className="text-xl font-bold">
            MedCore HMS
          </h1>
        </div>

        {user && (
          <div className="mb-8 border-b border-slate-700 pb-4">
            <p className="font-semibold">
              {user.firstName} {user.lastName}
            </p>

            <p className="text-sm text-gray-400">
              {user.role}
            </p>
          </div>
        )}

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
            to="/users"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaUsers />
            Users
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

      <button
        onClick={handleLogout}
        className="mt-auto flex items-center gap-3 text-red-400 hover:text-red-300"
      >
        <FaSignOutAlt />
        Logout
      </button>
    </div>
  );
}

export default Sidebar;