import React,{useState} from 'react'
import {useSelector} from "react-redux"
import "../css/global.css" 
import "../css/personal.css" 
import {educationAction} from "./actions"

const withChange = (OriginalComponent,count) => {
    return function WithChangeComponent() {
    const [isUgEntered,setIsUgEntered]= useState(false)
    const [invalidDegree,setInvalidDegree]= useState(false)
    const [isStartDateValid,setIsStartDateValid]= useState(false)
    const [isStartDateTouched,setIsStartDateTouched]= useState(false)
    const [isEndDateValid,setIsEndDateValid]= useState(false)
    const [isEndDateTouched,setIsEndDateTouched]= useState(false)
    const educationDetails=useSelector(state=>state.resume.educationDetails[count])
    const ed=useSelector(state=> state.resume.educationDetails)
    let degree= Object.keys(ed).map(key=> ed[key].degree!=="" && ed[key].degree)
    const handleChange= (event) => {
        console.log(event.target.value)
        event.target.name==="degree" && degree.includes(event.target.value) && event.target.value==="Bachelor's degree" ? setInvalidDegree(true) : setInvalidDegree(false)
        if(event.target.name==="startDate"){
            setIsStartDateTouched(true)
            if(educationDetails.endDate===""){
                setIsStartDateValid(true)
                this.props.educationAction({name:event.target.name,value:event.target.value,count:count})
                //dispatch({type:"EDUCATION_DETAILS",payload:{name:event.target.name,value:event.target.value,count:count}})
            }
            else if(event.target.value<educationDetails.endDate){
                setIsStartDateValid(true)
                this.props.educationAction({name:event.target.name,value:event.target.value,count:count})
                //dispatch({type:"EDUCATION_DETAILS",payload:{name:event.target.name,value:event.target.value,count:count}})
            }
            else{
                setIsStartDateValid(false)
                this.props.educationAction({name:event.target.name,value:"",count:count})
                //dispatch({type:"EDUCATION_DETAILS",payload:{name:event.target.name,value:"",count:count}})
            }
        }
        else if(event.target.name==="endDate"){
            setIsEndDateTouched(true)
            if(educationDetails.startDate===""){
                setIsEndDateValid(true)
                this.props.educationAction({name:event.target.name,value:event.target.value,count:count})
                //dispatch({type:"EDUCATION_DETAILS",payload:{name:event.target.name,value:event.target.value,count:count}})
            }
            else if(educationDetails.startDate<event.target.value){
                setIsEndDateValid(true)
                this.props.educationAction({name:event.target.name,value:event.target.value,count:count})
                //dispatch({type:"EDUCATION_DETAILS",payload:{name:event.target.name,value:event.target.value,count:count}})
            }
            else{
                setIsEndDateValid(false)
                this.props.educationAction({name:event.target.name,value:"",count:count})
                //dispatch({type:"EDUCATION_DETAILS",payload:{name:event.target.name,value:"",count:count}})
            }
        }
        else{
            this.props.educationAction({name:event.target.name,value:event.target.value,count:count})
            //dispatch({type:"EDUCATION_DETAILS",payload:{name:event.target.name,value:event.target.value,count:count}})
        }
        }
        return <OriginalComponent handleChange={handleChange}/>
    }
}

export function mapDispatchToProps(dispatch) {
    return {
      educationAction: (payload) => dispatch(educationAction(payload)),
    };
  }

export default withChange


