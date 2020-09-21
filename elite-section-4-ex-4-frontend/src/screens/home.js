import React, { useState, useEffect } from 'react';
import DweetCard from '../components/dweetCard';
import { Link } from 'react-router-dom';

export default function Home(props) {
  useEffect(() => {
    document.getElementById("downArrow").addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelector("#" + e.target.parentNode.href.split("#")[1])
        .scrollIntoView({ behavior: "smooth" });
    });
  })
  const { dweetsData } = props;
  return (
    <div>
      <div className="bg">
        <div className="welcomeCard">
          <h2>What is a dweet?</h2>
          <p>
            A dweet is a 140 character string which can <br />
            contain any alphanumeric characters. We have a lot of
            <br /> dweets at our site
          </p>
          <a href="#allDweets" id="downArrow">
            <i className="fa fa-arrow-down" />
          </a>
        </div>
      </div>
      <div id="allDweets" className="allDweets">
        {dweetsData.length > 0 && (
          <div className="container">
            <div className="row">
              <h3> All Dweets </h3>
              {dweetsData.map((dweet) => (
                <DweetCard dweet={dweet} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
