import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

function PatientsPage() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/api/patients",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPatients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Patients
        </h1>

        <Link
          to="/patients/add"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Patient
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Blood Group</th>
              <th className="p-4 text-left">Emergency Contact</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((patient) => (
              <tr
                key={patient._id}
                className="border-t"
              >
                <td className="p-4">
                  {patient.userId?.firstName}{" "}
                  {patient.userId?.lastName}
                </td>

                <td className="p-4">
                  {patient.userId?.email}
                </td>

                <td className="p-4">
                  {patient.bloodGroup}
                </td>

                <td className="p-4">
                  {patient.emergencyContact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default PatientsPage;