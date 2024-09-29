import { FaUsers } from 'react-icons/fa'
import SummaryCard from './SummaryCard'

const AdminSummary = () => {
  return (
    <div className='p-6 bg-gray-100 '>
      <h3 className='text-2xl font-bold mb-6 text-gray-700'>Dashboard Overview</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <SummaryCard icon={<FaUsers className='text-blue-500 text-3xl' />} text='Total Employees' number={13} color='red-200' />
        <SummaryCard icon={<FaUsers className='text-blue-500 text-3xl' />} text='Total Employees' number={13} color='yellow-300' />
        <SummaryCard icon={<FaUsers className='text-blue-500 text-3xl' />} text='Total Employees' number={13} color='yellow-300' />
        {/* Add more summary cards here if needed */}
      </div>
        <div className='grid mt-28  grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
          <SummaryCard icon={<FaUsers className='text-blue-500 text-3xl' />} text='Total Employees' number={13} color='red-200' />
          <SummaryCard icon={<FaUsers className='text-blue-500 text-3xl' />} text='Total Employees' number={13} color='yellow-300' />
          {/* Add more summary cards here if needed */}
        </div>
    </div>
  )
}

export default AdminSummary
