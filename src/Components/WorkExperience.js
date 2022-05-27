import React,{useState} from "react" 
import {useSelector,useDispatch} from "react-redux"
import "../css/global.css" 
import "../css/personal.css" 
import Table from "./Table"

const WorkExperience = (props) => {
    const data=useSelector(state=>state.resume.workExperience)
    const [isStartDateValid,setIsStartDateValid]= useState(false)
    const [isStartDateTouched,setIsStartDateTouched]= useState(false)
    const [isEndDateValid,setIsEndDateValid]= useState(false)
    const [isEndDateTouched,setIsEndDateTouched]= useState(false)
    const [show,setShow]= useState(false)
    const dispatch=useDispatch()
    const count=props.work
    const workExperience=useSelector(state=>state.resume.workExperience[count])
    const handleChange= (event) => {
        if(event.target.name==="startDate"){
            setIsStartDateTouched(true)
            if(workExperience.endDate===""){
                setIsStartDateValid(true)
                dispatch({type:"WORK",payload:{name:event.target.name,value:event.target.value,count:count}})

            }
            else if(event.target.value<workExperience.endDate){
                setIsStartDateValid(true)
                dispatch({type:"WORK",payload:{name:event.target.name,value:event.target.value,count:count}})
            }
            else{
                setIsStartDateValid(false)
                dispatch({type:"WORK",payload:{name:event.target.name,value:"",count:count}})

            }
        }
        else if(event.target.name==="endDate"){
            setIsEndDateTouched(true)
            if(workExperience.startDate===""){
                setIsEndDateValid(true)
                dispatch({type:"WORK",payload:{name:event.target.name,value:event.target.value,count:count}})
            }
            else if(workExperience.startDate<event.target.value){
                setIsEndDateValid(true)
                dispatch({type:"WORK",payload:{name:event.target.name,value:event.target.value,count:count}})
            }
            else{
                setIsEndDateValid(false)
                dispatch({type:"WORK",payload:{name:event.target.name,value:"",count:count}})
            }
        }
        else{
            dispatch({type:"WORK",payload:{name:event.target.name,value:event.target.value,count:count}})
        }
    }
    return (
        <div>
            {props.work===props.maxComponent && props.maxComponent>1 && 
            <div style={{width:"100%"}}>
                <hr/>
                <Table data={data} maxComponent={props.maxComponent} count={count} type="WORK"/>
            </div>}            
            {(props.work===props.maxComponent || show===true) &&
            <div>
                <hr/>
                {props.work!==props.maxComponent && <button style={{marginLeft:"94%"}} onClick={()=>{setShow(false)}}>close</button>}
            <div className="inputrow-1">
                <div className="container" style={{width:"47%"}}>
                    <input className="floating-input" style={{width:"100%"}} type="text" placeholder=" " name="jobTitle" value={workExperience.jobTitle} onChange={handleChange}/>
                    <label className="floating-label">Job Title</label>
                </div>
                <div style={{width:"7%"}}/>
                <div className="container" style={{width:"45%"}}> 
                    <input className="floating-input" style={{width:"100%"}} type="text" placeholder=" " name="city" value={workExperience.city} onChange={handleChange}/>
                    <label className="floating-label">City/Town</label>
                </div>
            </div>
            <div className="inputrow-1">
                <div className="container" style={{width:"100%"}}> 
                    <input className="floating-input" style={{ width:"99%"}} type="text" placeholder=" " name="employer" value={workExperience.employer} onChange={handleChange}/>
                    <label className="floating-label">Employer</label>
                </div>
            </div>
            <div className="inputrow-1">
                <div className="container" style={{width:"47%"}}>
                    {!isStartDateTouched ?
                    <div>
                        <input className="floating-input" style={{width:"100%"}} placeholder=" " type="text" name="startDate" value={workExperience.startDate} onChange={handleChange} onFocus={(event)=>{event.currentTarget.type="date"}} onBlur={(event)=>{event.currentTarget.type="text"}}/>
                        <label className="floating-label">Start Date</label>
                    </div>
                    :
                    <div>
                        {isStartDateValid ?
                        <div>
                            <input className="floating-input" style={{width:"100%"}} placeholder=" " type="text" name="startDate" value={workExperience.startDate} onChange={handleChange} onFocus={(event)=>{event.currentTarget.type="date"}} onBlur={(event)=>{event.currentTarget.type="text"}}/>
                            <label className="floating-label">Start Date</label>
                        </div>
                        :
                        <div>
                            <input style={{width:"100%",borderColor:"red",marginBottom:"0"}} type="date" name="startDate" value={workExperience.startDate} onChange={handleChange}/>
                            <span style={{color:"red"}}>Invalid Start Date.</span>
                        </div>}
                    </div>
                    }                
                </div>
                <div style={{width:"7%"}}/>
                <div className="container" style={{width:"45%"}}> 
                    {!isEndDateTouched?
                    <div>
                        <input className="floating-input" style={{width:"100%"}} type="text" placeholder=" " name="endDate" value={workExperience.endDate} onChange={handleChange} onFocus={(event)=>{event.currentTarget.type="date"}} onBlur={(event)=>{event.currentTarget.type="text"}}/>
                        <label className="floating-label">End Date</label>
                    </div>
                    :
                    <div>
                        {isEndDateValid ?
                        <div>
                            <input className="floating-input" style={{width:"100%"}} type="text" placeholder=" " name="endDate" value={workExperience.endDate} onChange={handleChange} onFocus={(event)=>{event.currentTarget.type="date"}} onBlur={(event)=>{event.currentTarget.type="text"}}/>
                            <label className="floating-label">End Date</label>
                        </div>
                        :
                        <div>
                            <input style={{width:"100%",borderColor:"red",marginBottom:"0"}} type="date" name="endDate" value={workExperience.endDate} onChange={handleChange}/>
                            <span style={{color:"red"}}>Invalid End Date.</span>
                        </div>}
                    </div>
                    }                
                </div>
            </div>
            <div className="inputrow-1">
                <div className="container" style={{width:"100%"}}> 
                    <textarea className="floating-input-ta" style={{ width:"99%",height:"80px"}} placeholder=" " name="description" value={workExperience.description} onChange={handleChange}/>
                    <label className="floating-label">Description</label>
                </div>
            </div>
            <br/>
            </div>
            }
            {props.work===props.maxComponent &&
            <button className="add-qualification" onClick={props.AddWork}>Add another work</button>} 
        </div>
    )
}

export default WorkExperience