import React, { useState } from 'react';
import { Data } from '../Data';
import axios from 'axios';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import EmployeeModal from '../EmployeeModal';
import EditComp from '../EditComp';
import { Link } from 'react-router-dom';


function Home({ handleOpenModal }) {
    const [elem, setElem] = useState(Data)
    const [search, setSearch] = useState('')
    const API_URL = 'http://localhost:5000/Employee'

    const [users, setUsers] = useState([])
    const [show, setShow] = useState(false);



    const handleOpen = () => {
        setShow(true)
    }

    useEffect(() => {
        LoadUsers()
    }, [])

    const LoadUsers = async () => {
        const result = await axios.get(API_URL)
        setUsers(result.data)
    }

    const Ascending = () => {
        const data1 = [...users].sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        )
        setUsers(data1)
    }

    const Descending = () => {
        const data2 = [...users].sort((a, b) =>
            a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
        )
        setUsers(data2)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = (e) => {
        // const filtered = users.filter((items, idx) => {
        //     if (search === '') {
        //         return items;
        //     } else if (items.name.toLowerCase().includes(search.toLowerCase())) {
        //         return items;
        //     }
        // })
        // setUsers([...filtered])
    }

    const handleClose = () => {
        setShow(false)
    }

    const handleDelete = async (items) => {
        await axios.delete(`http://localhost:5000/Employee/${items.id}`);
        LoadUsers()
        // console.log(items,'delete')
        // const filterUsers = users.filter((userList, id) =>
        //     id !== items
        // )
        // setUsers(filterUsers)
    }
    const handleSearchFun = (e) => {
        const searchVlaue = e.target.value;
        if (searchVlaue.length > 0) {
            const fData = users.filter(items => items.name.toLowerCase().includes(searchVlaue.toLowerCase()))
            setUsers(fData)
        } else {
            setUsers(users)
        }
        setSearch(searchVlaue)
    }
    return (
        <div>
            <h1>Users List</h1>
            <div>
                <h3>Add User <span className='mx-2' style={{ cursor: 'pointer' }} onClick={() => handleOpen()}><i className="fa-solid fa-user-plus"></i></span></h3>
            </div>

            <input type='text' name='search' onChange={(e) => handleSearchFun(e)} />
            <button onClick={() => handleSearch()}>Search</button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Name <span><i className="fa-solid fa-arrow-up" onClick={() => Ascending()}></i></span>
                            <span><i className="fa-solid fa-arrow-down" onClick={() => Descending()}></i></span></th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((items, id) => {
                            return (

                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td>{items.name}</td>
                                    <td>{items.username}</td>
                                    <td>{items.email}</td>
                                    <td>
                                        <span className='mx-2' style={{ cursor: 'pointer' }} onClick={() => handleOpen()}>
                                            <Link to={`/employee/edit/${items.id}`}>
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </Link>
                                        </span>
                                        <span className='mx-2' onClick={() => handleDelete(items)} style={{ cursor: 'pointer' }}><i className="fa-solid fa-trash"></i></span>
                                    </td>
                                </tr>

                            )
                        })
                    }

                </tbody>
            </Table>
            <EmployeeModal show={show} handleClose={handleClose} LoadUsers={LoadUsers} />
        </div>
    );
}

export default Home;