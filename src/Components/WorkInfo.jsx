import { useState } from "react";

function Editmode(props){
    return(
        <>
            <p> Company Name : {props.oldCompanyName}</p>
            <p> Position : {props.oldPositionTitle}</p>
            <p> Responsibilities : {props.oldResp}</p>
            <p> From: {props.oldFromDate}</p>
            <p> Until : {props.oldUntilDate}</p>

            <button onClick = {props.workInfoEdit} id ="editWorkInfoBtn"> Edit </button>
        </>
    )
}

function DisplayWorkInfo(props){
    return (
        <>
            <label htmlFor="company"> Company Name: </label>
            <input id = "company" onChange={props.handleCompany} value = {props.oldCompanyName} placeholder="Enter company name"/>

            <label htmlFor="position"> Position: </label>
            <input id= "position" onChange={props.handlePosition} value = {props.oldPositionTitle} placeholder="Enter your work position"/>

            <label htmlFor="responsibility"> Work Responsibilities: </label>
            <textarea id= "responsibility" onChange={props.handleResp} value = {props.oldResp} placeholder="Enter your responsibilities"></textarea>
            
            <label htmlFor="fromdate"> Start date: </label>
            <input id= "fromdate" onChange={props.handleStartDate} type = "date" value = {props.oldFromDate} placeholder="Enter start date"/>

            <label htmlFor="enddate"> End date:</label>
            <input id= "enddate" onChange={props.handleEndDate} type="date" value = {props.oldUntilDate} placeholder="Enter end date"/>

            <button onClick = {props.workInfoSubmit} id="submitWorkInfoBtn" > Submit </button>
        </>
    )
}


function WorkInfo(){

    const [oldCompanyName, newCompanyName] = useState("");
    const [oldPositionTitle, newPositionTitle] = useState("");
    const [oldResp, newResp] = useState("");
    const [oldFromDate, newFromDate] = useState("");
    const [oldUntilDate, newUntilDate] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const workInfoSubmit = () =>{
        setIsSubmitted(true);
    }

    const workInfoEdit = () =>{
        setIsSubmitted(false)
    }

    const handleCompany = (event) => {
        newCompanyName(event.target.value);
    }

    const handlePosition = (event) => {
        newPositionTitle(event.target.value);
    }
    
    const handleResp = (event) => {
        newResp(event.target.value);
    }

    const handleStartDate = (event) =>{
        newFromDate(event.target.value);
    }

    const handleEndDate = (event) => {
        newUntilDate(event.target.value);
    }



    return !isSubmitted ? (
        <div className="workInfo">

            <h1> Work Experience </h1>

            <DisplayWorkInfo 
                oldCompanyName = {oldCompanyName} oldPositionTitle = {oldPositionTitle}
                oldResp = {oldResp} oldFromDate = {oldFromDate} oldUntilDate = {oldUntilDate} workInfoSubmit = {workInfoSubmit}
                handleEndDate = {handleEndDate}
                handleStartDate = {handleStartDate}
                handleResp = {handleResp}
                handlePosition = {handlePosition}
                handleCompany = {handleCompany}
            />
        </div>
    )
    :
    (
        <div className="submittedWorkInfo">
            <h3> Work Experience </h3>
            <Editmode 
                oldCompanyName = {oldCompanyName}
                oldResp = {oldResp}
                oldPositionTitle = {oldPositionTitle}
                oldUntilDate = {oldUntilDate}
                oldFromDate = {oldFromDate}
                workInfoEdit = {workInfoEdit}
            />
        </div>
    )


}

export default WorkInfo;