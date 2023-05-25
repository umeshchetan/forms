import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Validate } from '../Errors/ErrorComp';
import HomeComp from '../HomeComponent/HomeComp';

function Login({submitForm}) {
    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    })
    const [formErrors, setFormErrors] = useState({})
    const [submit,IsSubmit] = useState(false)
    const [show,setShow] = useState(false)
    // const [shows,setShows] = useState('hello')

    const handleChange = (e) =>{
        // console.log(e.target)
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
        // console.log(formData)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        // console.log('FormData ===',formData)
        setFormErrors(Validate(formData))
        IsSubmit(true)
        
    }

    // submitForm(formData)

    useEffect(() =>{
        if(Object.keys(formErrors).length === 0){
            // console.log(formData)
        }
    },[formErrors])

    return (
        <div className='container d-flex justify-content-center align-items-center' style={{width:'100%',height:'100%'}}>
            <form className='form_container' onSubmit={(e) => handleSubmit(e) }>
                {Object.keys(formErrors).length === 0 && submit ? (<p style={{color:'Green'}}>Signed in Successfully</p>) : ('')}
                <div>
                    <label>UserName</label><br />
                    <input type="text" name='userName' onChange={(e) => handleChange(e)} />
                </div>
                <p>{formErrors.userName}</p>
                <div>
                    <label>Password</label><br />
                    <input type="text" name='password' onChange={(e) => handleChange(e)} />
                </div>
                <p>{formErrors.password}</p>
                {/* <Link to='/employee'> */}
                    <input type='submit' />
                {/* </Link> */}
            </form>
            {show && <HomeComp />}
        </div>
    );
}

export default Login;