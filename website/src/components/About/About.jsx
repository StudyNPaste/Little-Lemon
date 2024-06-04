import React from "react";
import "./About.css";
import pic1 from '../Assets/aboutpic1.jpg'
import pic2 from '../Assets/aboutpic2.jpg'

export const About = () => {
  return (
    <div className="about">
      <div className="left-about">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, located on Maldore
          Street in Chicago, Illinois. We focus on traditional recipes served
          with a modern. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quidem velit voluptatibus maxime voluptatum? Adipisci, eveniet,
          obcaecati assumenda, distinctio quod facere neque mollitia ullam ipsa
          unde veritatis reprehenderit odio earum debitis.
        </p>
      </div>
      <div className="right-about">
        <img className="pic1" src={pic1} alt="" />
        <img className="pic2" src={pic2} alt="" />
      </div>
    </div>
  );
};
