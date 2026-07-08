import { useState } from "react";
import { registerUser } from "../services/authService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("HOSPITAL_ADMIN");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await registerUser({
                hospitalId: "6a4d15f9bf4fb6d4234b18ff",
                firstName,
                lastName,
                email,
                password,
                role,
            });

            alert("User registered successfully");
            navigate("/");

            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setRole("HOSPITAL_ADMIN");
        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Registration failed"
            );
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Register User
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full border p-3 rounded-lg"
                        value={firstName}
                        onChange={(e) =>
                            setFirstName(e.target.value)
                        }
                        required
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full border p-3 rounded-lg"
                        value={lastName}
                        onChange={(e) =>
                            setLastName(e.target.value)
                        }
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border p-3 rounded-lg"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border p-3 rounded-lg"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                    />

                    <select
                        className="w-full border p-3 rounded-lg"
                        value={role}
                        onChange={(e) =>
                            setRole(e.target.value)
                        }
                    >
                        <option value="HOSPITAL_ADMIN">
                            Hospital Admin
                        </option>
                        <option value="DOCTOR">
                            Doctor
                        </option>
                        <option value="NURSE">
                            Nurse
                        </option>
                        <option value="RECEPTIONIST">
                            Receptionist
                        </option>
                        <option value="LAB_TECHNICIAN">
                            Lab Technician
                        </option>
                        <option value="PHARMACIST">
                            Pharmacist
                        </option>
                        <option value="ACCOUNTANT">
                            Accountant
                        </option>
                        <option value="PATIENT">
                            Patient
                        </option>
                    </select>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                    >
                        Register
                    </button>

                    <p className="text-center mt-4">
                        Already have an account?{" "}
                        <Link
                            to="/"
                            className="text-blue-600 font-semibold"
                        >
                            Login
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    );
}

export default RegisterPage;