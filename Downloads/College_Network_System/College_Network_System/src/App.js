import React from 'react';
import { useSelector } from 'react-redux';
import LoginPage from './components/Login';
import StudentProfile from './components/StudentProfile';
import FacultyProfile from './components/FacultyProfile';
import AdminDashboard from './components/AdminDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const role = useSelector((state) => state.user.role);

  return (
    <div>
      {role === '' && <LoginPage />}
      {role === 'Student' && <StudentProfile />}
      {role === 'FacultyMember' && <FacultyProfile />}
      {role === 'Administrator' && <AdminDashboard />}
    </div>
  );
};

export default App;
