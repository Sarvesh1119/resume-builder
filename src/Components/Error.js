import React from 'react'
import {Link} from "react-router-dom"

const Error = () => {
    return (
        <div>
            <h2>Signup failed due to some network error.</h2>
            <Link to="/login">
                <button style={{width:"50px", height:"30px",backgroundColor:"blue",color:"white",border:"none"}}>Back</button>
            </Link>
        </div>
    )
}

export default Error