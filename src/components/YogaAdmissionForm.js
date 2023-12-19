import React, { useState } from 'react';
import MembershipModal from './MembershipModal.js'
import { useNavigate } from 'react-router-dom';

const YogaAdmissionForm = ({ formData, setFormData, selectedMembership, setSelectedMembership }) => {
 
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.age < 18 || formData.age > 65) {
      alert('Invalid age. Please enter an age between 18 and 65.');
      return;
    }
    setShowModal(true);
  };

  const handleMembershipSelection = (membership) => {
    setSelectedMembership(membership);
  };

  const handleContinue = () => {
    // Route to payments page with selected membership
    // For now, just display the selected membership in the console
    console.log('Selected Membership:', selectedMembership);
    navigate('/payments');
    // You can use React Router or your preferred routing method here

    // Close the modal
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Yoga Classes Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-2 border-grey text-center"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Age:</span>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-2 border-grey text-center"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Preferred Batch:</span>
          <select
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            className="form-select mt-1 block w-full border-3 border-grey border-2 border-grey text-center"
          >
            <option value="6-7AM">Batch 1 : 6-7 AM</option>
            <option value="7-8AM">Batch 2 : 7-8 AM</option>
            <option value="8-9AM">Batch 3 : 8-9 AM</option>
            <option value="5-6PM">Batch 4 : 5-6 PM</option>
          </select>
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
      </form>

       {/* Modal */}
       <MembershipModal
        showModal={showModal}
        onClose={handleCloseModal}
        onContinue={handleContinue}
        selectedMembership={selectedMembership}
        setSelectedMembership={setSelectedMembership}
      />
    </div>
  );
};

export default YogaAdmissionForm;
