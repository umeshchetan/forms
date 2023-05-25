export const Validate = (values) =>{
    const errors = {}
    if(!values.userName){
        errors.userName = 'Please Enter Username**'
    }
    if(!values.password){
        errors.password = 'Please enter Password**'
    }
    return errors;
}