import React from "react";
import "./AnställdaInfo.css";
import tyson from "../global/Img/tysonfield.png";
import nelson from "../global/Img/nelsonfield.png";
import madison from "../global/Img/madisonfield.png";
import "../global/css/Global.css";
import ResInfo from "./ResInfo.js";

const data = {
  alt_info: "Profile",
  info_title: "GOALS",
};

export default function AnställdaInfo() {
  return (
    <main>
      <section>
        <div className="fl w-35">
          <img src={tyson} alt={data.alt_info} className="ml4" />
          <div className="fr mt4 pl4">
            <h2>Tyson Field</h2>
            <p>AGE: 55</p>
            <p>LOCATION: New York</p>
            <p>STATUS: Married</p>
            <p>TITLE: Medical Doctor</p>
          </div>
        </div>
        <article className="fr w-60 mt4">
          <h3 className="ml4">{data.info_title}</h3>
          <ul className="ml2">
            <li>Become the best doctor in my community</li>
            <li>Provide valuable service</li>
            <li>Travel around the world</li>
          </ul>
        </article>
      </section>

      <div className="fl w-100">
        <hr />
      </div>
      <section>
        <div className="fl w-35">
          <img src={nelson} alt={data.alt_info} className="ml4" />
          <div className="fr mt3 pl4">
            <h2>Nelson Field</h2>
            <p>AGE: 35</p>
            <p>LOCATION: Los Angeles</p>
            <p>STATUS: Single</p>
            <p>TITLE: Software Engineer</p>
          </div>
        </div>
        <article className="fr w-60 mt2">
          <h3 className="ml4">{data.info_title}</h3>
          <ul className="ml2">
            <li>Become the best programmer in my community</li>
            <li>Continue grow and develop valuable coding content</li>
            <li>Travel around the world</li>
          </ul>
        </article>
      </section>
      <div className="fl w-100">
        <hr />
      </div>

      <section>
        <div className="fl w-35">
          <img src={madison} alt={data.alt_info} className="ml4" />
          <div className="fr mt2 pl4">
            <h2>Tyson Field</h2>
            <p>AGE: 25</p>
            <p>LOCATION: Boston</p>
            <p>STATUS: Engaged</p>
            <p>TITLE: Teacher</p>
          </div>
        </div>
        <article className="fr w-60 mt2">
          <h3 className="ml4">{data.info_title}</h3>
          <ul className="ml2">
            <li>Become the best teacher in my community</li>
            <li>Increase my knowledge and find a better work life balance</li>
            <li>Travel around the world</li>
          </ul>
        </article>
      </section>
      <div className="fl w-100">
        <hr />
      </div>
    </main>
  );
}
