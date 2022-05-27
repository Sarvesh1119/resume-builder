import {createStore, applyMiddleware} from "redux" 
import createSagaMiddleware from "redux-saga"
import rootSaga from "./saga"

const sagaMiddleware= createSagaMiddleware() 

const resumeState= {
    personalDetails: {
        image:"",
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        address:"",
        zipCode:"",
        city:""
    },
    objective:"",
    educationDetails:{
        1:{
            degree:"",
            city:"",
            school:"",
            startDate:"",
            endDate:"",
            description:""
        }
    },
    workExperience:{
        1:{
            jobTitle:"",
            city:"",
            employer:"",
            startDate:"",
            endDate:"",
            description:""
        }
    },
    interests:{
        1:{
            hobby:""
        }
    },
    references:{
        1:{
            companyName:"",
            contactPerson:"",
            phoneNumber:"",
            email:""
        }
    },
    skills:{
        1:{
            skill:"",
            level:""
        }
    },
    courses:{
        1:{
            course:"",
            institution:"",
            startDate:"",
            endDate:"",
            description:""
        }
    },
    languages:{
        1:{
            language:"",
            level:""
        }
    }
}

const componentCount={
    education:1,
    work:1,
    interests:1,
    reference:1,
    skills:1,
    courses:1,
    languages:1
}
const errors={
    msg:""
}

const initialState={
    resume:resumeState,
    count:componentCount,
    error:errors,
    progress:0
}
const reducer = (state=initialState,action)=> {
    switch(action.type){
        case "PERSONAL_DETAILS":
             return {...state,resume:{...state.resume,personalDetails:{...state.resume.personalDetails,[action.payload.name]:action.payload.value}}}
        case "IMG":
            return {...state,resume:{...state.resume,personalDetails:{...state.resume.personalDetails,"image":action.payload}}}
        case "OBJECTIVE":
            return {...state,resume:{...state.resume,objective:action.payload}}
        case "EDUCATION_DETAILS":
            return {...state,
                    resume:{
                        ...state.resume,
                        educationDetails:
                            {...state.resume.educationDetails,
                            [action.payload.count]:
                                {...state.resume.educationDetails[action.payload.count],
                                [action.payload.name]:action.payload.value   
                                }
                            }
                        }
            }
        case "ADD_FIELD":
            return {...state,
                resume:{
                    ...state.resume,
                    [action.payload.name]:{
                        ...state.resume[action.payload.name],
                        [action.payload.count]:{...resumeState[action.payload.name][1]}
                    }
                }
            }
        case "WORK":
            return {...state,
                    resume:{
                        ...state.resume,
                        workExperience:
                        {...state.resume.workExperience,
                        [action.payload.count]:
                            {
                            ...state.resume.workExperience[action.payload.count],
                            [action.payload.name]:action.payload.value
                            }
                        }
                    }    
            }
        case "INTERESTS":
            return {...state,
                resume:{
                    ...state.resume,
                    interests:{
                        ...state.resume.interests,
                        [action.payload.count]:{
                            ...state.resume.interests[action.payload.count],
                            [action.payload.name]:action.payload.value
                        }
                    }
                }
            }
        case "REFERENCES":
            return {...state,
                resume:{
                    ...state.resume,
                    references:{
                        ...state.resume.references,
                        [action.payload.count]:{
                            ...state.resume.references[action.payload.count],
                            [action.payload.name]:action.payload.value
                        }
                    }
                }
            }
        case "SKILLS":
            return {...state,
                resume:{
                    ...state.resume,
                    skills:{
                        ...state.resume.skills,
                        [action.payload.count]:{
                            ...state.resume.skills[action.payload.count],
                            [action.payload.name]:action.payload.value
                        }
                    }
                }
            }
        case "COURSES":
            return {...state,
                resume:{
                    ...state.resume,
                    courses:{
                        ...state.resume.courses,
                        [action.payload.count]:{
                            ...state.resume.courses[action.payload.count],
                            [action.payload.name]:action.payload.value
                        }
                    }
                }
            }
        case "LANGUAGES":
            return {...state,
                resume:{
                    ...state.resume,
                    languages:{
                        ...state.resume.languages,
                        [action.payload.count]:{
                            ...state.resume.languages[action.payload.count],
                            [action.payload.name]:action.payload.value
                        }
                    }
                }
            }
        case "ADD_COUNT":
            return {...state,
                count:{
                    ...state.count,
                    [action.payload]:state.count[action.payload]+1
                }
            }
        case "DELETE_SKILL":
            return {...state,
                resume:{
                    ...state.resume,
                    skills: Object.keys(state.resume.skills).filter(key => Number(action.value)!==Number(key)).map(id=> {return state.resume.skills[id]}).reduce((obj,item,index)=>({...obj,[index+1]:item}),{})
                }        
            }
        case "REDUCE_COUNT":
            return {...state,
                    count:{...state.count,
                        [action.payload.name]:state.count[action.payload.name]-1
                    }
                }
        case "PROGRESS":
            return {...state,
                progress:Number(action.payload)}
        default:
            return state
    }
}

const store=createStore(reducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store