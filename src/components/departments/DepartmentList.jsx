import { Link } from 'react-router-dom';

const DepartmentList = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-700">Manage Departments</h3>
      </div>

      {/* Search and Action Section */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search by Dep name"
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2"
        />
        <Link
          to="/admin-dashboard/add-department"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg ml-4"
        >
          Add New Department
        </Link>
      </div>

      {/* Department List Section (Placeholder) */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Add your department list items here */}
        <p>No departments available.</p> {/* Placeholder text */}
      </div>
    </div>
  );
};

export default DepartmentList;
