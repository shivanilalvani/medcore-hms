import DashboardLayout from "../layouts/DashboardLayout";

function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500">
            Doctors
          </h2>

          <p className="text-3xl font-bold">
            12
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500">
            Patients
          </h2>

          <p className="text-3xl font-bold">
            124
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500">
            Appointments
          </h2>

          <p className="text-3xl font-bold">
            38
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500">
            Revenue
          </h2>

          <p className="text-3xl font-bold">
            ₹45,000
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashboardPage;