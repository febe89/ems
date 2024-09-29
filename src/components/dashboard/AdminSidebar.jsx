import { NavLink } from 'react-router-dom'
import { FaBuilding, FaCalendar, FaMoneyBill, FaTachometerAlt, FaToolbox, FaUsers } from 'react-icons/fa'

const AdminSidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-xl font-bold">Employee MS</h3>
      </div>
      <nav className="flex flex-col p-4 space-y-4">
        <NavLink
          to="/admin-dashboard"
          className={({isActive}) => `${isActive ?"bg-gray-600":" "}flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-md`}
          activeclassname="bg-gray-700"
          end
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin-employees"
          className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-md"
          activeclassname="bg-gray-700"
        >
          <FaUsers />
          <span>Employee</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard/departments"
          className={({isActive}) => `${isActive ?"bg-gray-600":" "}flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-md`}
          activeclassname="bg-gray-700"
        >
          <FaBuilding />
          <span>Department</span>
        </NavLink>
        <NavLink
          to="/admin-leave"
          className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-md"
          activeclassname="bg-gray-700"
        >
          <FaCalendar />
          <span>Leave</span>
        </NavLink>
        <NavLink
          to="/admin-salary"
          className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-md"
          activeclassname="bg-gray-700"
        >
          <FaMoneyBill />
          <span>Salary</span>
        </NavLink>
        <NavLink
          to="/admin-settings"
          className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-md"
          activeclassname="bg-gray-700"
        >
          <FaToolbox />
          <span>Settings</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default AdminSidebar
