import React from "react";


function Summary({formData}){
    return <div className="mt-5 mx-5 text-center">
    <h3>Registration Summary</h3>
    <p className="mt-5"><strong>Name:</strong> {formData.name}</p>
    <p><strong>Email:</strong> {formData.email}</p>
    <p><strong>Age:</strong> {formData.age}</p>
    <p><strong>Attending with Guest:</strong> {formData.attendingWithGuest}</p>
    {formData.attendingWithGuest === 'Yes' && <p><strong>Guest Name:</strong> {formData.guestName}</p>}
  </div>
}

export default Summary;