import React from "react";

const Display = (props) => {
    const {studentList, setStudentList}= props;

    const deleteStudentById = (idFromBelow) => {
        setStudentList(studentList.filter((student, index) => student.id !== idFromBelow));
    }
    return(
            <div className="resultDiv">
                <h2>Here are all the students: </h2>
                {
                    studentList.map((student, index)=>{
                        return(
                            <div className="results" key={index}>
                                <p>Name: {student.name}</p>
                                <p>Favorite Stack: {student.favStack}</p>
                                { student.smart?
                                <p>This student is somehow related to Albert!</p>:
                                <p>Dumb. Just Dumb!</p>
                                }
                                <button onClick={(e)=>deleteStudentById(student.id)}>Delete Student</button>
                            </div>
                        )
                    }
                )
                }
            </div>
    )
}
export default Display;