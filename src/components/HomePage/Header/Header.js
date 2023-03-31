import React from "react";
import './Header.css'
import Logo from '../../../assets/logo.svg';
import Search from '../../../assets/search.svg';
import Mic from '../../../assets/mic.svg';
import Home from '../../../assets/home.svg';
import Circle from '../../../assets/user.svg';
import Skills from '../../../assets/idea.svg';
import Buzz from '../../../assets/chat.svg';
import Demloverse from '../../../assets/globe.svg';
import Notification from '../../../assets/notification.svg';
import Help from '../../../assets/question.svg';
import Profile from '../../../assets/profile.svg';

function HomePage() {
  return (
    <div className="homepage-section">
      <div className="header-section">
       <div className="row">
        <div className="col-md-3">
          <div className="display-content">
            <div className="logo-imgcontent"><img src={Logo} alt="logo" /></div>
            <div className="searchwhole-content">
              <div className="display-content">
                <div className="search-imgcontent"><img src={Search} alt="Search" /></div>
                <div className="search-content">Search</div>
                <div className=""><img src={Mic} alt="Mic" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="display-content">
            <div className="secondsection">
              <div className="tabs-section">
                <div className="tabs-activecontent">
                  <img className="headerimg-content" src={Home} alt="Home" />
                  <div className="header-content">Home</div>
                </div>
                <div className="tabs-content spaces-section">
                  <img className="headerimg-content" src={Circle} alt="Home" />
                  <div className="header-inactivecontent">Circle</div>
                </div>
                <div className="tabs-content space-section">
                  <img className="headerimg-skillscontent" src={Skills} alt="Home" />
                  <div className="header-inactivecontent">Skills</div>
                </div>
                <div className="tabs-content space-section">
                  <img className="headerimg-content"src={Buzz} alt="Home" />
                  <div className="header-inactivecontent">Buzz</div>
                </div>
                <div className="tabs-content space-section">
                  <img className="headerimg-content" src={Demloverse} alt="Home" />
                  <div className="header-inactivecontent">Demloverse</div>
                </div>
              </div>
            </div>
            <div>
              <img className="icons-imgcontent" src={Notification} alt="notification" />
              <img className="icons-imgcontent" src={Help} alt="Help" />
              <img className="icons-imgcontent" src={Profile} alt="Profile" />
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>  
  );
}

export default HomePage;
