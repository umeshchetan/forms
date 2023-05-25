import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import EmployeeModal from './EmployeeModal';

function AddEmpComp(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleOpen = () =>{
        setShow(true)
    }
    return (
        <div className='text-center m-5'>
            <Button onClick={() => handleOpen()}>Add Employee</Button>

            <EmployeeModal show={show} handleClose={handleClose} />
        </div>
    );
}

export default AddEmpComp;