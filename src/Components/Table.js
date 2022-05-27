import React,{useState} from 'react'
import "../css/table.css" 
import {useDispatch} from "react-redux" 

const Table = (props) => {
    const type= props.type
    const [isStartDateValid,setIsStartDateValid]= useState(false)
    const [isStartDateTouched,setIsStartDateTouched]= useState(false)
    const [isEndDateValid,setIsEndDateValid]= useState(false)
    const [isEndDateTouched,setIsEndDateTouched]= useState(false)
    const dispatch= useDispatch()
    const [editClicked,setEditClicked]=useState(false)
    const [allowEdit,setAllowEdit]= useState([])
    //const educationDetails=useSelector(state=>state.resume.data)
    const data= props.data
    const handleChange= (key,event) => {
        if(event.target.name==="startDate"){
            console.log(11)
            setIsStartDateTouched(true)
            if(data[key].endDate===""){
                console.log(21)
                setIsStartDateValid(true)
                dispatch({type:type,payload:{name:event.target.name,value:event.target.value,count:key}})

            }
            else if(event.target.value<data[key].endDate){
                console.log(31)
                setIsStartDateValid(true)
                dispatch({type:type,payload:{name:event.target.name,value:event.target.value,count:key}})
            }
            else{
                console.log(41)
                setIsStartDateValid(false)
                dispatch({type:type,payload:{name:event.target.name,value:"",count:key}})

            }
        }
        else if(event.target.name==="endDate"){
            setIsEndDateTouched(true)
            if(data[key].startDate===""){
                setIsEndDateValid(true)
                dispatch({type:type,payload:{name:event.target.name,value:event.target.value,count:key}})
            }
            else if(data[key].startDate<event.target.value){
                setIsEndDateValid(true)
                dispatch({type:type,payload:{name:event.target.name,value:event.target.value,count:key}})
            }
            else{
                setIsEndDateValid(false)
                dispatch({type:type,payload:{name:event.target.name,value:"",count:key}})
            }
        }
        else{
            dispatch({type:type,payload:{name:event.target.name,value:event.target.value,count:key}})
        }
    }
    const handleAllowEdit = (key) => {
        /*if(!allowEdit.includes(key)){
            setAllowEdit(prevState=>[...prevState,key])
        }*/
        setEditClicked(true)
        setAllowEdit([key])
    }
    const handleSave = () =>{
        setEditClicked(false)
        setAllowEdit([])
    }
    return (
      <div>
        <table className="table-structure">
            <thead>
                <tr>
                    {Object.keys(data[1]).map(key=> <th>{key.charAt(0).toUpperCase()+key.slice(1)}</th>)}
                    {/*<th>Degree</th>
                    <th>City/School</th>
                    <th>School</th>
                    <th>Start Date</th>
                    <th>End Date</th>
    <th>Description</th>*/}
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(data).map(key=> key!=props.maxComponent &&
                <tr>
                    {Object.keys(data[key]).map(item=> 
                    allowEdit.includes(key) ?
                    <td>
                        {item==="degree"?
                        <select  style={{width:"96%",height:"20px",borderStyle:"none",margin:"0"}} name="degree" value={data[key].degree} onChange={(event)=>handleChange(key,event)} >
                             <option value="Please select">Please select</option>
                             <option value="Primary education">Primary education</option>
                             <option value="Secondary education or high school">Secondary education or high school</option>
                             <option value="Vocational qualification">Vocational qualification</option>
                             <option value="Bachelor's degree">Bachelor's degree</option>
                             <option value="Master's degree">Master's degree</option>
                         </select>
                         :
                         item==="city"?
                        <input style={{width:"94%",height:"20px",margin:"0"}} type="text" name="city" value={data[key].city} onChange={(event)=>handleChange(key,event)} /> 
                        :
                        item==="school"?
                        <input style={{width:"96%",height:"100%",borderStyle:"none",margin:"0"}} type="text"  name="school" value={data[key].school} onChange={(event)=>handleChange(key,event)}/>
                        :
                        item==="startDate"?
                        !isStartDateTouched ?
                            <input style={{width:"100%"}} type="date" name="startDate" value={data[key].startDate} onChange={(event)=>{handleChange(key,event)}}/>
                            :
                            <div>
                                {isStartDateValid ?
                                <input style={{width:"100%"}} type="date" name="startDate" value={data[key].startDate} onChange={(event)=>{handleChange(key,event)}}/>
                                :
                                <div>
                                    <input style={{width:"100%",borderColor:"red",marginBottom:"0"}} type="date" name="startDate" value={data[key].startDate} onChange={(event)=>{handleChange(key,event)}}/>
                                    <span style={{color:"red"}}>Invalid Start Date.</span>
                                </div>}
                            </div>
                        :
                        item==="endDate"?
                        !isEndDateTouched?
                            <input style={{width:"100%"}} type="date" name="endDate" value={data[key].endDate} onChange={(event)=>{handleChange(key,event)}}/>
                            :
                            <div>
                                {isEndDateValid ?
                                <input style={{width:"100%"}} type="date" name="endDate" value={data[key].endDate} onChange={(event)=>{handleChange(key,event)}}/>
                                :
                                <div>
                                    <input style={{width:"100%",borderColor:"red",marginBottom:"0"}} type="date" name="endDate" value={data[key].endDate} onChange={(event)=>{handleChange(key,event)}}/>
                                    <span style={{color:"red"}}>Invalid End Date.</span>
                                </div>}
                            </div>
                        :
                        item==="description" ?
                        <textarea style={{width:"96%",height:"20px",borderStyle:"none",margin:"0"}} name="description" value={data[key].description} onChange={(event)=>handleChange(key,event)}/>
                        :
                        item==="jobTitle" ?
                        <input style={{width:"100%"}} type="text" placeholder="e.g. Software Engineer" name="jobTitle" value={data[key].jobTitle} onChange={(event)=> handleChange(key,event)}/>
                        :
                        item==="employer" ?
                        <input style={{ width:"99%"}} type="text" placeholder="e.g. Amazon" name="employer" value={data[key].employer} onChange={(event)=> handleChange(key,event)}/>
                        :
                        item==="companyName" ?
                        <input style={{width:"100%"}} type="text" name="companyName" value={data[key].companyName} onChange={(event)=> handleChange(key,event)}/>
                        :
                        item==="contactPerson" ?
                        <input style={{width:"100%"}} type="text" name="contactPerson" value={data[key].contactPerson} onChange={(event)=> handleChange(key,event)}/>
                        :
                        item==="phoneNumber" ?
                        <input style={{width:"100%"}} type="number" name="phoneNumber" value={data[key].phoneNumber} onChange={(event)=> handleChange(key,event)}/>
                        :
                        item==="email" ?
                        <input style={{width:"100%"}} type="text" name="email" value={data[key].email} onChange={(event)=> handleChange(key,event)}/>
                        :
                        item==="course" ?
                        <input style={{width:"100%"}} type="text" name="course" value={data[key].course} onChange={(event)=> handleChange(key,event)}/>
                        :
                        item==="institution" ?
                        <input style={{width:"100%"}} type="text"  name="institution" value={data[key].institution} onChange={(event)=> handleChange(key,event)}/> 
                        :
                        item==="hobby" ?
                        <input style={{ width:"99%"}} type="text" placeholder="e.g. Hiking" name="hobby" value={data[key].hobby} onChange={(event)=> handleChange(key,event)}/>
                        :
                        item==="language" ?
                        <input style={{width:"100%"}} type="text" name="language" value={data[key].language} onChange={(event) => {handleChange(key,event)}}/>
                        :
                        item==="level" &&
                        <select className="dropdown" name="level" value={data[key].level} onChange={(event) => {handleChange(key,event)}}>
                            <option value="Please select">Please select</option>
                            <option value="Elementary proficienct">Elementary proficienct</option>
                            <option value="Limited working proficiency">Limited working proficiency</option>
                            <option value="Professional working proficiency">Professional working proficiency</option>
                            <option value="Full professional proficiency">Full professional proficiency</option>
                            <option value="Native or bilingual proficiency">Native or bilingual proficiency</option>
                        </select>
                    }
                    </td>
                    :
                    <td>
                        <div style={{width:"96%",fontSize:"14px"}}>
                        {data[key][item]}
                        </div>
                    </td>
                    )}
                    {editClicked && allowEdit.includes(key)?
                    <td><button onClick={handleSave}>save</button></td>
                    :
                    <td><button onClick={()=>{handleAllowEdit(key)}}>edit</button></td>}
                </tr>
                )}
            </tbody>
        </table>
    </div>
    )
}

export default Table