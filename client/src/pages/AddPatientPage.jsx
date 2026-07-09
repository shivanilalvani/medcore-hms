import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

function AddPatientPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        gender: "",
        bloodGroup: "",
        emergencyContact: "",
        allergies: "",
        medicalHistory: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            await axios.post(
                "http://localhost:5000/api/patients",
                {
                    hospitalId:
                        "6a4d15f9bf4fb6d4234b18ff",
                    ...formData,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            alert("Patient added successfully");

            navigate("/patients");
        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message
            );
        }
    };

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-6">
                Add Patient
            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow space-y-4"
            >
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <select
                    name="gender"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                >
                    <option value="">
                        Select Gender
                    </option>

                    <option value="MALE">
                        Male
                    </option>

                    <option value="FEMALE">
                        Female
                    </option>

                    <option value="OTHER">
                        Other
                    </option>
                </select>

                <input
                    type="text"
                    name="bloodGroup"
                    placeholder="Blood Group"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="emergencyContact"
                    placeholder="Emergency Contact"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Add Patient
                </button>
            </form>
        </DashboardLayout>
    );
}

export default AddPatientPage;