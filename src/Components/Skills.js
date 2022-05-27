import React,{useState} from "react" 
import "../css/global.css" 
import "../css/personal.css" 
import {useSelector,useDispatch} from "react-redux"

const Skills = (props) => {
    const [isSkillValid,setIsSkillValid]= useState(true)
    const [isSkillTouched,setIsSkillTouched]= useState(false)
    const enteredSkillDetails= useSelector(state=>state.resume.skills)
    const enteredSkills= Object.keys(enteredSkillDetails).map(key=> enteredSkillDetails[key].skill.toLowerCase())
    const count=props.skills 
    const [id,setId]= useState(count)
    const [show,setShow]= useState(false)
    const skillShow=useSelector(state=> state.resume.skills)
    console.log(skillShow)
    const skills=useSelector(state=>state.resume.skills[id])
    const dispatch=useDispatch()
    const handleChange= (event) => {
        if(event.target.name==="skill"){
            setIsSkillTouched(true)
            event.target.value.trim()!=="" && enteredSkills.includes(event.target.value.toLowerCase()) ? setIsSkillValid(false) :
            setIsSkillValid(true)
            if(!enteredSkills.includes(event.target.value.toLowerCase())){
                dispatch({type:"SKILLS",payload:{name:event.target.name,value:event.target.value,count:id}})
            }
            else{
                dispatch({type:"SKILLS",payload:{name:event.target.name,value:"",count:id}})
            }
        }
        else{
            dispatch({type:"SKILLS",payload:{name:event.target.name,value:event.target.value,count:id}})
        }
      
    }
    const handleDelete= (key) => {
        setId(prevState=>prevState-1)
        dispatch({type:"REDUCE_COUNT",payload:{name:"skills"}})
        dispatch({type:"DELETE_SKILL",value:key})
    }
    console.log(isSkillTouched,isSkillValid)
    return (
        <div>
            {props.skills===props.maxComponent && props.maxComponent>1 && 
            <div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{display:"flex",flexWrap:"wrap"}}>
                {Object.keys(skillShow).map(key=> Number(key)!==Number(Object.keys(skillShow).length) && <div id="skill-container">{Object.keys(skillShow[key]).map(item=> item==="skill" ? <span>{skillShow[key][item]} - </span> : <span>{skillShow[key][item]}<button id="remove-skill" onClick={()=>handleDelete(key)}>x</button></span>)}</div>)}
                </div>
                <br/>
                <br/>
            </div>
            <hr/>
            </div>
            }
            {props.skills===props.maxComponent || show===true?
            <div>
                {props.skills!==props.maxComponent && <button style={{marginLeft:"94%"}} onClick={()=>{setShow(false)}}>close</button>}
            <div className="inputrow-1">
                <div className="container" style={{width:"47%"}}>
                    {!isSkillValid ?
                        <input className="outline-border" style={{width:"100%",borderColor:  "red"}} type="text" placeholder=" " name="skill" onChange={handleChange}/>
                    :
                    <div>
                        <input className="floating-input" style={{width:"100%"}} type="text" placeholder=" " name="skill" value={skills.skill} onChange={handleChange}/>
                        <label className="floating-label">Skill</label>
                    </div>
                    }
                    {!isSkillValid && <div style={{color:"red",marginTop:"-15px",marginBottom:"10px"}}>Skill already exists.</div>}
                </div>
                <div style={{width:"7%"}}/>
                <div style={{width:"45%"}}> 
                    <br/>
                    <select className={enteredSkillDetails[count].level==="" ? "dropdown" : "dropdown-changed"}  name="level" value={skills.level} onChange={handleChange}>
                        <option value="">Level</option>
                        <option value="Beginer">Beginer</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Skillfull">Skillfull</option>
                        <option value="Experienced">Experienced</option>
                        <option value="Expert">Expert</option>
                    </select>
                </div>
            </div>
            </div>
            :
        ""
            }
            {props.skills===props.maxComponent &&
            <div>
            {console.log(id)}
            <button className="add-qualification" onClick={props.AddSkills}>Add another skill</button>
            </div>}      
        </div>
    )
}

export default Skills

