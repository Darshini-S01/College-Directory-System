import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const FacultyProfile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Faculty Profile</h2>
      <div className="card">
        <img src={user.photo} className="card-img-top" alt="Profile" />
        <div className="card-body">
          <p className="card-text"><strong>Name:</strong> {user.name}</p>
          <p className="card-text"><strong>Contact:</strong> {user.email}</p>
          <p className="card-text"><strong>Office Hours:</strong> {user.officeHours}</p>
          <p className="card-text"><strong>Department:</strong> {user.department}</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
