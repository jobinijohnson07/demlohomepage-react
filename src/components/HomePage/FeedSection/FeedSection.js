import React, { useState, useEffect } from "react";
import './FeedSection.css'
import Picture from '../../../assets/picture.svg';
import Video from '../../../assets/video.svg';
import Dot from '../../../assets/dot.svg';
import Globus from '../../../assets/globus.svg';
import Message from '../../../assets/message.svg';
import GroupEmoji from '../../../assets/groupemoji.svg';
import CommentProfile from '../../../assets/commentprofile.svg';
import EmojiDot from '../../../assets/emojidot.svg';
import CharlieComment from '../../../assets/charliecomment.svg';

function FeedSection() {
  const [feed, setFeed] = useState([]); 
  useEffect(() => { 
    fetch("http://localhost:3001/feed") 
      .then(response => response.json())
      .then(data => setFeed(data)); 
  }, []);

 function commentsfunc(index, value) {
  const updatedFeed = feed.map((obj,i)=>{
    if(i === index){
      return {...obj, isCommentSection: !value}
    }
    return obj;
 });

  setFeed(updatedFeed);
  console.log("data")
 }
  
 function scribblefunc(index, value) {
  const updateScribbleFeed = feed.map((objscribble,i)=>{
    if(i === index){
      return {...objscribble, isScribbleSection: !value}
    }
    return objscribble;
 });

  setFeed(updateScribbleFeed);
  console.log("data")
 }

 function groupemojifunc(index, value) {
  const updatedEmojiFeed = feed.map((objemoji,i)=>{
    if(i === index){
      return {...objemoji, isGroupSection: !value}
    }
    return objemoji;
 });

  setFeed(updatedEmojiFeed);
  console.log("data")
 } 
  function switchImg(link, objName, index){
    let updateObj = feed.map((item,i)=>{
      if(i === index){
        item[objName] = item.personimg;
        item.personimg = link;
        return item;
      }else{
        return item;
      }
    })
    setFeed(updateObj);
  }

  return (
    <div className="feed-section">         
      <div className="feed-content">
        <div className="row">
          <div class="col-md-8">
            <input className="question-content" type="text" name="name" placeholder="What’s on your mind paul?" />
          </div>
          <div class="col-md-4">
            <div className="display-iconcontent">
              <img className="pic-imgcontent" src={Picture} alt="icons" />
              <img src={Video} alt="icon" />
            </div>
          </div>
        </div>
      </div>
      { feed ? feed.map((feed, i) => (
        <div>
          <div className="feedprofile-content">
            <div className="feedname-section"> 
              <div className="row">
                <div className="col-md-1">
                  <img className="feedprofile-imgcontent" src={feed.icon} alt="feedProfile" />
                </div>
                <div className="col-md-8">
                  <div className="student-namecontent">{feed.studentsname}</div>
                  <div className="minutes-content">{feed.time} <span><img className="dot-imgcontent" src={Dot} alt="dot" /></span><span><img src={Globus} alt="globus" /></span></div>
                </div>
                <div className="col-md-3">
                  <img className="message-imgcontent" src={Message} alt="message" />
                </div>
              </div>
            </div>
            <div className="student-descricontent">{feed.description}</div>
            {
              feed.isPersonImg ? <img className="personimg-content" src={feed.personimg} alt="personimg" /> : null
            }        
            {
              feed.isImage ? <div className="row image-sections">
                <div className="col-md-4">
                  <img className="personsimg-content" onClick={()=>switchImg(feed.personfirstimg, 'personfirstimg', i)} src={feed.personfirstimg} alt="personfirstimg" />
                </div>
                <div className="col-md-4">
                  <img className="personsimg-content" onClick={()=>switchImg(feed.personsecimg, 'personsecimg', i)} src={feed.personsecimg} alt="personsecimg" />
                </div>
                <div className="col-md-4">
                  <img className="personsimg-content" onClick={()=>switchImg(feed.personthirdimg, 'personthirdimg', i)} src={feed.personthirdimg} alt="personthirdimg" />
                </div>
              </div>:null
            }
            {
              feed.isVideo ? 
              <video className="video-content" controls>
                <source src={feed.videoMp4} type="video/mp4" />
                <source src={feed.videoOgg} type="video/ogg" />
              </video> : null
            }
            {
              feed.isGroupSection ? 
              <img className="groupemoji-content" src={GroupEmoji} alt="groupEmoji"/> : null
            }

            <div className="feedback-section"> 
              <img className="emoji-imgcontent" src={feed.reactIcon} alt="fire" />
              <span className="reactions-content">{feed.reactions} Reactions</span><span><img src={EmojiDot} alt="" /></span>
              <span className="comments-content" onClick={()=>commentsfunc(i, feed.isCommentSection)}>{feed.comments} Comments</span>
            </div>
            <div className="reacting-section">
              <div className="row"> 
                <div className="col-md-4">
                  <button type="button" class="reacthover-button" onClick={()=>groupemojifunc(i, feed.isGroupSection)}>React</button>
                </div>
                <div className="col-md-4">
                  <button type="button" class="reactscribble-button" onClick={()=>scribblefunc(i, feed.isScribbleSection)}>Scribble</button>
                </div>
                <div className="col-md-4">
                  <button type="button" class="react-button">Share</button>
                </div>
              </div>
            </div>

            {feed.isScribbleSection ?
              <div className="row">
                <div className="col-md-1">
                  <img className="commentprofile-imgcontent" src={CommentProfile} alt="commentProfile" />
                </div>
                <div className="col-md-11">
                  <div className="comment-section">
                    <input className="lastcomment-content" type="text" name="name" placeholder="Write a comments..." />
                  </div>
                </div>
              </div>: null
            }
            {
              feed.isCommentSection ? 
               <div>
                 <div className="commentfeed-content">
                  <div className="row">
                    <div className="col-md-1">
                      <img className="commentprofile-imgcontent" src={CharlieComment} alt="commentProfile" />
                    </div>
                    <div className="col-md-11">
                      <div className="lastscomment-section">
                       {/* <input className="lastname-content" type="text" name="name" placeholder="Charlie" ><span>Jan 23,2023</span> /> */}
                        <div className="lastname-content">Charlie <span className="month-content">Jan 23,2023</span></div>
                        <div className="appreciation-content">Great work Andrew</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="commentfeed-content">
                  <div className="row">
                    <div className="col-md-1">                 
                    </div>
                    <div className="col-md-1">
                      <img className="commentprofile-imgcontent" src={CommentProfile} alt="commentProfile" />
                    </div>
                    <div className="col-md-10">
                      <div className="lastscomment-section">
                        <div className="lastname-content">Charlie <span className="month-content">Jan 23,2023</span></div>
                        <div className="appreciation-content">Thanks!</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="commentfeed-content">
                  <div className="row">
                    <div className="col-md-1">
                      <img className="commentprofile-imgcontent" src={CharlieComment} alt="commentProfile" />
                    </div>
                    <div className="col-md-11">
                      <div className="lastscomment-section">
                        <div className="lastname-content">Charlie <span className="month-content">Jan 23,2023</span></div>
                        <div className="appreciation-content">Great work Andrew</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="commentfeed-content">
                  <div className="row">
                    <div className="col-md-1">                 
                    </div>
                    <div className="col-md-1">
                      <img className="commentprofile-imgcontent" src={CommentProfile} alt="commentProfile" />
                    </div>
                    <div className="col-md-10">
                      <div className="lastscomment-section">
                        <div className="lastname-content">Charlie <span className="month-content">Jan 23,2023</span></div>
                        <div className="appreciation-content">Thanks!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> : null
            }

          </div>
        </div>
      )): null}
    </div>
  );
}
     
export default FeedSection; 