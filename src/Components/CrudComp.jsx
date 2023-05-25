import React,{useState, useEffect} from 'react';
import AddEmpComp from './AddEmpComp';
import CardComp from './CardComp';
// import EmployeeModal from './EmployeeModal';

const CrudComp = () => {
    const [list, setList] = useState('')
    
    const FetcheApi = async () => await fetch('http://localhost:5000/employee')
                        .then((res) => res.json())
                        .then((result) => setList(result))
                        // console.log(list)
    useEffect(() =>{
        FetcheApi()
    },[])
    return (
        <div>
            <AddEmpComp />
            {
                list ? (<CardComp persons = {list} />) : 'no records'
            }
        </div>
    );
};

export default CrudComp;