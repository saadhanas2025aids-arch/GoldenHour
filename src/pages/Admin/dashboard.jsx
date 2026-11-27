
function AdminDashboard() {
  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-2">
        Admin Dashboard
      </h1>

      <p className="text-gray-500 mb-6">
        Welcome to the GoldenHour Admin Dashboard.
      </p>

      <div className="grid grid-cols-3 gap-4">

        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="text-gray-500">Total Hospitals</h2>
          <p className="text-2xl font-bold">0</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="text-gray-500">Ambulance Services</h2>
          <p className="text-2xl font-bold">0</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="text-gray-500">Pending Requests</h2>
          <p className="text-2xl font-bold">0</p>
        </div>

      </div>

    </div>
  )
}

export default AdminDashboard
