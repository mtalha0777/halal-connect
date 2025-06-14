import React from 'react';
import { MoreVertical } from 'lucide-react';

const FeatureSubscriptionPlans = () => {
  const subscriptionPlans = [
    {
      planId: '01',
      benefits: '10 Super Like',
      price: '9.99 $',
      duration: '1 Hour',
      status: 'Active',
    },
    {
      planId: '02',
      benefits: '20 Super Like',
      price: '14.99 $',
      duration: '1 Hour',
      status: 'Active',
    },
    {
      planId: '03',
      benefits: '40 Super Like',
      price: '99.99 $',
      duration: '1 Hour',
      status: 'Disable',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <h3 className="text-lg font-semibold mb-4">Feature Subscription Plans</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
           <tr  className="bg-gray-100 rounded-md">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Plan ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Benefits</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Price ($)</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Duration</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {subscriptionPlans.map((plan, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{plan.planId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{plan.benefits}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{plan.price}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{plan.duration}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-3 py-1 inline-flex text-sm leading-5 font-normal rounded-full ${
                    plan.status === 'Active' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'
                  }`}
                >
                  {plan.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <MoreVertical className="h-5 w-5 text-gray-500" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeatureSubscriptionPlans;