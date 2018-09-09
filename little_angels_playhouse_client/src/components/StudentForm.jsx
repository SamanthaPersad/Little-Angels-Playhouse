import React from 'react'
const style = {
  position: 'absolute',
  top: '200px',
  left:'200px',
  border: 'solid black 1px',
}


const StudentForm = (props) => {
    console.log(props);
const button = props.isEdit ? <div>
                              <button onClick={() => props.edit(props.id)}>Submit edit</button>
                              <button onClick={props.cancel}>Cancel</button>
                              </div>
                            : <div>
                              <button onClick={props.submitNew}>Submit New</button>
                              <button onClick={props.cancel}>Clear</button>
                              </div>
return(
<div className="studentForm" style={style}>
  <h3> Student Form </h3>
  <form>
    <label htmlFor="first_name">First Name:</label>
    <input 
      name="first_name"
      onChange={props.handleChange}
      value={props.first_name}
      type="text"
    />
    <br /><br />
    <label htmlFor="last_name">Last Name:</label>
    <input
      name="last_name"
      onChange={props.handleChange}
      value={props.last_name}
      type="text"
    />
    <br /><br />
    <label htmlFor="age">Age:</label>
    <input
      name="age"
      onChange={props.handleChange}
      value={props.age}
      type="text"
    />
    <br /><br />
    <label htmlFor="class_id">Class ID:</label>
    <input
      name="class_id"
      onChange={props.handleChange}
      value={props.class_id}
      type="text"
    />
  </form>
  {button}
</div>
)
}

export default StudentForm
