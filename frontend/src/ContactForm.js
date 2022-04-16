import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  const resetForm = (e) => {
    const { name, email, message } = e.target.elements;
    name.value = "";
    email.value = "";
    message.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    resetForm(e);
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className="wrapper-all">
      <h1>CONTACT FORM USING</h1>
      <div className="images">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
          alt=""
        />
        <img src="https://nodemailer.com/nm_logo_200x136.png" alt="" />
      </div>
      <form className="wrapper" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Write your name here.."
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Let me know how to contact you back.."
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          placeholder="What would you like to tell me.."
          rows="5"
          required
        />

        <button type="submit">{status}</button>
      </form>
    </div>
  );
};

export default ContactForm;
