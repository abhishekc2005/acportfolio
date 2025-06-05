import { Link } from "react-router";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("myzjzyje");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <>
      <Link to="/">Back to Home</Link>
      <h3>Get In Touch</h3>
      <p>
        Have a project in mind or just want to chat? I'd love to hear from you.
      </p>

      <h4>Contact Information</h4>
      <div>
        <div>
          <p>Email</p>
          <p>ydvchetan01@gmail.com</p>
        </div>
        <div>
          <p>Location</p>
          <p>Indore, India</p>
        </div>
        <div>
          <p>Response Time</p>
          <p>Within 24 hours</p>
        </div>
      </div>

      <h5>Follow Me</h5>
      <div></div>

      <form
        action="https://formspree.io/f/myzjzyje"
        onSubmit={handleSubmit}
        method="POST"
      >
        <h4>Send Me a Message</h4>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          required
        />

        <label htmlFor="sub">Subject</label>
        <input
          type="text"
          name="sub"
          id="sub"
          placeholder="What's this about"
          required
        />

        <label htmlFor="msg">Message</label>
        <textarea
          name="msg"
          id="msg"
          cols="30"
          rows="10"
          placeholder="Your message"
          className="border"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </>
  );
};

export default Contact;
