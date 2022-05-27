import React,{useState} from "react" 
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import ProgressBar from "./Components/ProgressBar"
import PersonalDetails from "./Components/PersonalDetails" 
import Experiences from "./Components/Experiences"
import Template from "./Components/Template"
import Preview from "./Components/Preview"
import Preview2 from "./Components/Preview2"
import Submit from "./Components/Submit"
import {Route, Switch, Redirect} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"

const App = () => {
    const progress= useSelector(state=> state.progress)
    return (
        <div>
            {progress!==0 &&
            <ProgressBar percent={progress}/>}
            <Switch>
                <Route path="/personal-details" exact>
                    <PersonalDetails/>  
                </Route>
                <Route path="/experiences" exact>
                    <Experiences/>
                </Route>
                <Route path="/" exact>
                    <Redirect to="/login"/>
                </Route >
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup" exact>
                    <Signup/>
                </Route>
                <Route path="/preview" exact>
                    <Template/>
                </Route>
                <Route path="/template1" exact>
                    <Preview/>
                </Route>
                <Route path="/template2" exact>
                    <Preview2/>
                </Route>
                <Route path="/submit" exact>
                    <Submit/>
                </Route>
                <Route path="*">
                    <h1>Page not found</h1> 
                </Route>
            </Switch>
        </div>
    )
}

export default App