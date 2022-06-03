import React from "react"
import "../css/global.css" 
import "../css/personal.css" 
import {useSelector,useDispatch} from "react-redux"

const Objective = () => {
    const dispatch= useDispatch()
    const objective=useSelector(state=>state.resume.objective)

    const handleChange = (event) => {
        dispatch({type:"OBJECTIVE",payload:event.target.value})
    }
    return (
        <div>
            <span className="section-heading">Objective</span>
            <hr/>
            <label>About me</label>
            <textarea style={{ width:"99%",height:"80px"}} name="objective" title="test-objective" value={objective} onChange={handleChange}/>
        </div>
    )
}

export default Objective