
function OrganisationRequests() {
  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-2">
        Organisation Requests
      </h1>

      <p className="text-gray-500 mb-6">
        Review hospital and ambulance service registration requests.
      </p>

      <div className="bg-white rounded-lg shadow p-5">

        <h2 className="text-lg font-semibold mb-4">
          Pending Requests
        </h2>

        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Organisation Name</th>
              <th className="border p-3 text-left">Type</th>
              <th className="border p-3 text-left">Email</th>
              <th className="border p-3 text-left">Status</th>
              <th className="border p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="5" className="text-center p-6 text-gray-500">
                No organisation requests available.
              </td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  )
}

export default OrganisationRequests
