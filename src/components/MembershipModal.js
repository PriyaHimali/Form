import React from 'react';

const MembershipModal = ({ showModal, onClose, onContinue, selectedMembership, setSelectedMembership }) => {
  const onMembershipChange = (event) => {
    setSelectedMembership(event.target.value);
  };
   
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          <div className="relative w-96 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">Choose Membership</h2>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="1-month"
                  checked={selectedMembership === '1-month'}
                  onChange={onMembershipChange}
                  className="form-radio h-5 w-5 text-blue-500"
                />
                <span className="ml-2">1 Month (500 Rs/Month)</span>
              </label>
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="3-months"
                  checked={selectedMembership === '3-months'}
                  onChange={onMembershipChange}
                  className="form-radio h-5 w-5 text-blue-500"
                />
                <span className="ml-2">3 Months (1500 Rs Total)</span>
              </label>
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="6-months"
                  checked={selectedMembership === '6-months'}
                  onChange={onMembershipChange}
                  className="form-radio h-5 w-5 text-blue-500"
                />
                <span className="ml-2">6 Months (3000 Rs Total)</span>
              </label>
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="yearly"
                  checked={selectedMembership === 'yearly'}
                  onChange={onMembershipChange}
                  className="form-radio h-5 w-5 text-blue-500"
                />
                <span className="ml-2">Yearly (6000 Rs Total)</span>
              </label>
            </div>
            <button
              onClick={onContinue}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Proceed To Payments
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MembershipModal;
