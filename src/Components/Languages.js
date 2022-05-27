import React,{useState} from "react"
import "../css/global.css" 
import "../css/personal.css" 
import {useSelector,useDispatch} from "react-redux"
import Table from "./Table"

const Languages = (props) => {
    const data=useSelector(state=>state.resume.languages)
    const dispatch= useDispatch()
    const count=props.languages
    const [show,setShow]= useState(false)
    const languages=useSelector(state=>state.resume.languages[count])

    const handleChange= (event) => {
        dispatch({type:"LANGUAGES",payload:{name:event.target.name,value:event.target.value,count:count}})
    }
    return (
        <div>
        {props.languages===props.maxComponent && props.maxComponent>1 && 
             <div style={{width:"100%"}}>
                <hr/>
                <Table data={data} maxComponent={props.maxComponent} count={count} type="LANGUAGES"/>
            </div>}        
        {(props.languages===props.maxComponent || show===true) &&
        <div>
            <hr/>
            {props.languages!==props.maxComponent && <button style={{marginLeft:"94%"}} onClick={()=>{setShow(false)}}>close</button>}
        <div className="inputrow-1">
            <div className="container" style={{width:"47%"}}>
                <input className="floating-input" style={{width:"100%"}} type="text" name="language" value={languages.language} placeholder=" " onChange={handleChange}/>
                <label className="floating-label">Language</label>
            </div>
            <div style={{width:"7%"}}/>
            <div style={{width:"45%"}}> 
                <br/>
                <select className={data[count].level==="" ? "dropdown" : "dropdown-changed"} name="level" value={languages.level} onChange={handleChange}>
                    <option value="">Level</option>
                    <option value="Elementary proficienct">Elementary proficienct</option>
                    <option value="Limited working proficiency">Limited working proficiency</option>
                    <option value="Professional working proficiency">Professional working proficiency</option>
                    <option value="Full professional proficiency">Full professional proficiency</option>
                    <option value="Native or bilingual proficiency">Native or bilingual proficiency</option>
                </select>
            </div>
        </div>
        </div>
        }
        {props.languages===props.maxComponent &&
        <button className="add-qualification" onClick={props.AddLanguages}>Add another language</button>}    
    </div>
    )
}

export default Languages