const BASE_URL=process.env.REACT_APP_API_URL || 'http://localhost:3001'

function fetchStudents() {
   return fetch(BASE_URL + '/students')
   .then(resp => resp.json())
   .catch(err => {
    throw Error(err);
  });
}

export  {
    fetchStudents, updateStudent, createStudentt, deleteStudentt
   
};