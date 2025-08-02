import { useState } from "react";

function GenInfo(){
    
    const [oldname, newname] = useState("Tyler Durden");
    const handleNameChange = (event) =>{
        newname(event.target.value);
        console.log(event.target.value);
    }

    const [oldemail, newemail ] = useState("tylerdurden@gmail.com");
    const handleEmailChange = (event) =>{
        newemail(event.target.value);
        console.log(event.target.value);
    }

    const [oldnumber,newnumber] = useState("9350930301");
    const handlePhoneChange = (event) =>{
        newnumber(event.target.value);
        console.log(event.target.value);
    }


    const [isSubmitted, setIsSubmitted] = useState(false);

    function genInfoSubmit(){
        setIsSubmitted(true);
    }

    function genInfoEdit(){
        setIsSubmitted(false);
    }

    return !isSubmitted ? (
            <div className="genInfo">
                <h1> General Information </h1>
                <label htmlFor = "geninput"> Name: </label>
                <input value = {oldname} onChange={handleNameChange} id = "geninput" type="text" placeholder="Enter Your Name"/>

                <label htmlFor = "emailinput"> Email:  </label>
                <input value ={oldemail} onChange={handleEmailChange} id = "emailinput" type="email" placeholder="Enter Your Email"/>

                <label htmlFor = "phoneinput" > Phone Number: </label>
                <input onChange={handlePhoneChange} value={oldnumber} id = "phoneinput" type="number" placeholder="Enter Your Phone Number"/>

                <button onClick={genInfoSubmit} id = "submitGenInfoBtn"> Submit </button>
            </div>    
        )
        :
        (
            <div className="submittedGenInfo">

                <h3> General Information </h3>
                <p> Name : {oldname} </p>
                <p> Email Address : {oldemail} </p>
                <p> Phone Number : {oldnumber} </p>
                <button onClick={genInfoEdit} id = "editGenInfoBtn"> Edit </button>
                
            </div>
        )
}

export default GenInfo;