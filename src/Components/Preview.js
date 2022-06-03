import React,{useEffect} from "react" 
import "../css/global.css" 
import "../css/preview.css"
import {useSelector} from "react-redux"  
import {useDispatch} from "react-redux" 
import withProgress from "../HigherOrderComponents/WithProgress"
import PostButton from "./PostButton"
import {Link} from "react-router-dom"

const Preview = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    useEffect(()=>{
        props.handleProgress(100)
    },[])
    const dispatch=useDispatch()
    const personalDetails= useSelector(state=> state.resume.personalDetails)
    const objective= useSelector(state=> state.resume.objective)
    const educationDetails= useSelector(state=> state.resume.educationDetails)
    const workDetails= useSelector(state=> state.resume.workExperience)
    const interests= useSelector(state=> state.resume.interests)
    const references= useSelector(state=> state.resume.references)
    const skills= useSelector(state=> state.resume.skills)
    const courses= useSelector(state=> state.resume.courses)
    const languages= useSelector(state=> state.resume.languages)

    return (
        <div>
        <h1 className="page-heading" style={{marginTop:"-125px",marginBottom:"90px"}}>Preview</h1>
        <div className="preview-card">
            <div className="display">
                <img src={personalDetails.image} width="100" alt="image"/>
                <div className="name">
                    <div className="Name">
                        {personalDetails.firstName}
                    <br/>
                        {personalDetails.lastName}
                    </div>
                    <br/>
                    <div className="address">
                        {personalDetails.address}
                        <br/>
                        {personalDetails.city} {personalDetails.zipCode}
                    </div>
                </div>
                <div className="phone">
                    {personalDetails.phoneNumber}
                    <br/>
                    {personalDetails.email}
                </div>
            </div>
            <div className="display" style={{width:"100%"}}>
                <div className="education">
                    <h3>CAREER OBJECTIVE</h3>
                    <hr/>
                    {objective}
                </div>
                <div style={{width:"6%"}}/>
                <div className="work">
                    <h3>WORK HISTORY</h3>
                    {Object.keys(workDetails).map(key=> 
                        <div className="margin10">
                            <hr/>
                            <div className="margin7">
                                {workDetails[key].jobTitle}
                            </div>
                            <div className="margin7">
                                {workDetails[key].employer}
                            </div>
                            <div className="margin7">
                                {workDetails[key].startDate} to {workDetails[key].endDate}
                            </div>
                            <div className="margin7">
                                {workDetails[key].city}
                            </div>
                            <div className="margin7">
                                {workDetails[key].description}
                            </div>
                        </div>  
                    )}
                </div>
            </div>
            <div className="display" style={{width:"100%"}}>
                <div className="skills">
                    <h3>SKILLS AND PROFICIENCIES</h3>
                    <hr/>
                    {Object.keys(skills).map(key=> 
                    <div style={{marginTop:"10px"}}>
                        <div>
                            {skills[key].skill}  -  {skills[key].level}
                        </div>
                        <div>
                        </div>
                    </div>   
                    )}
                </div>
                <div style={{width:"6%"}}/>
                <div className="interests">
                        <h3>INTERESTS</h3>
                        <hr/>
                        {console.log(Object.keys(interests))}
                        {Object.keys(interests).map(key=> 
                            <div style={{marginTop:"10px"}}>
                                <div>
                                    {interests[key].hobby}
                                </div>
                            </div>
                        )}
                </div>
            </div>
            <div className="display" style={{width:"100%"}}>
                <div className="references">
                    <h3>REFERENCES</h3>
                    {Object.keys(references).map(key=> 
                        <div className="margin10">
                            <hr/>
                            <div className="margin7">
                                {references[key].contactPerson}
                            </div>
                            <div className="margin7">
                                {references[key].companyName}
                            </div>
                            <div className="margin7">
                                {references[key].phoneNumber}
                            </div>
                            <div className="margin7">
                                {references[key].email}
                            </div>
                        </div>    
                    )}
                </div>
                <div style={{width:"6%"}}/>
                <div className="education">
                    <h3>EDUCATIONAL BACKGROUND</h3>
                    {Object.keys(educationDetails).map(key=> 
                    <div className="margin10">
                    <hr/>
                    <div className="margin7">
                          { educationDetails[key].school}
                    </div>
                    <div className="margin7">
                           {educationDetails[key].degree}
                    </div>
                    <div className="margin7">
                        {educationDetails[key].startDate} to {educationDetails[key].endDate}
                    </div>
                    <div className="margin7">
                        {educationDetails[key].city}
                    </div>
                    <div className="margin7">
                        {educationDetails[key].description}
                    </div>
                    </div>
                    )}
                </div>
            </div>
            <div className="display" style={{width:"100%"}}>
                <div className="courses">
                    <h3>COURSES</h3>
                    {Object.keys(courses).map(key=> 
                        <div style={{marginBottom:"10px"}}>
                            <hr/>
                            <div style={{marginTop:"7px"}}>
                                {courses[key].course}
                            </div>
                            <div style={{marginTop:"7px"}}>
                                {courses[key].startDate} to {courses[key].endDate}
                            </div>
                            <div style={{marginTop:"7px"}}>
                                {courses[key].institution}
                            </div>
                            <div style={{marginTop:"7px"}}>
                                {courses[key].description}
                            </div>
                        </div>    
                    )}
                </div>
                <div style={{width:"6%"}}/>
                <div className="languages">
                    <h3>LANGUAGES</h3>
                    <hr/>
                    {Object.keys(languages).map(key=> 
                    <div style={{marginTop:"10px"}}>
                        <div>
                            {languages[key].language} - {languages[key].level}
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
        <Link to="submit">
            <PostButton/>
        </Link>
        </div>
    )
}

export default withProgress(Preview)