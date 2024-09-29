import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const { login } = useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`http://localhost:3000/api/auth/login`, { email, password })
      if (response.data.success) {
        login(response.data.user)
        localStorage.setItem('token', response.data.token)
        if (response.data.user.role === 'admin') {
          navigate('/admin-dashboard')
        } else {
          navigate('/employee-dashboard')
        }
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        setError(error.response.data.error)
      } else {
        setError('server error')
      }
    }
  }
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>Employee Management System</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <h2 className='text-xl font-semibold mb-4'>Login</h2>

          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 mb-2'>
              Email
            </label>
            <input onChange={(e) => setEmail(e.target.value)} type='email' required id='email' placeholder='Email...' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500' />
          </div>

          <div className='mb-6'>
            <label htmlFor='password' className='block text-gray-700 mb-2'>
              Password
            </label>
            <input required onChange={(e) => setPassword(e.target.value)} type='password' id='password' placeholder='Password...' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500' />
          </div>

          <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center'>
              <input type='checkbox' id='remember' className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded' />
              <label htmlFor='remember' className='ml-2 block text-gray-700'>
                Remember me
              </label>
            </div>
            <div>
              <a href='#' className='text-indigo-600 hover:text-indigo-800 text-sm'>
                Forgot password?
              </a>
            </div>
          </div>

          <button type='submit' className='w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
