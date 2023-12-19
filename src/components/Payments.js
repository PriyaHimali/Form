// import React, { useState } from 'react';

const Payments = ({formData,selectedMembership}) => {

//   const onConfirmPayment=()=.{
//     alert("wooohooo");
//   } 
// const [confirmationMessage, setConfirmationMessage] = useState('');

const handleConfirmPayment = () => {
    window.alert('Hurray!! Payment has been confirmed');
}; 
  return (
    <div>
         <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
      <table className="table-auto w-full mb-4">
        <tbody>
          <tr>
            <td className="border px-4 py-2">Name:</td>
            <td className="border px-4 py-2">{formData.name}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Age:</td>
            <td className="border px-4 py-2">{formData.age}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Batch:</td>
            <td className="border px-4 py-2">{formData.batch}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Selected Membership:</td>
            <td className="border px-4 py-2">{selectedMembership}</td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={handleConfirmPayment}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mx-auto block"
      >
        Confirm Payment
      </button>
    </div>
    </div>
  )
}

export default Payments