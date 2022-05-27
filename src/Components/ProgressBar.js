import React,{useState} from "react"
import "../css/progressBar.css" 

const ProgressBar = (props) => {
    return (
        <div style={{marginBottom:"65px"}}>
        <div className="progress-bar">
        <div className="left-circle">
                    <div className="circle"/>
                </div>
                <div className="center-circle">
                    <div className="circle"/>
                </div>
                <div className="right-circle">
                    <div className="circle"/>
                </div>
            <div className="progress-fill" style={{width:`${props.percent}%`}}>
                <div className="circle-fill">
            <div className="left-circle" >
                    <div className={props.percent>=0 ? "sub-circle" : "circle"}/>
                </div>
                <div className="center-circle">
                    <div className={props.percent>=50 ? "sub-circle" : "circle"}/>
                </div>
                <div className="right-circle">
                <div className={props.percent===100 ? "sub-circle" : "circle"}/>
                </div>
               </div>
            </div>
            <div className="name">
            <div className="personal">Personal</div>
            <div className="experience">Experiences</div>
            <div className="preview">Preview</div>
            </div>
        </div>
       
        </div >
     
    )
}

export default ProgressBar