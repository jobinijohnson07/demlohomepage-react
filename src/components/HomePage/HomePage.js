import React from "react";
import './HomePage.css'
import Header from './Header/Header';
import ProfileSection from "./ProfileSection/ProfileSection";
import FeedSection from "./FeedSection/FeedSection";
import SquadSection from "./SquadSection/SquadSection";
import Chatbox from '../../assets/chatbox.svg';

function HomePage() {
  return (
    <div className="homepage-wholesection">
      <div className="header-wholesection">
        <Header />
      </div>
      <div className="whole-displaysection">
        <div className="profile-wholesection">
          <ProfileSection />
        </div> 
        <div className="feed-wholesection">
          <FeedSection />
        </div>
        <div className="squad-wholesection">
          <SquadSection />
        </div>
        <div>
          <img className="chatbox-imgcontent" src={Chatbox} alt="chatbox" />
        </div>
      </div>     
    </div>
    );
}
    
export default HomePage;
    