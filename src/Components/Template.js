import React,{useEffect} from 'react'
import "../css/template.css"
import "../css/global.css"
import "../css/personal.css"
import {Link} from "react-router-dom"
import withProgress from "../HigherOrderComponents/WithProgress"

const Template = (props) => {
    useEffect(()=>{
        props.handleProgress(75)
    },[])
    return (
        <div>
            <h1 className="page-heading" style={{marginTop:"-125px",marginBottom:"90px"}}>Select Template</h1>
            <div className="template-container">
                <div className="template-card">
                    <h3 className="template-name">Template 1</h3>
                    <Link style={{textDecoration:"None"}} to="/template1">
                        <div className="template">
                            <div className="template-flex">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgzHk9AmWFkgjylWvDaPUL-oIyrkU6XiFDQ&usqp=CAU" width="50"/>
                                Firstname
                                <br/>
                                Lastname
                                <div style={{paddingLeft:"40px",color:"black"}}><div>7787875645</div><div>name@gmail.com</div></div>
                                
                            </div>
                            <div className="template-flex">
                                <div className="left-topic">
                                    <div>Career objective</div>
                                    <hr style={{border:"0.5px solid black",width:"100px"}}/>
                                </div>
                                <div className="right-topic">
                                    <div>Work history</div>
                                    <hr style={{border:"0.5px solid black",width:"100px"}}/>
                                </div>
                                <div className="left-topic">
                                    <div>Skills and proficiency</div>
                                    <hr style={{border:"0.5px solid black",width:"100px"}}/>
                                </div>
                                <div className="right-topic"> 
                                    <div className="right-topic">Interests</div>
                                    <hr style={{border:"0.5px solid black",width:"100px"}}/>
                                </div>
                                <div className="left-topic"> 
                                    <div className="right-topic">References</div>
                                    <hr style={{border:"0.5px solid black",width:"100px"}}/>
                                </div>
                                <div className="right-topic"> 
                                    <div className="right-topic">Education</div>
                                    <hr style={{border:"0.5px solid black",width:"100px"}}/>
                                </div>
                                <div className="left-topic"> 
                                    <div className="right-topic">Courses</div>
                                    <hr style={{border:"0.5px solid black",width:"100px"}}/>
                                </div>
                                <div className="right-topic"> 
                                    <div className="right-topic">Languages</div>
                                    <hr style={{border:"0.5px solid black",width:"100px"}}/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="template-card">
                    <h3 className="template-name">Template 2</h3>
                    <Link to="/template2">
                        <div className="template">
                            <div style={{width:"30%",height:"100%",backgroundColor:"#1f1d1d"}}>
                                <div style={{color:"white",marginLeft:"15px",paddingTop:"10px",fontSize:"11px"}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgzHk9AmWFkgjylWvDaPUL-oIyrkU6XiFDQ&usqp=CAU" width="40"/>
                                First name
                                <br/>
                                Last name
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default withProgress(Template)