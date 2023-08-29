import React from "react";
import  ReactDOM  from "react-dom";
import css from './index.css'
import profilePic from './profile2.png'
function Cv(){
    return <div className="mainContainer">
        <div className="firstRow">
            
            <div className="location">
              <p className="text"> Gulzare-E-Hijri, PS City 1, Scheme 33</p></div>
            <div className="information">
                <div className="phoneNumber contents"><p className="header">PHONE</p><p className="text">03343916764</p></div>
                <div className="emailAddress contents"><p className="header">Email Address</p><p className="text">faraztariq12123@gmail.com</p></div>
                <div className="web contents"><p className="header">Web</p><p className="text">Threads</p></div>


            </div>
        </div>
        <div className="secondRow">
            <div className="emptyDiv"><p className="emptyPara"></p></div>
            <div className="imageDiv">
                <img src={profilePic} alt=""/ >
            </div>
            <div className="introDiv">
                <h2>Faraz <br />Tariq <hr /></h2>
                <p className="para0">Full Stack Developer</p>
                <p className="para">To offer my skills in an organization offering a <br /> visionary career
track and a working environment <br /> that will enhance my skills
and add value to the <br /> organization.</p>
            </div>
        </div>
        <div className="thirdRow">faraz</div>


    </div>
}

ReactDOM.render(<Cv/>, document.querySelector('#root'));