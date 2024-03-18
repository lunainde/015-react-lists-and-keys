import React from 'react'



function StudentList() {

  const students = ['Marc', 'Lucy', 'Anna'];

  return (
    <div className="list">

      <h2>Student List</h2>
      {/* ADD KEY to identify which items have changed, are added, or removed */}
      { students.map((name, index) => {
        return <p key={index}> { name } </p>
      })}
      <p>SimpleList.jsx:8 Warning: Each child in a list should have a unique "key" prop.</p>
    </div>
  );
}

export default StudentList;