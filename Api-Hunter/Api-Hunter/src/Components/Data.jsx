import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { POST_USER_PENDING } from '../Redux-saga/user/action/Action';
import { DELETE_USER_PENDING, UPDATE_USER_PENDING } from '../Redux-saga/user/Action';
const Data = () => {

    let email = useRef()
    let password = useRef()
    let user = useSelector((state) => state.userReducer)
    const [view, setview] = useState({})

    let dispatch = useDispatch();
    let addUser = () => {
        let data = {
            email: email.current.value,
            password: password.current.value,
        }
        dispatch({ type: POST_USER_PENDING, payload: data })

    }
    let HandleDelete = (id) => {
        dispatch({ type: DELETE_USER_PENDING, payload: id })
    }
    let viewdata = (id) => {
        console.log(id);
        let userData = user.user.find(user => user.id === id)
        setview(userData);
        // console.log(userData);
    };
    let updateHandler = (e) => {
        // console.log(e);
        setview({ ...view, [e.target.name]: e.target.value })
        console.log(view);
    };
    let updateData = () => {
        dispatch({ type: UPDATE_USER_PENDING, payload : view }); 
    };
    return (
        <>
            <input type="text" ref={email} />
            <input type="text" ref={password} />
            <button onClick={addUser}>save</button>
            <div>
                {
                    user.user?.map((val, ind) => {
                        console.log(val);
                        return (
                            <>
                                <h1>
                                    {val.email}
                                </h1>
                                <h1>
                                    {val.password}
                                </h1>
                                <button class="btn btn-danger mr-5" onClick={() => { HandleDelete(val.id) }}>delete</button>
                                <button className='btn btn-primary' data-toggle="modal" data-target="#exampleModal" onClick={() => { viewdata(val.id) }}>Update</button>

                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <input type="text" value={view.email} placeholder='email' name='email' onChange={updateHandler} />
                                                <input type="text" value={view.password} placeholder='password' name='password' onChange={updateHandler} />
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={updateData}>Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div >
                            </>
                        )
                    })
                }
            </div >
        </>
    )
}

export default Data