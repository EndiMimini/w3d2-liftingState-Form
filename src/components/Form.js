import React, {useState} from "react";
import '../App.css'
const Form = (props) => {

    const {studentList, setStudentList} = props

    const [name, setName] = useState("");
    const [favStack, setFavStack] = useState("");
    const [smart, setSmart] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();
        
        if (name.length <3 || favStack === ''){
            setErrorMessage('Your form has some unsolved issues!')
        }
        else {
            setStudentList([...studentList, 
                {
                    name: name,
                    favStack: favStack,
                    smart: smart,
                    id: Math.floor(Math.random()*10000).toString()
            }])
            setName("");
            setFavStack("");
            setErrorMessage("");
        }
        
    }

    return(
        <div className="form">
            <h1>Create a student</h1>
            {
                errorMessage?
                <p>{errorMessage}</p>:
                null
            }
            <form onSubmit={(e)=>submitHandler(e)}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Enter the student name"/>
                </div>
                { name.length >0 && name.length <3?
                <p className="red">The name should be 3 characters or more</p>:
                null
                }
                <div>
                    <label>Select your favorite stack: </label>
                    <select value={favStack} onChange={(e)=>setFavStack(e.target.value)}>
                        <option default>Choose something</option>
                        <option value="Mern">Mern</option>
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                        <option value="C#">C#</option>
                    </select>
                </div>
                <div>
                    <label>Is the student smart? </label>
                    <input type="checkbox" checked={smart} onChange={(e)=>setSmart(!smart)}/>
                </div>
                <button>Create the student</button>
                
            </form>

            
        </div>
    )
}
export default Form;