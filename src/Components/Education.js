import React,{useState} from "react" 
import "../css/global.css" 
import "../css/personal.css" 
import "../css/table.css" 
import {useSelector,useDispatch} from "react-redux"
import Table from "./Table"

const Education = (props) => {
    const data=useSelector(state=>state.resume.educationDetails)
    const [isUgEntered,setIsUgEntered]= useState(false)
    const [invalidDegree,setInvalidDegree]= useState(false)
    const [isStartDateValid,setIsStartDateValid]= useState(false)
    const [isStartDateTouched,setIsStartDateTouched]= useState(false)
    const [isEndDateValid,setIsEndDateValid]= useState(false)
    const [isEndDateTouched,setIsEndDateTouched]= useState(false)
    const dispatch= useDispatch()
    const count=props.education 
    const [show,setShow]= useState(false)
    const ed=useSelector(state=> state.resume.educationDetails)
    let degree= Object.keys(ed).map(key=> ed[key].degree!=="" && ed[key].degree)
    console.log(degree)
    const educationDetails=useSelector(state=>state.resume.educationDetails[count])
    console.log(isUgEntered,invalidDegree,22)
    const handleChange= (event) => {
        console.log(event.target.value)
        event.target.name==="degree" && degree.includes(event.target.value) && event.target.value==="Bachelor's degree" ? setInvalidDegree(true) : setInvalidDegree(false)
        if(event.target.name==="startDate"){
            setIsStartDateTouched(true)
            if(educationDetails.endDate===""){
                setIsStartDateValid(true)
                dispatch({type:"EDUCATION_DETAILS",payload:{name:event.target.name,value:event.target.value,count:count}})
            }
            else if(event.target.value<educationDetails.endDate){
                setIsStartDateValid(true)
                dispatch({type:"EDUCATION_DETAILS",payload:{name:event.target.name,value:event.target.value,count:count}})
            }
            else{
                setIsStartDateValid(false)
                dispatch({type:"EDUCATION_DETAILS",payload:{name:event.target.name,value:"",count:count}})

            }
        }
        else if(event.target.name==="endDate"){
            setIsEndDateTouched(true)
            if(educationDetails.startDate===""){
                setIsEndDateValid(true)
                dispatch({type:"EDUCATION_DETAILS",payload:{name:event.target.name,value:event.target.value,count:count}})
            }
            else if(educationDetails.startDate<event.target.value){
                setIsEndDateValid(true)
                dispatch({type:"EDUCATION_DETAILS",payload:{name:event.target.name,value:event.target.value,count:count}})
            }
            else{
                setIsEndDateValid(false)
                dispatch({type:"EDUCATION_DETAILS",payload:{name:event.target.name,value:"",count:count}})
            }
        }
        else{
            dispatch({type:"EDUCATION_DETAILS",payload:{name:event.target.name,value:event.target.value,count:count}})
        }
    }
    console.log(ed)
    return (
        <div>
             {props.education===props.maxComponent && props.maxComponent>1 && 
             <div style={{width:"100%"}}>
                <hr/>
                <Table data={data} maxComponent={props.maxComponent} count={count} type="EDUCATION_DETAILS"/>
            </div>}
        {console.log(props.education,props.maxComponent,show)}
            {(props.education===props.maxComponent || show===true) &&
            <div> 
                <hr/>
                {console.log(99)}
                {props.education!==props.maxComponent && <button style={{marginLeft:"94%"}} onClick={()=>{setShow(false)}}>close</button>}
            <div className="inputrow-1">
                <div className="container" style={{width:"47%"}}>
                    <select className={data[count].degree==="" ? "dropdown" : "dropdown-changed"} style={{borderColor: invalidDegree && "red"}}name="degree" placeholder=" " value={educationDetails.degree} onChange={handleChange}>
                        <option value="" className="dropdown-label" Degree>Degree</option>
                        <option value="Primary education">Primary education</option>
                        <option value="Secondary education or high school">Secondary education or high school</option>
                        <option value="Vocational qualification">Vocational qualification</option>
                        <option value="Bachelor's degree">Bachelor's degree</option>
                        <option value="Master's degree">Master's degree</option>
                    </select>
                    {console.log(invalidDegree)}
                    {invalidDegree && <span style={{color:"red"}}>Invalid input.</span>}
                </div>
                <div style={{width:"7%"}}/>
                <div className="container"style={{width:"45%"}}> 
                    <input className="floating-input" tyle={{width:"100%"}} type="text" placeholder=" " name="city" value={educationDetails.city} onChange={handleChange}/> 
                    <label className="floating-label">City/Town</label>
                </div>
            </div>
            <div className="inputrow-1">
                <div className="container" style={{width:"100%"}}> 
                    <input className="floating-input" style={{ width:"99%"}} type="text"  placeholder=" " name="school" value={educationDetails.school} onChange={handleChange}/>
                    <label className="floating-label">School</label>
                </div>
            </div>
            <div className="inputrow-1">
                <div className="container" style={{width:"47%"}}>
                    {!isStartDateTouched ?
                    <div>
                        <input className="floating-input" style={{width:"100%"}} type="text" placeholder=" " onFocus={(event)=>{event.currentTarget.type="date"}} onBlur={(event)=> {event.currentTarget.type="text"}} name="startDate" value={educationDetails.startDate}  onChange={handleChange}/>
                        <label className="floating-label">Start Date</label>
                    </div>
                    :
                    <div>
                        {isStartDateValid ?
                        <div>
                            <input className="floating-input" style={{width:"100%"}} type="date" name="startDate" value={educationDetails.startDate} onChange={handleChange}/>
                            <label className="floating-label">Start Date</label>
                        </div>

                        :
                        <div>
                            <input  style={{width:"100%",borderColor:"red",marginBottom:"0"}} type="date" name="startDate" value={educationDetails.startDate} onChange={handleChange}/>
                            <span style={{color:"red"}}>Invalid Start Date.</span>
                        </div>}
                    </div>
                    }
                </div>
                <div style={{width:"7%"}}/>
                <div className="container" style={{width:"45%"}}> 
                    {!isEndDateTouched?
                    <div>
                        <input className="floating-input" style={{width:"100%"}} type="text" name="endDate" placeholder=" " value={educationDetails.endDate} onFocus={(event)=>{event.currentTarget.type="date"}} onBlur={(event)=> {event.currentTarget.type="text"}} onChange={handleChange}/>
                        <label className="floating-label">End Date</label>
                    </div>
                    :
                    <div>
                        {isEndDateValid ?
                        <div>
                            <input className="floating-input" style={{width:"100%"}} type="date" name="endDate" value={educationDetails.endDate} onChange={handleChange}/>
                            <label className="floating-label">End Date</label>
                        </div>
                        :   
                        <div>
                            <input style={{width:"100%",borderColor:"red",marginBottom:"0"}} type="date" name="endDate" value={educationDetails.endDate} onChange={handleChange}/>
                            <span style={{color:"red"}}>Invalid End Date.</span>
                        </div>}
                    </div>
                    }
                </div>
            </div>
            <div className="inputrow-1">
                <div className="container" style={{width:"100%"}}> 
                    <textarea className="floating-input-ta" style={{ width:"99%",height:"80px"}} name="description" placeholder=" " value={educationDetails.description} onChange={handleChange}/>
                    <label className="floating-label">Description</label>
                </div>
            </div>
            <br/>
            </div>
            }
            {props.education===props.maxComponent &&
            <button className="add-qualification" onClick={props.AddEducation}>Add another education</button>}
        </div>
    )
}

export default Education