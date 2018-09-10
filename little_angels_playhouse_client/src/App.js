import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Student from './components/Student';
import Login from './components/Login';

import StudentForm from './components/StudentForm';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor() {
    super();

    this.state = {
      showForm : false, 
      showAbout: false,
      showExperience: false,
      showContact: false,
      students: [],
      email: '',
      password:'',
      isLoggedIn: null,
      first_name: '',
      last_name:'',
      age: '',
      class_id: '',
      isEdit:false,
      selectedStudentId:null,
      isRegister: false,
      student: {}
    };
    this.getStudents = this.getStudents.bind(this)
    this.logout = this.logout.bind(this)
    this.login = this.login.bind(this)
    this.isLoggedIn = this.isLoggedIn.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.delete = this.delete.bind(this)
    this.submitNew = this.submitNew.bind(this)
    this.edit = this.edit.bind(this)
    this.showEditForm = this.showEditForm.bind(this)
    this.cancel = this.cancel.bind(this)
    this.register = this.register.bind(this)
    this.showRegisterForm = this.showRegisterForm.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.toggleAbout = this.toggleAbout.bind(this)
    this.toggleExperience = this.toggleExperience.bind(this)
    this.toggleContact = this.toggleContact.bind(this)
    
  }

  cancel() {
    this.setState({
      name:'',
      sugar:'',
      isEdit:false,
      selectedStudentId:null,
    })
  }
  
  showRegisterForm() {
    this.setState({
      isRegister: true,
    })
  }

  register() {
    const url = `${BASE_URL}/users`
    const body = {"user": {"email": this.state.email, "password":this.state.password}}
    const init = { method: 'POST',
                   headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                   mode: 'cors',
                   body:JSON.stringify(body)
                 }
    fetch(url, init)
    .then(res => res.json())
    .then(this.setState({
      isRegister: false,
    }))
    .catch(err => err.message)
  }

  login() {
      console.log('logging in');
      console.log(this.state.email);
      console.log(this.state.password);
    const url = `${BASE_URL}/user_token`;
    const body = {"auth": {"email": this.state.email, "password": this.state.password} }
    const init = { method: 'POST',
                   headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                   mode: 'cors',
                   body:JSON.stringify(body),
                   }
    fetch(url, init)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        localStorage.setItem("jwt", res.jwt)})
    .then(() => this.setState({
      isLoggedIn: true,
    }))
    .then(() => this.getStudents())
    .catch(err => console.log(err))
  }

  showEditForm(id) {
    const student = this.state.students.filter(student => student.id === id);
    this.setState({
      first_name: student[0].first_name,
      last_name: student[0].last_name,
      age: student[0].age,
      class_id: student[0].class_id,
      isEdit: true,
      selectedStudentId: student[0].id
    })
  }

  edit(id) {
      console.log(id);
    const jwt = localStorage.getItem("jwt")
    const body = {"Authorization": `Bearer ${jwt}`, "first_name": this.state.first_name, "last_name": this.state.last_name, "age": this.state.age, "class_id": this.state.class_id};
    const init = {
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(body)
    }
    fetch(`${BASE_URL}/students/${id}`, init)
    .then(() => this.getStudents())
    .then(this.setState({
      first_name:'',
      last_name:'',
      age: '',
      class_id: '',
      isEdit:false,
      selectedStudentId:null,
    }))
    .catch(err => err.message)

  }

  toggleForm() {
    this.setState ((prevState )=> {
      return {
      showForm : !prevState.showForm, //prevState is current state before changes
      showAbout : false,
      showExperience : false,
      showContact : false
      }
    })
  }

  toggleAbout() {
    this.setState ((prevState )=> {
      return {
      showAbout : !prevState.showAbout, //prevState is current state before changes
      showForm : false,
      showExperience : false,
      showContact : false
      }
    })
  }

  toggleExperience() {
    this.setState ((prevState )=> {
      return {
      showExperience : !prevState.showExperience, //prevState is current state before changes
      showForm : false,
      showContact : false,
      showAbout : false
      }
    })
  }

  toggleContact() {
    this.setState ((prevState )=> {
      return {
      showContact : !prevState.showContact, //prevState is current state before changes
      showAbout : false,
      showForm : false,
      showExperience : false
      }
    })
  }

  submitNew() {
    const jwt = localStorage.getItem("jwt")
    const body = {"first_name": this.state.first_name, "last_name": this.state.last_name, "age": this.state.age, "class_id": this.state.class_id};
    const init = {
      headers: {"Authorization": `Bearer ${jwt}`,'Content-Type': 'application/json', 'Accept': 'application/json'},
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(body)
    }
    console.log(body);
    fetch(`${BASE_URL}/students`, init)
    .then(() => this.getStudents())
    .catch(err => err.message)
  }

  delete(id) {
    const jwt = localStorage.getItem("jwt")
    const init = { 
      // headers: {"Authorization": `Bearer ${jwt}`},
      method: 'DELETE',
      mode: 'cors',
    }
    fetch(`${BASE_URL}/students/${id}`, init)
    .then(()=> this.getStudents())
    .catch(err => err.message)
  }

  isLoggedIn() {
    const res = !!(localStorage.getItem("jwt"));
    this.setState({
      isLoggedIn: res,
    })
    if (res) this.getStudents();
    return res;
  }

  getStudents() {
    const jwt = localStorage.getItem("jwt")
    const init = { 
      headers: {"Authorization": `Bearer ${jwt}`}
    }
    fetch(`${BASE_URL}/students`, init)
    .then(res => res.json())
    .then(data => this.setState({
      students: data,
    }))
    .catch(err => err)
  }
 
  handleChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  logout() {
    localStorage.removeItem("jwt")
    this.setState({
     isLoggedIn: false,
     students: [],
     name:"",
     email:"",
    })
  }

  

  componentDidMount() {
    this.isLoggedIn()
    this.getStudents()
  }


  render() {
    console.log("students");
    const display = this.state.isLoggedIn ? this.state.students.map(student => {
          return (<Student 
          key={student.id} 
          student={student} 
          delete={this.delete} 
          edit={this.submitEdit}
          showEditForm={this.showEditForm}
          />)
        }) : <Login handleChange={this.handleChange}
                 login={this.login}
                 logout={this.logout}
                 email={this.state.email}
                 password={this.state.password}
                 isRegister={this.state.isRegister}
                 register={this.register}
                 />
    return (
      <div className="App">
      <Navbar
      toggleForm={this.toggleForm}//turning on and off , making changes
      toggleAbout={this.toggleAbout}
      toggleExperience={this.toggleExperience}
      toggleContact={this.toggleContact}
      />
      
        
       
        {this.state.showAbout && 
        <About/>}
        {this.state.showExperience && 
        <Experience/>}
        {this.state.showContact && 
        <Contact/>}
      
        <div> {display} </div>
        {this.state.showForm &&
        <StudentForm 
        handleChange={this.handleChange} 
        submitNew={this.submitNew}
        first_name={this.state.first_name}
        last_name={this.state.last_name}
        age={this.state.age}
        class_id={this.state.class_id}
        isEdit={this.state.isEdit}
        id={this.state.selectedStudentId}
        edit={this.edit}
        cancel={this.cancel} 
        />}
      </div>
    );
  }
}

export default App;
