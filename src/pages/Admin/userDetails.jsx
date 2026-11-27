
function AdminUserDetails() {
  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-2">
        User Details
      </h1>

      <p className="text-gray-500 mb-6">
        View and manage registered users in GoldenHour.
      </p>

      <div className="bg-white p-5 rounded-lg shadow">

        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-left">Email</th>
              <th className="border p-3 text-left">Role</th>
              <th className="border p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="4" className="text-center p-6 text-gray-500">
                No users available.
              </td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  )
}

export default AdminUserDetails
