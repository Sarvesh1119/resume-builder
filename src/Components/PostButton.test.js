import {render, fireEvent} from "@testing-library/react"
import PostButton from "./PostButton" 

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {store} from "../store/index"

describe("testing",()=>{
    const mockStore = configureStore();
    let store1;
    test("post-button",()=>{
        const initialState = store
        store1=mockStore(initialState)
        const {queryByTitle}= render(
        <Provider store={store1}>
            <PostButton/>
        </Provider>)
        const btn= queryByTitle("post-button")
        expect(btn).toBeTruthy()        
        }
    )
    }
)
