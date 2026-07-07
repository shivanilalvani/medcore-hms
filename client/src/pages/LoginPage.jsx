import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/authService";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = await loginUser({
      email,
      password,
    });

    localStorage.setItem(
      "token",
      data.token
    );

    setUser(data.user);

    navigate("/dashboard");
  } 
  catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Login failed"
    );
  }
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          MedCore HMS
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label className="block mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              className="w-full border rounded-lg p-3"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          <div>
            <label className="block mb-1">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full border rounded-lg p-3"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;