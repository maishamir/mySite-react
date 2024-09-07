import React from "react";
import "./Contact.scss";
import ghIcon from "/Users/maishamir/Documents/mySite-react/public/icons/github_icon.svg";
import liIcon from "/Users/maishamir/Documents/mySite-react/public/icons/linkedin_icon.svg";

function Contact() {
  return (
    <section className="contact">
      <div className="contact__content">
        <div className="contact__blurb">
          <h1>I'm always up for a chat!</h1>
          <p>
            If you ever want to meet for a virtual coffee, or just want to have
            a quick chat, you can reach out to me on any of the socials below or
            send me a quick message here!
          </p>
          <div className="contact__socials">
            <a href="https://github.com/maishamir"><img src={ghIcon} alt="github profile" className="contact__socials-icon" /></a> 
            <a href="https://www.linkedin.com/in/maishamir/"><img src={liIcon} alt="linkedin profile" className="contact__socials-icon" /></a> 
          </div>
        </div>
        <div className="contact__form">
          <form action="" className="contact__form-fields">
            <input type="text" name="name" id="name" placeholder="name" />
            <input type="email" name="email" id="email" placeholder="email" />
            <textarea
              name="message"
              id="message"
              placeholder="message"
            ></textarea>
            <button type="submit" className="contact__submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
