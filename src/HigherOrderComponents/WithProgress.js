import React from 'react'
import {progress} from "../Components/actions"

import {connect} from "react-redux"

const withProgress = OriginalComponent => {
    const progressClass = (props) => {
    
    const handleProgress= (percent) => {
        props.progressMap(percent)
    }
    return <OriginalComponent handleProgress={handleProgress}/>
    }

    const mapDispatchToProps = (dispatch) => {
    return {
      progressMap: (payload) => dispatch(progress(payload)),
    };
    }
  return connect(null,mapDispatchToProps)(progressClass)
}


export default withProgress

