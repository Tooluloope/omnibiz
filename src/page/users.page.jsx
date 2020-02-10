import React, { useEffect, useState } from 'react'
import './users.style.css'
import { Link } from 'react-router-dom'

export const Users = () => {

    const [employees, setEmployees] = useState(null)

    useEffect(() => {
        setEmployees( JSON.parse(localStorage['employees']))

    }, [])      
    const handleClick = () => {

    }


    return(
        <div className="container">
		
            {employees ? employees.map(emp =>(
                <Link to={`user/${emp.fullname}`}  onClick = {handleClick} className="card" key = {emp.fullname}>
                    <section>
                        <img className='img-thumbnail' alt = {emp.fullname} src = {emp.picture.thumbnail} />
                        <h3 className="user-name">{emp.fullname}</h3>
                        <span className="user-role">{emp.department}</span>
                    </section>
		        </Link>
                )) : 'No Employees'}
        </div>
    )
}