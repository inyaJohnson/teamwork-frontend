export const loginValidator = (email, password) =>{
    return{
        email : email.length === 0,
        password : password.length === 0
    }
    
}