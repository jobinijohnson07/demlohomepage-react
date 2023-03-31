import React, { useState, useEffect } from "react";
import './SquadSection.css'
import SeeArrow from '../../../assets/seearrow.svg';
import CirclesJoin from "./CirclesJoin/CirclesJoin";
import TopSquads from './TopSquads/TopSquads';

function SquadSection() {  
  const [squadsRequest, setSquadsRequest] = useState([]);

  useEffect(() => { 
    fetch("http://localhost:3001/squadRequest") 
      .then(response => response.json())
      .then(data => setSquadsRequest(data));
  }, []);

  return (
    <div className="squad-section">
      <div className="squad-content">
        <div className="skillssquads-content">3 Squad Request</div>
        {squadsRequest.map((squadsRequest) => (
          <div>
            <div className="top-squadscontent gradient-bg">  
              <div className="row">
                <div className="col-md-2">         
                  <img className="squadprofile-imgcontent" src={squadsRequest.icon} alt="squadProfile" />
                </div>
                <div className="col-md-10">
                  <div className="squadstudent-content">{squadsRequest.squadname}</div>
                  <div className="university-content">{squadsRequest.school}</div>
                  <div className="row">
                    <div className="col-md-6">
                      <button type="button" class="accept-buttoncontent">Accept</button>
                    </div>
                    <div className="col-md-6 accept-button">
                    <button type="button" class="squad-rejectbutton">Reject</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="row">
          <div className="col-md-7">
          </div>
          <div className="col-md-5">
            <div className="seemore-display">
              <div className="see-content">See More</div>
              <img src={SeeArrow} alt="seeArrow" />
            </div>           
          </div>
        </div>
      </div>
      <CirclesJoin />
      <TopSquads />
    </div>
  );
}
    
export default SquadSection; 