# College Directory Application

## Objective
The College Directory Application aims to facilitate seamless interaction between students, faculty members, and administrators within a single college. This application enables users to efficiently manage and access personal and academic information.

## User Roles
- **Student**
- **Faculty Member**
- **Administrator**

## Features
### 1. Login Page
- Simple user interface with fields for Username, Password, and a role selection dropdown.
- Validates user credentials against the database.
- Redirects users to their respective dashboards based on their role.
- Implements error handling for incorrect credentials.

### 2. Student Interface
- **View Personal Profile**: Displays personal and academic information.
- **Search for Other Students**: Allows searching by name, department, or year.
- **Contact Faculty Advisors**: Provides a list of assigned faculty advisors with contact options.

### 3. Faculty Member Interface
- **Manage Class List**: Displays a list of students in the faculty member's courses.
- **Update Profile**: Form to update office hours, email, and phone number.

### 4. Administrator Interface
- **Manage Student and Faculty Records**: Enables CRUD operations for user records.
- **Dashboard with Graphs**: Provides graphical representations of key data points.

## Technical Requirements
- **Frontend**: Built using React or HTML/CSS/JavaScript with state management for handling form inputs and API responses.
- **Backend**: Developed with Java and the Spring Boot framework, featuring RESTful API endpoints for user authentication, CRUD operations, and data aggregation.
- **Authentication**: Implements JWT or session-based authentication with role-based access control.
- **Database**: Uses PostgreSQL to manage user profiles, course data, and departmental information.

## Database Entities
- **User**: Stores login credentials and contact information.
- **StudentProfile**: Extends User with academic details.
- **FacultyProfile**: Extends User with faculty-specific information.
- **AdministratorProfile**: Extends User with admin-specific information.
- **Course**: Contains course information.
- **Enrollment**: Represents student enrollment in courses.
- **Department**: Stores information about various departments.

## Relationships
- One-to-One relationship between User and Profile entities.
- One-to-Many relationship between FacultyProfile and Course.
- Many-to-Many relationship between StudentProfile and Course via Enrollment.
- One-to-Many relationship between Department and related entities.
