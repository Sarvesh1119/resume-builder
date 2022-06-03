import React,{useState} from 'react'
import {postData} from "../store/actions" 
import {useSelector, useDispatch} from "react-redux" 
import {Link} from "react-router-dom"

const PostButton = () => {
    const dispatch= useDispatch()
    const state= useSelector(state=> state.resume)
    const handleSubmit = () => {
        dispatch(postData(state))
    }
    return (
            <button className="submit-button" title="post-button" onClick={handleSubmit}>Submit</button>
    )
}

export default PostButton