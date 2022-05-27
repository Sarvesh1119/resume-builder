import React,{useState} from "react" 
import "../css/global.css" 
import "../css/personal.css" 
import {useSelector,useDispatch} from "react-redux" 
import Table from "./Table"

const References = (props) => {
    const data=useSelector(state=>state.resume.references)
    const dispatch=useDispatch()
    const [show,setShow]= useState(false)
    const count=props.references
    const references=useSelector(state=>state.resume.references[count])
    const handleChange= (event) => {
        dispatch({type:"REFERENCES",payload:{name:event.target.name,value:event.target.value,count:count}})
    }
    return (
        <div>
            {props.references===props.maxComponent && props.maxComponent>1 && 
            <div style={{width:"100%"}}>
                <hr/>
                <Table data={data} maxComponent={props.maxComponent} count={count} type="REFERENCES"/>
            </div>}            
            {(props.references===props.maxComponent || show===true) &&
            <div>
                <hr/>
                {props.references!==props.maxComponent && <button style={{marginLeft:"94%"}} onClick={()=>{setShow(false)}}>close</button>}
            <div className="inputrow-1">
                <div className="container" style={{width:"47%"}}>
                    <input className="floating-input" style={{width:"100%"}} type="text" name="companyName" placeholder=" " value={references.companyName} onChange={handleChange}/>
                    <label className="floating-label">Company Name</label>
                </div>
                <div style={{width:"7%"}}/>
                <div className="container" style={{width:"45%"}}> 
                    <input className="floating-input" style={{width:"100%"}} type="text" name="contactPerson" placeholder=" " value={references.contactPerson} onChange={handleChange}/>
                    <label className="floating-label">Contact Person</label>
                </div>
            </div>
            <div className="inputrow-1">
                <div className="container" style={{width:"47%"}}>
                    <input className="floating-input" style={{width:"100%"}} type="number" name="phoneNumber" placeholder=" " value={references.phoneNumber} onChange={handleChange}/>
                    <label className="floating-label">Phone Number</label>
                </div>
                <div style={{width:"7%"}}/>
                <div className="container" style={{width:"45%"}}> 
                    <input className="floating-input" style={{width:"100%"}} type="text" name="email" placeholder=" " value={references.email} onChange={handleChange}/>
                    <label className="floating-label">Email Address</label>
                </div>
            </div>
            </div>
            }
            {props.references===props.maxComponent &&
            <button className="add-qualification" onClick={props.AddReferences}>Add another reference</button>}        
        </div>
    )
}

export default References