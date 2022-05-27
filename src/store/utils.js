import axios from "axios"
import {useDispatch} from "react-redux"

const PostUser = async (url,data,token) => {
    const dispatch= useDispatch()
    try{
        let response= await axios.post(url,data,{headers:{'token': token}})
        //console.log(response.data)
        /*fetch(url,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type": "application/json",
                "token":token
            }
        }).then(response=> console.log(response.json()))*/
    }catch(e){
        console.error(e.message)
        dispatch({type:"ERROR",msg:e.response.data.msg})
    }
}

export default PostUser