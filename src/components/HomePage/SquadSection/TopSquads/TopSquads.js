import React, { useState, useEffect } from "react";
import './TopSquads.css'
import SeeArrow from '../../../../assets/seearrow.svg';
import MessagePopup from '../../../../assets/messagepopup.svg'

function TopSquads() { 
  const [squadsConnect, setSquadsConnect] = useState([]);

  useEffect(() => { 
    fetch("http://localhost:3001/squadsConnect") 
      .then(response => response.json())
      .then(data => setSquadsConnect(data));
  }, []);

  return ( 
    <div className="topsquad-section">      
      <div className="topsquad-content">  
        <div className="row">
          <div className="col-md-8">
            <div className="topskillssquads-content">Top Squads to connect</div>
          </div>
          <div className="col-md-4">
            <img className="messagepopup-imgcontent" src={MessagePopup} alt="messagePopup" />
          </div>
        </div>            
        {squadsConnect.map((squadsConnect) => (
          <div className="topconnect-sec">
            <div className="topconnect-section">
              <div className="row">
                <div className="col-md-2">
                  <img className="topprofile-imgcontent" src={squadsConnect.icon} alt="feedProfile" />
                </div>
                <div className="col-md-6  p-0">
                  <div className="student-topcontent">{squadsConnect.squadsConnectname}</div>
                  <div className="university-topcontent">{squadsConnect.school}</div>
                </div>
                <div className="col-md-2">
                  <button type="button" class="connect-buttoncontent">Connect</button>
                </div>
              </div>
            </div>     
          </div>
        ))}
        <div className="row">
          <div className="col-md-7">
          </div>
          <div className="col-md-5">
            <div className="topseemore-display">
              <div className="topsee-content">See More</div>
              <img src={SeeArrow} alt="seeArrow" />
            </div>           
          </div>
        </div>
      </div>      
    </div>
  );
}
    
export default TopSquads; 