import React, { useState } from 'react';

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    course: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Student Details:', student);
    // Here you can send `student` data to your backend or API
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Course:</label>
        <input
          type="text"
          name="course"
          value={student.course}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
