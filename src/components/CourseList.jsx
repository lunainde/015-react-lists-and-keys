import React from 'react'

const courses = ['Web Development', 'Data Analytics', 'UX/UI', 'Cybersecurity'];

function CourseList() {
  return (
    <div className="list">
      <h2>List of Courses</h2>
      {courses.map(courseName => {
        return <p>{courseName}</p>
      })}
    </div>
  )
}

export default CourseList