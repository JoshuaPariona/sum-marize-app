import React, { useEffect, useState } from 'react'
import { getStudents } from '../../../data/Student';

const ListStudents = () => {

    const [students,  setStudents] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() =>{
        getStudents()
        .then((res) => {
            setStudents(res);
        })
        .finally(() => {
            setLoader(false);
        })
    }, [])

  return (
    <div className="student-container">
      <table aria-hidden= "true" className="student-table">
        <tr className="row-header row-gray">
            <td colSpan={9}>Alumnos matriculados</td>
        </tr>
        <tr>
            <td className="cell-weight">Id</td>
            <td className="cell-weight">Código</td>
            <td className="cell-weight">Apellido Paterno</td>
            <td className="cell-weight">Apellido Materno</td>
            <td className="cell-weight">Nombres</td>
            <td className="cell-weight">EP</td>
            <td className="cell-weight">EC</td>
            <td className="cell-weight">EF</td>
            <td className="cell-weight">NP</td>
        </tr>
        {
            students.map((student) => {
            return(
                <tr  key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.code}</td>
                    <td>{student.paternal}</td>
                    <td>{student.maternal}</td>
                    <td>{student.names}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            )})
        }
      </table>
    </div>
  )
}

export default ListStudents
