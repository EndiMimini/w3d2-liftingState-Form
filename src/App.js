import './App.css';
import React, {useState} from 'react';

import Display from './components/Display';
import Form from './components/Form';

function App() {

  const [studentList, setStudentList] = useState([]);

  return (
    <div className="App">
      <Form studentList={studentList} setStudentList={setStudentList}/>
      <Display studentList={studentList} setStudentList = {setStudentList} />
    </div>
  );
}

export default App;
