import React,{useEffect} from "react" 
import "../css/global.css" 
import {Link} from "react-router-dom"
import withProgress from "../HigherOrderComponents/WithProgress"

const Submit = (props) => {
    useEffect(()=>{
        props.handleProgress(0)
    },[])
    return (
        <div className="submit-card">
            <h1>Resume submitted successfully</h1>
            <Link to="/personal-details">
                <button className="submit-home-button">HOME</button>
            </Link>
        </div>
    )
}

export default withProgress(Submit)