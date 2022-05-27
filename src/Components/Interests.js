import React,{useState} from "react" 
import "../css/global.css" 
import "../css/personal.css" 
import {useSelector,useDispatch} from "react-redux" 
import Table from "./Table"

const Interests = (props) => {
    const data=useSelector(state=>state.resume.interests)
    const [show,setShow]= useState(false)
    const count=props.interests
    const interests=useSelector(state=>state.resume.interests[count])
    const dispatch= useDispatch()
    const handleChange = (event) => {
        dispatch({type:"INTERESTS",payload:{name:event.target.name,value:event.target.value, count:count}})
    }
    return (
        <div>
            {props.interests===props.maxComponent && props.maxComponent>1 && 
            <div style={{width:"100%"}}>
                <hr/>
                <Table data={data} maxComponent={props.maxComponent} count={count} type="INTERESTS"/>
            </div>}            
            {(props.interests===props.maxComponent || show===true) &&
            <div>
                <hr/>
                {props.interests!==props.maxComponent && <button style={{marginLeft:"94%"}} onClick={()=>{setShow(false)}}>close</button>}
            <div className="inputrow-1">
                <div className="container" style={{width:"100%"}}> 
                    <input className="floating-input" style={{ width:"99%"}} type="text" placeholder=" " name="hobby" value={interests.hobby} onChange={handleChange}/>
                    <label className="floating-label">Hobby</label>
                </div>
            </div>
            </div>
            }
            {props.interests===props.maxComponent &&
            <button className="add-qualification" onClick={props.AddInterests}>Add another hobby</button>}
        </div>
        
    )
}

export default Interests