import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const RoleBasedRoutes = ({ children, requiredRole }) => {
  const { user, loading } = useAuth()
  if (loading) {
    return <div className=''>Loading....</div>
  }
  if (!requiredRole.includes(user.role)) {
    return <Navigate to={'/unauthorized'} />
  }

  return user ? children : <Navigate to='/login' />
}

export default RoleBasedRoutes
