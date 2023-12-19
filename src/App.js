import './App.css';
import React, { useState } from 'react';
import YogaAdmissionForm from './components/YogaAdmissionForm.js'
import Payments from './components/Payments.js'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    batch: '6-7AM', // Default batch
  });
  const [selectedMembership, setSelectedMembership] = useState('1-month');

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" exact element={<YogaAdmissionForm formData={formData} setFormData={setFormData} selectedMembership={selectedMembership} setSelectedMembership={setSelectedMembership}/>} />
          <Route path="/payments" element={<Payments formData={formData} selectedMembership={selectedMembership} setSelectedMembership={setSelectedMembership}/>} /> 
        </Routes>
    </Router>
    </>
  );
}

export default App;
