import React,{useState} from "react"
import "../css/global.css" 
import "../css/personal.css" 
import {useSelector,useDispatch} from "react-redux"
import Table from "./Table"

const Courses = (props) => {
    const data=useSelector(state=>state.resume.courses)
    const [isStartDateValid,setIsStartDateValid]= useState(false)
    const [isStartDateTouched,setIsStartDateTouched]= useState(false)
    const [isEndDateValid,setIsEndDateValid]= useState(false)
    const [isEndDateTouched,setIsEndDateTouched]= useState(false)
    const [show,setShow]= useState(false)
    const dispatch=useDispatch()
    const count=props.courses
    const courses=useSelector(state=>state.resume.courses[count])
    const handleChange= (event) => {
        if(event.target.name==="startDate"){
            setIsStartDateTouched(true)
            if(courses.endDate===""){
                setIsStartDateValid(true)
                dispatch({type:"COURSES",payload:{name:event.target.name,value:event.target.value,count:count}})

            }
            else if(event.target.value<courses.endDate){
                setIsStartDateValid(true)
                dispatch({type:"COURSES",payload:{name:event.target.name,value:event.target.value,count:count}})
            }
            else{
                setIsStartDateValid(false)
                dispatch({type:"COURSES",payload:{name:event.target.name,value:"",count:count}})

            }
        }
        else if(event.target.name==="endDate"){
            setIsEndDateTouched(true)
            if(courses.startDate===""){
                setIsEndDateValid(true)
                dispatch({type:"COURSES",payload:{name:event.target.name,value:event.target.value,count:count}})
            }
            else if(courses.startDate<event.target.value){
                setIsEndDateValid(true)
                dispatch({type:"COURSES",payload:{name:event.target.name,value:event.target.value,count:count}})
            }
            else{
                setIsEndDateValid(false)
                dispatch({type:"COURSES",payload:{name:event.target.name,value:"",count:count}})
            }
        }
        else{
            dispatch({type:"COURSES",payload:{name:event.target.name,value:event.target.value,count:count}})
        }
    }
    return (
        <div>
            {props.courses===props.maxComponent && props.maxComponent>1 && 
            <div style={{width:"100%"}}>
                <hr/>
                <Table data={data} maxComponent={props.maxComponent} count={count} type="COURSES"/>
            </div>}            
            {(props.courses===props.maxComponent || show===true) &&
            <div>
                <hr/>
                {props.courses!==props.maxComponent && <button style={{marginLeft:"94%"}} onClick={()=>{setShow(false)}}>close</button>}
            <div className="inputrow-1">
                <div className="container" style={{width:"47%"}}>
                    <input className="floating-input" style={{width:"100%"}} type="text" placeholder=" " name="course" value={courses.course} onChange={handleChange}/>
                    <label className="floating-label">Course</label>
                </div>
                <div style={{width:"7%"}}/>
                <div className="container" style={{width:"45%"}}> 
                    <input className="floating-input" style={{width:"100%"}} type="text"  placeholder=" " name="institution" value={courses.institution} onChange={handleChange}/> 
                    <label className="floating-label">Institution</label>
                </div>
            </div>
            <div className="inputrow-1">
                <div style={{width:"47%"}}>
                    {!isStartDateTouched ?
                    <div className="container">
                        <input className="floating-input" style={{width:"100%"}} type="text" placeholder=" " name="startDate" value={courses.startDate} onChange={handleChange} onFocus={(event)=>{event.currentTarget.type="date"}} onBlur={(event)=>{event.currentTarget.type="text"}}/>
                        <label className="floating-label">Start Date</label>
                    </div>
                    :
                    <div>
                        {isStartDateValid ?
                        <div className="container">
                            <input className="floating-input" style={{width:"100%"}} type="date" placeholder=" " name="startDate" value={courses.startDate} onChange={handleChange} onFocus={(event)=>{event.currentTarget.type="date"}} onBlur={(event)=>{event.currentTarget.type="text"}}/>
                            <label className="floating-label">Start Date</label>
                        </div>
                        :
                        <div>
                            <br/>
                            <input style={{width:"100%",borderColor:"red",marginBottom:"0"}} type="date" placeholder=" " name="startDate" value={courses.startDate} onChange={handleChange}/>
                            <span style={{color:"red"}}>Invalid Start Date.</span>
                        </div>}
                    </div>
                    }                
                    </div>
                <div style={{width:"7%"}}/>
                <div style={{width:"45%"}}> 
                    {!isEndDateTouched?
                    <div className="container">
                        <input className="floating-input" style={{width:"100%"}} type="text" placeholder=" " name="endDate" value={courses.endDate} onChange={handleChange} onFocus={(event)=>{event.currentTarget.type="date"}} onBlur={(event)=>{event.currentTarget.type="text"}}/>
                        <label className="floating-label">End Date</label>
                    </div>
                    :
                    <div>
                        {isEndDateValid ?
                        <div className="container">
                            <input className="floating-input" style={{width:"100%"}} type="text" placeholder=" " name="endDate" value={courses.endDate} onChange={handleChange} onFocus={(event)=>{event.currentTarget.type="date"}} onBlur={(event)=>{event.currentTarget.type="text"}}/>
                            <label className="floating-label">End Date</label>
                        </div>
                        :
                        <div>
                            <br/>
                            <input style={{width:"100%",borderColor:"red",marginBottom:"0"}} type="date" placeholder=" " name="endDate" value={courses.endDate} onChange={handleChange}/>
                            <span style={{color:"red"}}>Invalid End Date.</span>
                        </div>}
                    </div>
                    }                
                    </div>
            </div>
            <div className="inputrow-1">
                <div className="container" style={{width:"100%"}}> 
                    <textarea  className="floating-input-ta" style={{ width:"99%",height:"80px"}} placeholder=" " name="description" value={courses.description} onChange={handleChange}/>
                    <label className="floating-label">Description</label>
                </div>
            </div>
            <br/>
            </div>
            }
            {props.courses===props.maxComponent &&
            <button className="add-qualification" onClick={props.AddCourses}>Add another course</button>} 
        </div>
    )
}

export default Courses