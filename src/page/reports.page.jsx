import React, { useState, useEffect } from 'react'

export const Reports = () => {


    const [reports, setReports] = useState(null)

    const attendance = JSON.parse(localStorage.getItem('attendance'))
    console.log(attendance)




    return(
        
        <table style={{color:'white', textAlign: 'center'}} class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Full Name</th>
      <th scope="col">Department</th>
      <th scope="col">Monday</th>
      <th scope="col">Tuesday</th>
      <th scope="col">Wednesday</th>
      <th scope="col">Thursday</th>
      <th scope="col">Friday</th>
    </tr>
  </thead>
  <tbody>
  {attendance ? attendance.map((a,i) => {
      return (<tr key= {i}>

                <th scope="row">{i + 1}</th>
                <td>{a ?<a href={`report/${a.fullname}`}> {a.fullname} </a>:'---'}</td>
                <td>{a ? a.department: '---'}</td>
                <td>{a ? a.attendance.Monday: '---'}</td>
                <td>{a ? a.attendance.Tuesday: '---'}</td>
                <td>{a ? a.attendance.Wednesday: '---'}</td>
                <td>{a ? a.attendance.Thursday: '---'}</td>
                <td>{a ? a.attendance.Friday: '---'}</td>
            </tr>
        )
  }) : null}
    
  </tbody>
</table>
    )
}