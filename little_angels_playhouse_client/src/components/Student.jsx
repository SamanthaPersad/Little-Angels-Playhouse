import React from 'react';

const Student = (props) => {
  const studentStyle = {
    backgroundColor: 'sandybrown',
    margin: '0 600px 0 600px',
  }
  return (<div style={studentStyle}>
          <p> Name: {props.student.first_name} {props.student.last_name} </p>
          <p> Age: {props.student.age} </p>
          <button style={{'backgroundColor':'lightblue'}} 
          onClick={() => props.delete(props.student.id)}> Delete </button>
          <button style={{'backgroundColor':'lightblue'}}
          onClick={() => props.showEditForm(props.student.id)}>Edit</button>
          </div>
          )
} 
export default Student