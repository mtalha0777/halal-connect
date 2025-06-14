
import React from 'react';
import { MoreVertical, Edit, Trash2 } from 'lucide-react';

const SubscriptionPlans = () => {
  const plans = [
    {
      id: '01',
      duration: '1 Month',
      benefits: '5',
      price: '20 $',
      status: 'Active',
    },
    {
      id: '02',
      duration: '3 Month',
      benefits: '8',
      price: '50 $',
      status: 'Active',
    },
    {
      id: '03',
      duration: '6 Month',
      benefits: '8',
      price: '100 $',
      status: 'Active',
    },
    {
      id: '04',
      duration: '1 Year',
      benefits: '12',
      price: '180 $',
      status: 'Disable',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">Subscription Plans</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
             <tr  className="bg-gray-100 rounded-md">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Plan ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Benefits</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Price ($)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {plans.map((plan, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap  text-gray-500">{plan.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{plan.duration}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{plan.benefits}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{plan.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-sm leading-5 font-normal rounded-full ${
                      plan.status === 'Active'
                        ? 'bg-green-100 text-green-500'
                        : 'bg-red-100 text-red-500'

                    }`}
                  >
                    {plan.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex space-x-3">
                  {index === 0 && <MoreVertical className="h-5 w-5 text-gray-500" />}
                  {index === 1 && <MoreVertical className="h-5 w-5 text-gray-500" />}
                  {index === 2 && <MoreVertical className="h-5 w-5 text-gray-500" />}
                  {index === 3 && <MoreVertical className="h-5 w-5 text-gray-500" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionPlans;


