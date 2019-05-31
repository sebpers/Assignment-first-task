import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export default class TableComponent extends Component {
  constructor() {
    super();

    this.state = {
      students: [],

      newStudent: {
        name: '',
        email: '',
        address: {
          street: '',
          suite: '',
          city: ''
        }
      },
      save: {
        name: '',
        email: '',
          street: '',
          suite: '',
          city: ''
      }
    };
  }

  // Get users
  componentDidMount() {    
    axios.get('http://localhost:5000/student')
      .then(response => response)
      .then((student) => {
        // Put all the students in state
        this.setState({ students: student.data });
    });
  }

  // on change
  onChange = (e) => {
    let save = this.state.save;
    save[e.target.name] = e.target.value;
    this.setState(save);
  }

  // On submit
  onSubmit = (e) => {
    // e.preventDefault();
    const addedStudent =  {
      name: this.state.save.name,
      email: this.state.save.email,
      address: {
        street: this.state.save.street,
        suite: this.state.save.suite,
        city: this.state.save.city,
      }
    }
    this.setState({addedStudent});

    console.log(this.state);
    axios.post(`http://localhost:5000/student/`, addedStudent)
    .then(res => {

    })

    this.setState({
      newStudent: {
      name: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: ''
      }}
    });
  }

  // Delete selected user
  deleteUser = (id) => {
    // Set the selected students id
    axios.delete(`http://localhost:5000/student/${id}`)
    .then(()=> {
      // Fetch the list
      return axios.get('http://localhost:5000/student')
    })
    .then(res => {
      console.log(res);
      // Set state and refresh the form
      this.setState({ student: res.data })
    });
  }

  render() {
    return (
      <div className="wrapper">
       <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Delete users</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.address.street}, {student.address.suite}, {student.address.city}</td>
                  <td>
                    <Button className="deleteButton"    onClick={() => this.deleteUser    (student._id)}>Delete
                    </Button></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <form onSubmit={this.onSubmit}>
          <input className='mb-2'
            type="text"
            name="name"
            placeholder="Name..."
            value={this.state.save.name}
            onChange={this.onChange}
          />

          <input className='mb-2'
            type="email"
            name="email"
            required
            placeholder="Email..."
            value={this.state.save.email}
            onChange={this.onChange}
          />

          <input className='mb-2'
           type="text"
           placeholder="Street..."
           name="street"
           value={this.state.save.street}
           onChange={this.onChange}
          />

          <input className='mb-2' 
            placeholder="Suite..."
            name="suite"
            type="text"
            value={this.state.save.suite}
            onChange={this.onChange}
          />

          <input placeholder="City..."
            name="city"
            type="text"
            value={this.state.save.city}
            onChange={this.onChange}
          />

          <Button id="addUserButton" type="submit" >Add student</Button>
          </form>
      </div>
    )
  }
}