import React from "react";
import "./main.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

const Main = () => {
  const Data = [
    {
      id: 1,
      imgSrc: img1,
      destTitle: "Bora Bora",
      location: "New Zealand",
      grade: "CULTURAL RELAX",
      fees: "$700",
      description:
        "New Zealand is the land of the Long White Cloud. It's also one of the most beautiful countries in the world, according to almost anyone who's ever been there.",
    },
    {
      id: 2,
      imgSrc: img2,
      destTitle: "Machu Picchu",
      location: "peru",
      grade: "CULTURAL RELAX",
      fees: "$600",
      description:
        "Going to Peru is, well, if you ever have an opportunity in your life to go there, you should do it because it is absolutely mind boggling ...",
    },
    {
      id: 3,
      imgSrc: img3,
      destTitle: "Great Barrier Reef",
      location: "Australia",
      grade: "CULTURAL RELAX",
      fees: "$900",
      description:
        "Australia is a phenomenally beautiful country, and every time I go away and come back, it never ceases to amaze me.",
    },
    {
      id: 4,
      imgSrc: img4,
      destTitle: "Cappadocia",
      location: "Turkey",
      grade: "CULTURAL RELAX",
      fees: "$500",
      description:
        "Lost in the beauty of Cappadocia's unique landscapes, where dreams take flight ...",
    },
    {
      id: 5,
      imgSrc: img5,
      destTitle: "Guanajuato",
      location: "Mexico",
      grade: "CULTURAL RELAX",
      fees: "$1700",
      description:
        "Mexico amazed me beyond my wildest dreams. The food, the people, and the history captivated my heart and I have no choice but to return.",
    },
    {
      id: 6,
      imgSrc: img6,
      destTitle: "Cinque Terre",
      location: "Italy",
      grade: "CULTURAL RELAX",
      fees: "$800",
      description:
        "Italy offers one the most priceless of one's possessions - One's own soul.",
    },
    {
      id: 7,
      imgSrc: img7,
      destTitle: "Angkor wat",
      location: "Cambodia",
      grade: "CULTURAL RELAX",
      fees: "$720",
      description:
        "Without Cambodia, I may never have become a mother. Part of my heart is and will always be in this country. And part of this country is always with me.",
    },
    {
      id: 8,
      imgSrc: img8,
      destTitle: "Taj Mahal",
      location: "India",
      grade: "CULTURAL RELAX",
      fees: "$700",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",
    },
    {
      id: 9,
      imgSrc: img9,
      destTitle: "Bali Island",
      location: "Indonesia",
      grade: "CULTURAL RELAX",
      fees: "$700",
      description:
        "The island boasts a myriad of impressive volcanoes, crystalline beaches, world-class diving, diverse nightlife, iconic ricefields, and and gorgeous waterfalls.",
    },
  ];
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most Visited destinations</h3>
      </div>

      <div className="secContentg grid">
        {Data.map(
          ({ id, destTitle, imgSrc, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="iconl" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icond" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
