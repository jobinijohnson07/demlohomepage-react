import React, { useState, useEffect } from "react";
import './ProfileSection.css'
import Light from '../../../assets/light.svg';
import ProfileImg from '../../../assets/profileimg.svg';
import GitftBox from '../../../assets/giftbox.svg';
import Challenge from '../../../assets/challenge.svg';
import Clock from '../../../assets/clock.svg';
import Learn from '../../../assets/learn.svg'; 

function ProfileSection() { 
  const [profile, setProfile] = useState([]);

  useEffect(() => {  
    fetch("http://localhost:3001/profile") 
      .then(response => response.json()) 
      .then(data => setProfile(data)); 
  }, []); 

  return ( 
    <div className="profile-section">
      {profile.map((profile) => (
        <div className="profile">
          <div className="profile-content">
            <img className="light-imgcontent" src={Light} alt="light" />
            <img className="profile-imgcontent" src={ProfileImg} alt="profileImg" />
            <div className="profile-name">{profile.feedname}</div>
            <button type="button" class="button-content">Change style</button>
            <div className="top-sectioncontent gradient-bg">
              <div className="top-content">{profile.topContent}</div> 
              <div className="rewards-content">{profile.rewardsContent}</div>
            </div>
            <div className="claim-content gradient-bg">
              <div className="row">
                <div className="col-md-3">
                  <img className="gift-imgcontent" src={GitftBox} alt="gitftBox" />
                </div>
                <div className="col-md-9">
                  <div className="rewardstitle-content">Rewards</div>
                  <div className="nextClaim-content">Next Claim in : </div>
                  <div class="rewardhours-content">{profile.rewardsClaim}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-content2">
            <div className="learn-content">Skills to be Learn</div> 
            <div className="top-sectionscontent gradient-bg">
              <img className="challenge-imgcontent" src={Challenge} alt="Challenge" />
              <div className="science-content">{profile.challenge}</div>
              <div className="row">
                <div className="col-md-7">
                  <img src={Clock} alt="Clock" />
                </div>
                <div className="col-md-4"> 
                  <button type="button" class="startbutton-content">Start</button>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-content3">
            <img className="learn-imgcontent" src={Learn} alt="learn" />
          </div>
        </div>
      ))}
    </div>
  );
}
    
export default ProfileSection; 