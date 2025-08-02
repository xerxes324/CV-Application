import { useState } from "react";


function EduInfo(){

    //states
    const [oldUniName, newUniName] = useState("");
    const [oldCourseName, newCourseName] = useState("");
    const [oldYearName, newYearName] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false)


    const handleUniChange = (event) =>{
        newUniName(event.target.value)
    }

    const handleCourseChange = (event) => {
        newCourseName(event.target.value);
    }

    const handleYearChange = (event) => {
        newYearName(event.target.value);
    }


    const eduInfoSubmit = () => {
        setIsSubmitted(true);
    }

    const eduInfoEdit = () =>{
        setIsSubmitted(false);
    }

    return !isSubmitted ? (
        <div className="educationInfo">

            <h1> Educational Information </h1>
            <label htmlFor = "education"> University: </label>
            <input value={oldUniName} onChange={handleUniChange} id = "education" type = "text" placeholder="Enter your University Name"/>

            <label htmlFor = "course"> Course: </label>
            <input value={oldCourseName} onChange={handleCourseChange} id = "course" type = "text" placeholder="Enter the title of your course"/>

            <label htmlFor="year">Graduation Year:</label>
            <input value={oldYearName} onChange={handleYearChange} id = "year" type = "number" placeholder="Enter the year you graduated"/>
            
            <button onClick={eduInfoSubmit} id="submitEduInfoBtn"> Submit </button>
        </div>
    )
    :
    (
        <div className="submittedEduInfo"> 
            <h3> Educational Information </h3>
            <p> University Name : {oldUniName}</p>
            <p> Course Name : {oldCourseName}</p>
            <p> Graduation Year : {oldYearName}</p>
            <button onClick={eduInfoEdit} id="editEduInfoBtn" > Edit </button>
        </div>
    )
}

export default EduInfo;