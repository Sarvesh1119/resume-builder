import {add,sub} from "./helperFunctions" 

test("add",()=>{
    expect(add(1,2)).toBe(3)
    expect(add(32,8)).toBe(40)
})

test("sub",()=> {
    expect(sub(2,3)).toBe(-1)
})