import React, { useState } from 'react';
import Summary from './summery';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: 'No',
    guestName: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid';
    if (!formData.age) formErrors.age = 'Age is required';
    else if (isNaN(formData.age) || formData.age <= 0) formErrors.age = 'Age must be a number greater than 0';
    if (formData.attendingWithGuest === 'Yes' && !formData.guestName) formErrors.guestName = 'Guest Name is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(formErrors);
    }
  };

  if (submitted) {
    return (
      <Summary formData={formData}/>
    );
  }

  return (
    <form className="mt-5 mx-5" onSubmit={handleSubmit} noValidate>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input 
          type="text" 
          className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
        <div className="invalid-feedback">{errors.name}</div>
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input 
          type="email" 
          className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        <div className="invalid-feedback">{errors.email}</div>
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input 
          type="number" 
          className={`form-control ${errors.age ? 'is-invalid' : ''}`} 
          id="age" 
          name="age" 
          value={formData.age} 
          onChange={handleChange} 
        />
        <div className="invalid-feedback">{errors.age}</div>
      </div>

      <div className="mb-3">
        <label htmlFor="attendingWithGuest" className="form-label">Are you attending with a guest?</label>
        <select 
          className="form-select" 
          id="attendingWithGuest" 
          name="attendingWithGuest" 
          value={formData.attendingWithGuest} 
          onChange={handleChange}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      {formData.attendingWithGuest === 'Yes' && (
        <div className="mb-3">
          <label htmlFor="guestName" className="form-label">Guest Name</label>
          <input 
            type="text" 
            className={`form-control ${errors.guestName ? 'is-invalid' : ''}`} 
            id="guestName" 
            name="guestName" 
            value={formData.guestName} 
            onChange={handleChange} 
          />
          <div className="invalid-feedback">{errors.guestName}</div>
        </div>
      )}

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Registration;
