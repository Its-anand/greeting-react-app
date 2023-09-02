import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css' //Importing Css

const root = ReactDOM.createRoot(document.getElementById('root'));

//Css Style
const background = {
    width:"100%",
    height:"100vh",
    background:"#ADE9E0"
};

const greetingBG = {
    background:"#FFE7C4",
    position: "absolute",
    left: "50%",
    top: "20%",
    transform:" translate(-50%, 0)",
    padding: "1.1rem",
    borderRadius:"15px",
    color:'red'
};
const helloMsgStyle = {
    color:"#FF9687"
}

//Greeting Logic
let greetingMsg = "Something Went Wrong";
let currentTime = new Date().getHours();
if(currentTime >= 1 && currentTime <= 11){
    greetingMsg = "Good Morning";
    greetingBG.color = "orange";
}
else if(currentTime >= 12 && currentTime <= 18){
    greetingMsg = "Good Afternoon";
    greetingBG.color = "white";
}
else if(currentTime >=19 && currentTime <= 24){
    greetingMsg = "Good Evening";
    greetingBG.color="brown";
}
//Rendering
root.render(
    
        <div style = {background}>
            <div style={greetingBG}>
                <h1><span style={helloMsgStyle}>Hello sir,</span> {greetingMsg}</h1>
                
            </div>
        </div>
)