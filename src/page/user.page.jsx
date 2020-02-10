import React, { useEffect, useState } from 'react'
import './user.style.css'

import { useParams} from "react-router";



export const User =() => {

    const [employee, setEmployee] = useState(null)
    const [index, setIndex] = useState(null)
    const [attendance, setAttendance] = useState(null)


    let { name } = useParams();
    const users = JSON.parse(localStorage.getItem('employees'))

    function search(nameKey, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].fullname === nameKey) {
                return [myArray[i], i];
            }
        }
    }

    useEffect(() => {
        
        const [user, index] = search(name, users )
        const attendance = JSON.parse(localStorage.getItem('attendance'))
       setAttendance(attendance)
        setEmployee(user)
        setIndex(index)       
    }, [ name])


    const handleSubmit = (e) => {
        e.preventDefault()
        const datas = {
            Monday: e.target['Monday'].value,
            Tuesday: e.target['Tuesday'].value,
            Wednesday: e.target['Wednesday'].value,
            Thursday: e.target['Thursday'].value,
            Friday: e.target['Friday'].value,
        }
        employee.attendance = datas
        attendance[index] = employee
        localStorage.setItem('attendance', JSON.stringify(attendance))

        
    }

    // const {Monday, Tuesday, Wednesday, Thursday, Friday} = attendance[index].attendance

    return(

<>
        <div className="card user">
            <div className="card-header">
                <div className="card-header__avatar">{employee ?   <img style={{height: '100%'}} alt = {employee.fullname}  src = {employee.picture.medium} /> : null }</div><a data-target="#exampleModalCenter" data-toggle="modal" href="#" className="card-header__follow">Add Attendance</a>
            </div>
            <div className="card-content">
                <div className="card-content__username">{employee ?employee.fullname : null}</div>
                <div className="card-content__bio">{employee ?employee.department : null}</div>
            </div>
            
        </div>

        <div className="modal fade colorWhite" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Attendance</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {employee ? 
                        <div className="modal-body">
                            <form onSubmit = {handleSubmit}>
                                <div className="form-group">
                                    <label >Monday</label>
                                    <input defaultValue = {attendance[index] ? attendance[index].attendance.Monday : null} type="time" name = 'Monday' className="form-control"   />
                                </div>
                                <div className="form-group">
                                    <label >Tuesday</label>
                                    <input defaultValue = {attendance[index] ? attendance[index].attendance.Tuesday : null} type="time" name = 'Tuesday' className="form-control"   />
                                </div>
                                <div className="form-group">
                                    <label >Wednesday</label>
                                    <input defaultValue = {attendance[index] ? attendance[index].attendance.Wednesday : null} type="time" name = 'Wednesday' className="form-control"   />
                                </div>
                                <div className="form-group">
                                    <label >Thursday</label>
                                    <input defaultValue = {attendance[index] ? attendance[index].attendance.Thursday : null} type="time" name = 'Thursday' className="form-control"   />
                                </div>
                                <div className="form-group">
                                    <label >Friday</label>
                                    <input defaultValue = {attendance[index] ? attendance[index].attendance.Friday : null} type="time" name = 'Friday' className="form-control"   />
                                </div>
                                
                            
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                        : null }
                   
                </div>
            </div>
        </div>

    </>
       
    )
}