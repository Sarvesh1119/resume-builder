import React,{useState,useEffect} from "react"
import "../css/global.css" 
import "../css/personal.css" 
import {Link} from "react-router-dom" 
import {useSelector, useDispatch} from "react-redux" 
import withProgress from "../HigherOrderComponents/WithProgress"

const PersonalDetails = (props) => {
    const [isFirstName,setIsFirstName]= useState(false)
    const [isLastName,setIsLastName]= useState(false)
    const [isEmail,setIsEmail]= useState(false)
    const [complete,setComplete]= useState(false)
    const [isFirstNameTouched, setIsFirstNameTouched]= useState(false)
    const [isLastNameTouched, setIsLastNameTouched]= useState(false)
    const [isEmailTouched, setIsEmailTouched]= useState(false)
    const personalDetails=useSelector(state=> state.resume.personalDetails)
    useEffect(()=>{
        if(personalDetails.firstName!=="" && personalDetails.lastName!=="" &&personalDetails.email!=="" && personalDetails.email.includes("@")){
            setComplete(true)
        }
        else{
            setComplete(false)
        }
    },[personalDetails])
  
    const dispatch=useDispatch()
    const [profileImage,setProfileImage]= useState("")
    const handleFocus = (event) => {
        if(event.target.name==="firstName"){
            setIsFirstNameTouched(true)
        }
        else if(event.target.name==="lastName"){
            setIsLastNameTouched(true)
        }
        else if(event.target.name==="email"){
            setIsEmailTouched(true)
        }      
    }
    const handleChange = (event) => {
        if(event.target.name!=="img"){
            dispatch({type:"PERSONAL_DETAILS", payload:{value:event.target.value,name:event.target.name}})
        }
        else{
            setProfileImage(URL.createObjectURL(event.target.files[0]))
            dispatch({type:"IMG", payload:URL.createObjectURL(event.target.files[0])})
        }
    }
    const handleValidation = (event) => {
        switch(event.target.name){
            case "firstName":
                if(personalDetails.firstName.trim()===""){
                    setIsFirstName(false)
                }
                else{
                    setIsFirstName(true)
                }
            case "lastName":
                if(personalDetails.lastName.trim()===""){
                    setIsLastName(false)
                }
                else{
                    setIsLastName(true)
                }
            case "email":
                if(personalDetails.email.trim()==="" || !personalDetails.email.includes('@')){
                    setIsEmail(false)
                }
                else{
                   setIsEmail(true)
                }
        }
    }
    useEffect(()=>{
        props.handleProgress(25)
    },[])
    return (
        <div>
            <h1 className="page-heading" style={{marginTop:"-125px",marginBottom:"90px"}}>Personal details</h1>
            <div className="card">
                <span className="section-heading">Personal details</span>
                <hr/>
                <div className="inputrow-1">
                    <div className="image-input">
                        <label id="label" htmlFor="img">
                            {profileImage ==="" ?
                            <div>
                                <img id="profile-image" src="https://www.freepnglogos.com/uploads/camera-logo-png/digital-camera-black-white-logo-28.png" width="40" height="40"/>
                                <br/>
                                <span id="add-photo-text">Add photo</span>
                            </div>
                            :
                            <div>
                                <img id="output-image" src={profileImage}/>
                            </div>
                            }        
                            <input type="file" id="img" name="img" accept="image/*" onChange={handleChange}/>
                            <br/>
                        </label>
                    </div> 
                    <div className="inputrow-1-2">
                        <label>First name</label>
                        <label className="mandatory-sign">*</label>
                        {isFirstNameTouched===true && isFirstName===false ?
                        <input className="inputrow-1-2" style={{borderColor: "red"}} type="text" name="firstName" value={personalDetails.firstName} onChange={handleChange} onBlur={handleValidation} onFocus={handleFocus}/>
                        :
                        <input className="inputrow-1-2"  type="text" name="firstName" value={personalDetails.firstName} onChange={handleChange} onBlur={handleValidation} onFocus={handleFocus}/>
                        }
                        <br/>
                        <label>Last name</label>
                        <label className="mandatory-sign">*</label>
                        {isLastNameTouched===true && isLastName===false ?
                        <input className="inputrow-1-2" style={{borderColor: "red"}} type="text" name="lastName" value={personalDetails.lastName} onChange={handleChange} onBlur={handleValidation} onFocus={handleFocus}/>
                        :
                        <input className="inputrow-1-2" type="text" name="lastName" value={personalDetails.lastName} onChange={handleChange} onBlur={handleValidation} onFocus={handleFocus}/>
                        }
                    </div>
                </div>
                <div className="inputrow-1">
                    <div style={{width:"47%"}}>
                        <label>Email address</label>
                        <label className="mandatory-sign">*</label>
                        <br/>
                        {isEmailTouched===true && isEmail===false ?
                        <input style={{width:"100%",borderColor:"red"}} type="email" name="email" value={personalDetails.email} onChange={handleChange}  onBlur={handleValidation} onFocus={handleFocus}/>
                        :
                        <input style={{width:"100%"}} type="email" name="email" value={personalDetails.email} onChange={handleChange} onBlur={handleValidation} onFocus={handleFocus}/>
                        }
                    </div>
                    <div style={{width:"7%"}}/>
                    <div style={{width:"45%"}}> 
                        <label>Phone number</label>
                        <br/>
                        <input style={{width:"100%"}} type="number" name="phoneNumber" value={personalDetails.phoneNumber} onChange={handleChange}/>
                    </div>
                </div>
                <div className="inputrow-1">
                    <div style={{width:"100%"}}> 
                        <label>Addresss</label>
                        <br/>
                        <input style={{ width:"99%" }} type="text" name="address" value={personalDetails.address} onChange={handleChange}/>
                    </div>
                </div>
                <div className="inputrow-1">
                    <div style={{width:"47%"}}>
                        <label>Zip code</label>
                        <br/>
                        <input style={{width:"100%"}} type="number" name="zipCode" value={personalDetails.zipCode} onChange={handleChange}/>
                    </div>
                    <div style={{width:"7%"}}/>
                    <div style={{width:"45%"}}> 
                        <label>City/Town</label>
                        <br/>
                        <input style={{width:"100%",paddingLeft:"5px"}} type="text" placeholder="e.g. Chennai" name="city" value={personalDetails.city} onChange={handleChange}/>
                    </div>
                </div>
            </div>
            {complete===false ?
                            <button className="next-button-off">Next step</button>
            :
            <Link to="experiences">
                <button className="next-button">Next step</button>
            </Link>}
        </div>  
    )
}

export default withProgress(PersonalDetails)