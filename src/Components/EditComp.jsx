import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
// import { Modal, Button } from 'react-bootstrap';

function EditComp() {

    const [users, setUsers] = useState({
        name: '',
        username: '',
        email: ''
    })


    const { id } = useParams()
    console.log(id)

    const navigate = useNavigate()


    const { name, username, email } = users;
    const handleChange = (e) => {
        // const { name, value } = e.target;
        // setUsers({ ...users, [name]: value })
        setUsers({...users, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:5000/Employee/${id}`, users)
        // console.log(formdata)
        navigate('/home')
    }

    const LoadUsers = async () => {
        const result = await axios.get(`http://localhost:5000/Employee/${id}`)
        setUsers(result.data)
    }

    useEffect(() => {
        LoadUsers()
    }, [])


    return (
        <div>
            Edit
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Name :</label> <br />
                    <input type="text" name='name' value={name} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label>Username :</label> <br />
                    <input type="text" name='username' value={username} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label>Email :</label> <br />
                    <input type="email" name='email' value={email} onChange={(e) => handleChange(e)} />
                </div>
                <div className='mt-3'>
                    {/* <Link to='/home'> */}
                        <input className='ms-3' type='submit' value='Save Changes' />
                    {/* </Link> */}
                </div>
            </form>
        </div>
    );
}

export default EditComp;