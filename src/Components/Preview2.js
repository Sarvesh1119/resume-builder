import React,{useEffect} from "react" 
import "../css/global.css" 
import "../css/preview.css"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"  
import {postData} from "../store/actions" 
import {useDispatch} from "react-redux" 
import withProgress from "../HigherOrderComponents/WithProgress"
import PostButton from "./PostButton"

const Preview2 = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    useEffect(()=>{
        props.handleProgress(100)
    },[])
    const state= useSelector(state=> state.resume)
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
    const handleSubmit = () => {
        dispatch(postData(state))
    }
    return (
        <div>
        <h1 className="page-heading" style={{marginTop:"-125px",marginBottom:"90px"}}>Preview</h1>
        <div className="preview-card">
            <div className="display">
                <div className="preview-section1">
                    <div id="preview2-photo">
                        <img src={personalDetails.image} width="130" alt="image"/>
                    </div>
                    <div className="preview2-name">
                        <span>{personalDetails.firstName}</span>
                        <br/>
                        <span>{personalDetails.lastName}</span>
                    </div>
                    <div className="preview2-profile-heading">PROFILE</div>
                    <div className="preview2-address">
                        {personalDetails.address}
                        <br/>
                        {personalDetails.city}
                        <br/>
                        {personalDetails.zipCode}
                    </div>
                    <div className="preview2-contact-heading">CONTACT</div>
                    <div className="preview2-address">
                        {personalDetails.phoneNumber}
                        <br/>
                        {personalDetails.email}
                    </div>
                    <div className="preview2-skills-heading">SKILLS</div>
                    <div className="preview2-skills">
                    {Object.keys(skills).map(key=> 
                    <div className="preview2-skillbar"><div className="preview2-skills-name">{skills[key]["skill"].toUpperCase()}</div><div id="bar"><div className="sub-bar" style={{width:skills[key]["level"]==="Beginer" ? "20%" : 
                     skills[key]["level"]==="Intermediate"?"40%" : 
                     skills[key]["level"]==="Skillfull"?"60%":
                     skills[key]["level"]==="Experienced"?"80%":
                     skills[key]["level"]==="Expert"&&"100%"   }}/></div></div>)
                    }
                    </div>
                    <div className="preview2-interests-heading">INTERESTS</div>
                    {Object.keys(interests).map(key=> <div className="preview2-hobby">{interests[key].hobby}</div>)}
                    <div className="preview2-interests-heading">LANGUAGES</div>
                    {Object.keys(languages).map(key=> 
                    <div className="display-languages">
                        <div className="preview2-languages">{languages[key].language}</div>
                        <div className="preview2-languages2">{languages[key].level}</div>
                    </div>
                    )}

                </div>
                <div className="preview-section2"> 
                    <div className="section-box">
                        <div className="display-line">
                            <div className="p2-s2-heading">OBJECTIVE</div>
                            <div className="p2-s2-line"/>
                        </div>
                        <div className="ps-s2-objective">
                            {objective}
                        </div>
                    </div> 
                    <div className="section-box">
                        <div className="display-line">
                            <div className="p2-s2-heading">WORK EXPERIENCE</div>
                            <div className="p2-s2-line"/>
                        </div>
                        {Object.keys(workDetails).map(key=> 
                        <div className="ps-s2-container">
                        <div id="p2-s2-jobtitle">{workDetails[key].jobTitle}</div>
                        <div id="p2-s2-employer">{workDetails[key].employer}</div>
                        <div id="p2-s2-date">{workDetails[key].startDate} to {workDetails[key].endDate}</div>
                        <div id="p2-s2-city">{workDetails[key].city}</div>
                        <div id="p2-s2-description">{workDetails[key].description}</div>                        
                        </div>)}
                    </div>
                    <div className="section-box">
                        <div className="display-line">
                            <div className="p2-s2-heading">EDUCATION</div>
                            <div className="p2-s2-line"/>
                        </div>
                        {Object.keys(educationDetails).map(key=> 
                        <div className="ps-s2-container">
                        <div id="p2-s2-jobtitle">{educationDetails[key].school}</div>
                        <div id="p2-s2-employer">{educationDetails[key].degree}</div>
                        <div id="p2-s2-date">{educationDetails[key].startDate} to {educationDetails[key].endDate}</div>
                        <div id="p2-s2-city">{educationDetails[key].city}</div>
                        <div id="p2-s2-description">{educationDetails[key].description}</div>                        
                        </div>)}
                    </div>
                    <div className="section-box">
                        <div className="display-line">
                            <div className="p2-s2-heading">CERTIFICATIONS</div>
                            <div className="p2-s2-line"/>
                        </div>
                        {Object.keys(courses).map(key=> 
                        <div className="ps-s2-container">
                        <div id="p2-s2-jobtitle">{courses[key].course}</div>
                        <div id="p2-s2-employer">{courses[key].institution}</div>
                        <div id="p2-s2-date">{courses[key].startDate} to {courses[key].endDate}</div>
                        <div id="p2-s2-description">{courses[key].description}</div>                        
                        </div>)}
                    </div>
                    <div className="section-box">
                        <div className="display-line">
                            <div className="p2-s2-heading">REFERENCES</div>
                            <div className="p2-s2-line"/>
                        </div>
                        {Object.keys(references).map(key=> 
                        <div className="ps-s2-container">
                        <div id="p2-s2-jobtitle">{references[key].companyName}</div>
                        <div id="p2-s2-employer">{references[key].contactPerson}</div>
                        <div id="p2-s2-description">{references[key].phoneNumber}</div>   
                        <div id="p2-s2-description">{references[key].email}</div>                                             
                        </div>)}
                    </div>
                  
                </div>
            </div>
        </div>
        <Link to="submit">
            <PostButton/>
        </Link>
        </div>
    )
}

export default withProgress(Preview2)