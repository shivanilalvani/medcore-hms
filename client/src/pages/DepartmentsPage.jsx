import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

function DepartmentsPage() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/api/departments",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDepartments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Departments
        </h1>

        <Link
          to="/departments/add"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Department
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {departments.map((department) => (
              <tr
                key={department._id}
                className="border-t"
              >
                <td className="p-4">
                  {department.name}
                </td>

                <td className="p-4">
                  {department.description}
                </td>

                <td className="p-4">
                  {department.location}
                </td>

                <td className="p-4">
                  {department.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default DepartmentsPage;