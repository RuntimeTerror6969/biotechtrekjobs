import React, { useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // Retrieve token
      const response = await fetch("https://bio-backend-kappa.vercel.app/api/profile/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Add token to headers
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Ticket raised successfully!");
        setFormData({ name: "", email: "", phone: "", topic: "", feedback: "" });
        onClose();
      } else {
        const errorData = await response.json();
        console.error("Server response:", errorData);
        alert(errorData.msg || "Failed to raise ticket. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting ticket:", error);
      alert("An error occurred. Please try again.");
    }
  };

  if (!isOpen) return null;

  // JSX form remains the same
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative bg-white p-6 rounded-lg w-full max-w-md mx-4 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Raise Ticket</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Your Phone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                required
              />
            </div>
            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                Topic of Concern
              </label>
              <input
                id="topic"
                type="text"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                required
              />
            </div>
            <div>
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
                Your Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                rows="4"
                required
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;