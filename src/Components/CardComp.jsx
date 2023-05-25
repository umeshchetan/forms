import React, { useState } from 'react';
import { Table } from 'react-bootstrap'

function CardComp({ persons }) {

    console.log(persons)
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        persons.map((items, id) => {
                            return (
                                <>
                                    <tr key={id}>
                                        <td>{items.id}</td>
                                        <td>{items.name}</td>
                                        <td>{items.email}</td>
                                        <td>
                                            <i class="fa-solid fa-pen-to-square" style={{cursor:'pointer'}}></i>
                                            <i class="fa-solid fa-trash mx-5" style={{cursor:'pointer'}}></i>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }

                </tbody>

            </Table>
        </div>
    );
}

export default CardComp;