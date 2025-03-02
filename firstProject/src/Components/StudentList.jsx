import React, { useState } from 'react';

const StudentList = () => {
    const [students, setStudents] = useState(["ram","shyam","rahul","mohan","sohan","rohan","gaurav"]);
            const [newStudent, setNewStudent] = useState('');

    const addStudent = () => {
        if (newStudent.trim() !== '') {
            setStudents([...students, newStudent]);
            setNewStudent('');
        }
    };

    const removeStudent = (index) => {
        const updatedStudents = students.filter((_, i) => i !== index);
        setStudents(updatedStudents);
    };

    return (
        <div>
            <h2>Student List</h2>
            <input
                type="text"
                value={newStudent}
                onChange={(e) => setNewStudent(e.target.value)}
                placeholder="Enter student name"
            />
            <button onClick={addStudent}>Add Student</button>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>
                        {student}
                        <button onClick={() => removeStudent(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;