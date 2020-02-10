import React, { useState, useEffect } from 'react'

export const Reports = () => {


    const [reports, setReports] = useState(null)

    const attendance = JSON.parse(localStorage.getItem('attendance'))
    console.log(attendance)




    return(
        
        <table style={{color:'white'}} class="table">
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
      console.log(a.fullname)
      return (<tr key= {i}>

                <th scope="row">{i + 1}</th>
                <td>{attendance.fullname}</td>
                <td>{attendance.department}</td>
                <td>@mdo</td>
            </tr>
        )
  }) : null}
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    )
}