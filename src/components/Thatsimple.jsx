import React, { useState } from "react";
import { db } from "../Firebase";
import linje5 from "../assets/linje5.png";
import linje6 from "../assets/linje6.png";
import { collection, addDoc } from "firebase/firestore";

const Thatsimple = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const kontakt = {
      name: name,
      email: email,
      company: company,
      phoneNumber: phoneNumber,
      message: message
    };

    try {
      const ref = await addDoc(collection(db, "thatsimple1"), kontakt);
      console.log("Kontakt tilføjet", ref.id);
    } catch (error) {
      alert("Error submitting message: " + error.message);
    }
  }

  return (
    <form className="contentbook" onSubmit={handleSubmit}>
      <h1 id="contentbookh1">Skal vi tage en snak?</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

<div className="bookmode">
        <button type="submit" id="bookknap">Book møde</button>
        <img src={linje5} id="linje5" alt="linje" loading="lazy" />
        <img src={linje6} id="linje6" alt="linje" loading="lazy" />
      </div>
    </form>
  );
};

export default Thatsimple;


