import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-white text-xl font-bold">
          Admin Dashboard
        </div>

        {/* Welcome message and Logout Button */}
        <div className="flex items-center space-x-4">
          <p className="text-white">
            Welcome, <span className="font-semibold">{user.name}</span>
          </p>
          <button 
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
