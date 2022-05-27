import React,{useEffect} from "react" 
import "../css/global.css" 
import "../css/personal.css" 
import Objective from "./Objective"
import Education from "./Education"
import WorkExperience from "./WorkExperience"
import Interests from "./Interests"
import References from "./References"
import Skills from "./Skills"
import Courses from "./Courses"
import Languages from "./Languages"
import {Link} from "react-router-dom" 
import {useSelector, useDispatch} from "react-redux"
import Card from "./Card"
import withProgress from "../HigherOrderComponents/WithProgress"

const Experiences = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    useEffect(()=>{
        props.handleProgress(50)
    },[])
    const education=useSelector(state=> state.count.education)
    const work=useSelector(state=> state.count.work)
    const interests=useSelector(state=> state.count.interests)
    const reference=useSelector(state=> state.count.reference)
    const skills=useSelector(state=> state.count.skills)
    const courses=useSelector(state=> state.count.courses)
    const languages=useSelector(state=> state.count.languages)
    console.log(education)
    const dispatch= useDispatch()
    const AddEducation= () => {
        dispatch({type:"ADD_FIELD",payload:{name:"educationDetails",count:education+1}})
        dispatch({type:"ADD_COUNT", payload:"education"})
    }
    const AddWork= () => {
        dispatch({type:"ADD_FIELD",payload:{name:"workExperience",count:work+1}})
        dispatch({type:"ADD_COUNT", payload:"work"})
    }
    const AddInterests= () => {
        dispatch({type:"ADD_FIELD",payload:{name:"interests",count:interests+1}})
        dispatch({type:"ADD_COUNT", payload:"interests"})
    }
    const AddReferences= () => {
        dispatch({type:"ADD_FIELD",payload:{name:"references",count:reference+1}})
        dispatch({type:"ADD_COUNT", payload:"reference"})
    }
    const AddSkills= () => {
        dispatch({type:"ADD_FIELD",payload:{name:"skills",count:skills+1}})
        dispatch({type:"ADD_COUNT", payload:"skills"})
    }
    const AddCourses= () => {
        dispatch({type:"ADD_FIELD",payload:{name:"courses",count:courses+1}})
        dispatch({type:"ADD_COUNT", payload:"courses"})
    }
    const AddLanguages= () => {
        dispatch({type:"ADD_FIELD",payload:{name:"languages",count:languages+1}})
        dispatch({type:"ADD_COUNT", payload:"languages"})
    }
    console.log([Array(education).length])
    return (
        <div>
            <h1 className="page-heading" style={{marginTop:"-125px",marginBottom:"90px"}}>My Experiences</h1>
            <Card>
                <Objective/>
            </Card>
            {/*<div className="space">
                <div className="card">
                    <Objective/>
                </div>
            </div>*/}
            <Card>
                <span className="section-heading">Education and Qualifications</span>
                {[...Array(education+1).keys()].slice(1).map(item => 
                <div>
                    <Education AddEducation={AddEducation} education={item} maxComponent={education}/>
                </div>)}
            </Card>
            <Card>
            <span className="section-heading">Work experience</span>
                    {[...Array(work+1).keys()].slice(1).map(item=> 
                    <div>
                        <WorkExperience AddWork={AddWork} work={item} maxComponent={work}/>
                    </div>)}
            </Card>
            <Card>
            <span className="section-heading">Interests</span>
                    {[...Array(interests+1).keys()].slice(1).map(item=> 
                    <div>
                        <Interests AddInterests={AddInterests} interests={item} maxComponent={interests}/>
                    </div>)}
            </Card>
            <Card>
                <span className="section-heading">References</span>
                {[...Array(reference+1).keys()].slice(1).map(item=> 
                <div>
                    <References AddReferences={AddReferences} references={item} maxComponent={reference}/>
                </div>)}
            </Card>       
            <Card>
                <span className="section-heading">Skills</span>
                <hr/>
                {[...Array(skills+1).keys()].slice(1).map(item=> 
                <div>
                    <Skills AddSkills={AddSkills} skills={item} maxComponent={skills}/>
                </div>)}
            </Card>
            <Card>
                <span className="section-heading">Certifications</span>
                {[...Array(courses+1).keys()].slice(1).map(item=> 
                <div>
                    <Courses AddCourses={AddCourses} courses={item} maxComponent={courses}/>
                </div>)}
            </Card>
            <Card>
                <span className="section-heading">Languages</span>
                {[...Array(languages+1).keys()].slice(1).map(item=> 
                <div>
                    <Languages AddLanguages={AddLanguages} languages={item} maxComponent={languages}/>
                </div>)}
            </Card>
            <Link to="/preview">
                <button className="next-button">Preview</button>
            </Link>
        </div>
    )
}

export default withProgress(Experiences)