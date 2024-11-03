import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = prompt("Enter your full name:");
    const email = prompt("Enter your email:");
    const photo = prompt("Enter your photo URL:");
    const department = prompt("Enter your department:");
    const year = role === 'Student' ? prompt("Enter your year of study:") : '';
    const officeHours = role === 'FacultyMember' ? prompt("Enter your office hours:") : '';
    
    dispatch(login({ username, password, role, name, email, photo, department, year, officeHours }));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleSubmit} className="col-md-6 offset-md-3">
        <div className="form-group">
          <label>Username</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select className="form-control" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Student">Student</option>
            <option value="FacultyMember">Faculty Member</option>
            <option value="Administrator">Administrator</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
