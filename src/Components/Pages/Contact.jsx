import { useState } from "react";
import './Contact.css';

export default function Contact(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    const userData = {
      name: name,
      email: email,
      phone: phone,
    };

    try {
      const response = await fetch(
        "https://ecommerce-12345-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to store data");
      }

      alert("Data submitted successfully!");

      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="contact-container">
    <h2>Contact Us</h2>

    <form className="contact-form" onSubmit={submitHandler}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Phone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>
  );
};

