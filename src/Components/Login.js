import React,{useState,useEffect} from 'react'
import "../css/login.css" 
import "../css/global.css" 
import {Link,Redirect} from "react-router-dom"
import axios from "axios"
import withProgress from "../HigherOrderComponents/WithProgress"

const Login = (props) => {
    const a=123;
    const [error,setError]=useState(false)
    const [isLoading,setIsLoading]=useState(false)
    const [isTokenGen,setIsTokenGen]= useState(false)
    const [isUserExist,setIsUserExist]= useState(true)
    const [isUserTouched,setIsUserTouched]= useState(false)
    const [isPasswordValid,setIsPasswordValid]= useState(true)
    const [isPasswordTouched,setIsPasswordTouched]= useState(false)
    const [username,setUsername]= useState("")
    const [password,setPassword]= useState("")
    useEffect(()=>{
        props.handleProgress(0)
    },[])
    const handleChange= (event) => {
        if(event.target.name==="username"){
            setIsUserTouched(true)

            setUsername(event.target.value)
        }
        if(event.target.name==="password."){
            setIsPasswordTouched(true)

            setPassword(event.target.value)
        }
    }
    const handleFocus= (event) => {
        if(event.target.name==="username"){
            setIsUserTouched(true)
            setIsPasswordTouched(true)
        }
        if(event.target.name==="password."){
            setIsUserTouched(true)
            setIsPasswordTouched(true)
        }
    }
    const handleBlur= (event) => {
        if(event.target.name==="username"){
            setIsUserTouched(false)
        }
        if(event.target.name==="password."){
            setIsPasswordTouched(false)
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        setIsUserTouched(false)
        setIsPasswordTouched(false)
        setIsUserExist(true)
        setIsPasswordValid(true)
        try{
            setError(false)
            let response=await axios.post("http://localhost:3001/user/get",{username:username,password:password})
            setIsLoading(false)
            console.log(response)
            if(response.data.msg==="User does not exist."){
                setIsUserExist(false)
            }
            else if(response.data.msg==="Password incorrect."){
                setIsPasswordValid(false)
            }
            else{
                console.log(response.data)
                setIsTokenGen(true)
                window.localStorage.setItem('token',response.data)
                setIsUserExist(true)
                setIsPasswordValid(true)
            }
        }catch(e){
            setError(true)
            setIsLoading(false)
            console.log(e)
        }
    }
    console.log(isPasswordValid,isPasswordTouched)
    return (
        <div>
        {error?   
        <div>
            <h2>Login failed due to some network error.</h2>
            <button style={{width:"50px", height:"30px",backgroundColor:"blue",color:"white",border:"none"}} onClick={()=>{setError(false)}}>Back</button>
        </div>
        :
        <div className="login-card">
            <div id="signin-heading">
                <h2>Sign in</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    {!isUserExist && !isUserTouched && !isPasswordTouched? 
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <input className="floating-input" style={{borderColor:"red"}} value={username} type="text" name="username" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
                        <span style={{color:"red",marginTop:"-10px"}}>User does not exist.</span>
                    </div>
                    :
                    <div className="container">
                        <input className="floating-input" value={username} type="text" name="username" placeholder=" " onChange={handleChange} />
                        <label className="floating-label">Email</label>
                    </div>
                }
                </div>
                <div>
                    {!isPasswordValid && !isPasswordTouched && !isUserTouched?
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <input className="floating-input" style={{borderColor:"red"}} value={password} type="password" name="password." onChange={handleChange} onFocus={handleFocus}/>
                        <span style={{color:"red",marginTop:"-10px"}}>Incorrect password.</span>
                    </div>
                    :
                    <div className="container">
                        <input className="floating-input" value={password} type="password" name="password." placeholder=" " onChange={handleChange} />
                        <label className="floating-label">Password</label>
                    </div>
                }
                </div>
                <br/>
                <button className="login-submit">{isLoading ? "Loading ..." :"Login"}</button>
            </form>
            <div className="signup-link">
                <div>
                    <span>
                        New user?
                    </span>
                    <Link to="/signup" style={{textDecoration:"none"}}> 
                        <span id="signup">Sign up</span>
                    </Link>
                </div>
                <span>Forgot password?</span>
                {isTokenGen && 
                <Redirect to="/personal-details"/>}
            </div>
        </div>}
    </div>
    )
}

export default withProgress(Login)