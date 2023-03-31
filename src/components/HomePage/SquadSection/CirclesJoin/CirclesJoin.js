import React, { useState, useEffect } from "react";
import './CirclesJoin.css'
import Slider from "react-slick";
import RightArrow from '../../../../assets/rightarrow.svg';
import LeftArrow from '../../../../assets/leftarrow.svg';
import CircleGroup from '../../../../assets/circlegroup.svg';
 
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="offers-blur">
      <img src={RightArrow} alt="vector"
        id="next-arrow"
        className={className}
        style={{ ...style, background: "transparent" }}
        onClick={onClick}  
      />
    </div>
  ); 
}

function SamplePreviousArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="offers-blur">
      <img src={LeftArrow} alt="vector"
        id="previous-arrow"
        className={className}
        style={{ ...style, background: "transparent" }}
        onClick={onClick}  
      />
    </div>
  );
}

function CirclesJoin() {
  const [circlesJoin, setcirclesJoin] = useState([]);

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    centerMode: false,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    arrows: true, 
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
      let ele = document.getElementById('previous-arrow-offers');
      if(ele){
        if (index < 1) {
          ele.style.display = 'none';
        } else {
          ele.style.display = 'block';
        }
      }
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePreviousArrow />
  }; 

  useEffect(() => {  
    fetch("http://localhost:3001/circlesJoin") 
      .then(response => response.json())
      .then(data => setcirclesJoin(data));
  }, []);

  return (
   <div className="circles-section"> 
      <div className="circles-content">
        <div className="circlesjoin-content">Circles to join</div>           
          <Slider {...settings}>
            {circlesJoin.map((circlesJoin) => (
              <div className="topcircle-sectionscontent gradient-bg">
                <img className="challenge-imgcontent" src={circlesJoin.image} alt="Challenge" />
                <div className="science-content">{circlesJoin.name}</div>
                <div className="row">
                  <div className="col-md-7">
                  <div className="rocketdisplay-content"><img src={circlesJoin.icon} alt="Clock" /><span className="public-content">{circlesJoin.sector}</span></div>
                </div>
                <div className="col-md-4"> 
                  <button type="button" class="circlebutton-content">Join</button>
                </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                  <div><img className="circlegroup-content" src={CircleGroup} alt="Clock" /></div>
                </div>
                <div className="col-md-10"> 
                  <div class="members-content">{circlesJoin.members}</div>
                </div>
                </div>
              </div>  
            ))}  
          </Slider>         
        <div>
      </div>
     </div>
   </div>
  );
}
    
export default CirclesJoin; 