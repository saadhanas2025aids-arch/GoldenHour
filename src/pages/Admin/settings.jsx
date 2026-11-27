
function AdminSettings() {
  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-2">
        Admin Settings
      </h1>

      <p className="text-gray-500 mb-6">
        Manage your Admin account settings.
      </p>

      <div className="bg-white p-5 rounded-lg shadow max-w-xl">

        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Admin Name
          </label>

          <input
            type="text"
            placeholder="Enter admin name"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter email"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <button
          type="button"
          className="bg-slate-900 text-white px-5 py-3 rounded-lg"
        >
          Save Changes
        </button>

      </div>

    </div>
  )
}

export default AdminSettings
