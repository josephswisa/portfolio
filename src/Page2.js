import React from "react";
import "./page2.css"
import email from "./assests/email_icon.png"
import git from "./assests/github_icon.png"
import linkedin from  "./assests/linkedin_icon.png"
function Page2 () {


    return (
     <div className={"contactDiv"}>
         <br/>
         <img src={email}/> jossefswisa@gmail.com
         <br/>
         <img src={linkedin} /> Linkdin.com\ln\yossiswisa
     <br/>
         <img src={git}/> github.com\josephswisa
     </div>
    )
}

export default Page2;