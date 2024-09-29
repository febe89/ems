const SummaryCard = ({ icon, text, number,color }) => {
  return (
    <div className={`bg-${color}  rounded-lg p-4 shadow-md flex items-center space-x-4`}>
      <div className="text-4xl text-blue-500">
        {icon}
      </div>
      <div>
        <p className="text-lg font-medium text-gray-700">{text}</p>
        <p className="text-2xl font-bold text-gray-900">{number}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
