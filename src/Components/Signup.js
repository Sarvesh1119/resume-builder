import React,{useEffect, useReducer,useState} from 'react'
import "../css/login.css" 
import {Link} from "react-router-dom"
import axios from "axios"
import withProgress from "../HigherOrderComponents/WithProgress"
import {validEmail,validPassword} from "./Regex"
import Error from "./Error" 

const Signup = (props) => {
    const [error,setError]=useState(false)
    const [emailValid,setEmailValid]= useState(true)
    const [passwordValid,setPasswordValid]= useState(true)
    const [isLoading,setIsLoading]=useState(false)
    const [hasSignedUp,setHasSignedUp]=useState(false)
    const [userExists,setUserExists]= useState(false)
    const [buttonEnabled,setButtonEnabled]= useState(false)
    useEffect(()=>{
        props.handleProgress(0)
    },[])
    const initialState={
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    }
    const reducer = (state,action) => {
        switch(action.type){
            case "ADD":
                return {
                    ...state,
                    [action.payload.name]:action.payload.value
                }
            default:
                return state
        }
    }
    const [user,userDispatch]= useReducer(reducer,initialState)

    const handleChange = (event) => {
        if(event.target.name==="password"){
            setPasswordValid(true)
        }
        if(event.target.name==="email"){
            setEmailValid(true)
            setUserExists(false)
        }
        userDispatch({type:"ADD",payload:{name:event.target.name,value:event.target.value}})
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        console.log(123)
        try{
            setError(false)
            if(emailValid && passwordValid){
                let response= await axios.post("http://localhost:3001/user/create",user)
                setIsLoading(false)
                console.log(response)
                if(response.data.msg!==undefined){
                        if(response.data.msg==="User already exists."){
                            setUserExists(true)
                        }
                }
                else{
                    setUserExists(false)
                    setHasSignedUp(true)
                }
            }
            else{
                setIsLoading(false)
            }
        }catch(e){               
            setIsLoading(false)
            setError(true)
            console.log(e)
        }
    }

    useEffect(()=>{
        setError(false)
        if(user.email.includes("@") && user.password.trim().length>=8){
            setButtonEnabled(true)
        }
        else{
            setButtonEnabled(false)
        }
    },[user.email,user.password])
    const handleEmailValidation = (event) => {
        validEmail.test(event.target.value) ? setEmailValid(true):setEmailValid(false)
    }
    const handlePasswordValidation = (event) => {
        validPassword.test(event.target.value) ? setPasswordValid(true):setPasswordValid(false)
    }
    console.log("email",emailValid)
    return (
        <div>
            {error ? 
            <div>
                <h2>Signup failed due to some network error.</h2>
                <button style={{width:"50px", height:"30px",backgroundColor:"blue",color:"white",border:"none"}} onClick={()=>{setError(false)}}>Back</button>
            </div>
            :
            <div className="login-card">
                 <div id="signin-heading">
                    <h2>Sign up</h2>
                </div>
                {hasSignedUp ?
                <div>
                    <h2 id="sign-up-success">Sign up sucessfull</h2>
                    <Link to="/login">
                        <button id="go-to-login">Go to Login Page</button>
                    </Link>
                </div>
                :
                <form>
                        <div className="container">
                            <input className="floating-input" type="text" value={user.firstName} name="firstName" placeholder=" " onChange={handleChange}/>
                            <label className="floating-label">First Name</label>
                        </div>
                        <div className="container">
                            <input className="floating-input" type="text" value={user.lastName} name="lastName" placeholder=" " onChange={handleChange}/>
                            <label className="floating-label">Last Name</label>
                        </div>
                    <div>
                        {userExists===true?
                        <div className="container"style={{display:"flex",flexDirection:"column"}}>
                            <input className="floating-input" style={{borderColor:"red"}} type="text" value={user.email} name="email" onChange={handleChange} onFocus={()=>{setUserExists(false)}}/>
                            <span style={{color:"red",marginTop:"-10px"}}>Email address already exists.</span>
                        </div>
                        :
                        <div className="container">
                            <input className="floating-input" style={{borderBottom: !emailValid && "2px solid red"}} type="text" value={user.email} name="email" placeholder=" " onChange={handleChange} onBlur={handleEmailValidation}/>
                            <label className="floating-label" style={{color: !emailValid && "red"}}>{emailValid ? "Email" : "Please enter a valid email"}</label>
                        </div>
                        }
                    </div>  
                    <div className="container">
                        <input className="floating-input" style={{borderBottom: !passwordValid && "2px solid red"}} type="password" value={user.password} name="password" placeholder=" " onChange={handleChange}/>
                        <label className="floating-label" style={{color: !passwordValid && "red"}}>{passwordValid ? "Password" : "Please enter a valid password"}</label>
                    </div>
                    {buttonEnabled===true ?
                    <button className="login-submit" onClick={handleSubmit}>{isLoading ? "Loading..." : "Sign up"}</button>
                    :
                    <button className="login-submit-off" onClick={(event)=>{event.preventDefault();}}>Sign up</button>}
                    <div className="signin-link">
                    <div>
                        <span>
                        Registered user?
                        </span>
                        <Link to="/login" style={{textDecoration:"none"}}> 
                            <span id="signup">Sign in</span>
                        </Link>
                    </div>
                </div>
                </form>}
            </div>}
            </div>
        )
    }

export default withProgress(Signup)