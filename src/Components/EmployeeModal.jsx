import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import '../App.css'

function EmployeeModal({ show, handleClose, LoadUsers }) {
    const [formdata, setFormData] = useState({
        name: '',
        username: '',
        email: ''
    })

    const handleChange = (e) => {
        console.log(e)
        const { name, value } = e.target
        setFormData({ ...formdata, [name]: value })
    }

    const API_URL = 'http://localhost:5000/Employee'

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(API_URL, formdata)
        // LoadUsers()
    }
    return (
        <div className='modal_div'>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label>Name :</label> <br />
                            <input type="text" name='name' onChange={(e) => handleChange(e)} />
                        </div>
                        <div>
                            <label>Username :</label> <br />
                            <input type="text" name='username' onChange={(e) => handleChange(e)} />
                        </div>
                        <div>
                            <label>Email :</label> <br />
                            <input type="email" name='email' onChange={(e) => handleChange(e)} />
                        </div>
                        <div className='mt-3'>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <input className='ms-3' type='submit' onClick={() => handleClose()} value='Add User' />
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default EmployeeModal;