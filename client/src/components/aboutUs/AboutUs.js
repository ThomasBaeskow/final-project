import "./aboutUs.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBuilding,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const AboutUs = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const from = e.target.email.value;
    const text = e.target.message.value;
    axios
      .post("http://127.0.0.1:5000/api/v1/about/contact", { from, text })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    alert("Message has been sent");
    //  window.location.reload(true)
    navigate("/");
  };
  return (
    <div>
      <br />
      <div className="contactContainer">
        <FontAwesomeIcon icon={faAddressCard} className="icon-contact" />
        <span className="title-contact">Get in Touch</span>
        <div className="contactCard">
          <div className="contactForm">
            <form onSubmit={submitHandler}>
              <label htmlFor="email" className="email-label">Email/username</label>
              <br />
              <input type="email" name="email" placeholder="email/username" />
              <p>Your message</p>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                cols="50"
              ></textarea>
              <br />
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="contactAddress">
            <FontAwesomeIcon icon={faEnvelope} /> info@xxxx.com <br />
            <FontAwesomeIcon icon={faPhone} /> 456-5678-456
            <br />
            <p className="text-1">
              *available
              <br /> Mo-Fr:- 9:00-18:00 <br /> Sa-Su:- 9:00-17:00
            </p>
            <FontAwesomeIcon icon={faBuilding} /> Dusseldorf, Germany
          </div>
        </div>
      </div>
      <div className="contactAbout">
        <h1>About us</h1>
        <p className="text-1">
          We are a team of 5 that tries to supply our fellow gamers with the
          best technology, accessories and games that are on the market
        </p>
        <div className="pic-container">
          <img src="" alt="thomas" />
          <img src="" alt="dani" />
          <img src="" alt="sofia" />
          <img src="" alt="anu" />
          <img src="" alt="orazio" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
