import {render, fireEvent} from "@testing-library/react"
import Login from "./Login" 

it("should not render error component",()=>{
    const {queryByTitle}= render(<Login/>)
    const err= queryByTitle("error")
    const btn= queryByTitle("login-button")
    expect(err).toBeFalsy()
    fireEvent.click(btn)
    expect(err).toBeTruthy()
})