import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "bef162bb-7837-46d7-9d37-a8dc7666dfd7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message Sent Successfully ✅");
      e.target.reset();
    } else {
      setResult("Something went wrong ❌");
    }
  };

  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto space-y-4 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 border rounded focus:outline-none focus:ring"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-3 border rounded focus:outline-none focus:ring"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        required
        className="w-full p-3 border rounded focus:outline-none focus:ring"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded transition"
      >
        Send
      </button>

      <p className="text-center text-sm text-gray-600">{result}</p>
    </form>
  );
}
