import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddDepartment = () => {
  const [department, setDepartment] = useState({
    dep_name: '',
    description: ''
  })
  const navigate = { useNavigate }
  const handleChange = (e) => {
    setDepartment({ ...department, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/api/department/add', department,
        {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
      )
      if (response.data.success) {
        navigate('admin-dashboard/departments')
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error)
      }
    }
  }
  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <div className='bg-white p-6 rounded-lg shadow-md'>
        <h3 className='text-2xl font-bold text-gray-700 mb-6'>Add Department</h3>
        <form onSubmit={handleSubmit}>
          {/* Department Name Field */}
          <div className='mb-4'>
            <label htmlFor='dep_name' className='block text-gray-700 font-semibold mb-2'>
              Department Name
            </label>
            <input value={department.dep_name} onChange={handleChange} type='text' name='dep_name' id='dep_name' placeholder='Enter Department Name...' className='border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' required />
          </div>

          {/* Description Field */}
          <div className='mb-4'>
            <label htmlFor='description' className='block text-gray-700 font-semibold mb-2'>
              Description
            </label>
            <textarea value={department.description} onChange={handleChange} name='description' id='description' placeholder='Description' className='border border-gray-300 rounded-lg px-4 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500' required></textarea>
          </div>

          {/* Submit Button */}
          <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg'>
            Add Department
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddDepartment
