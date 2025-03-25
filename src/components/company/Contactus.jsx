import React, { useState } from "react";
import ContactModal from "../layout/ContactModal"; 

const Contactus = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6">
        We’re here to assist you! Whether you have questions, need support, or want to get in touch with BioTechTrek, feel free to reach out using the information below.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
        <p className="mb-2">
          For general inquiries, support, or assistance, please email us at:
        </p>
        <p className="text-lg font-medium">
          <a
            href="mailto:Biotechtrek.help@gmail.com"
            className="text-blue-600 hover:underline"
          >
            Biotechtrek.help@gmail.com
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Raise a Support Ticket</h2>
        <p className="mb-2">
          Need help with something specific? Raise a ticket, and our support team will get back to you as soon as possible.
        </p>
        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Raise a Ticket
        </button>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
        <p className="mb-2">
          If you’re experiencing issues with the site, job postings, or applications, our support team is ready to help. Please include the following in your email:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your name and contact information</li>
          <li>A brief description of the issue</li>
          <li>Any relevant details (e.g., job ID, error messages)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Other Ways to Connect</h2>
        <p className="mb-2">
          Follow us on social media for updates and additional support channels:
        </p>
        <div className="flex space-x-4">
          <a
            href="https://t.me/+4UvyPy_vcB1hNjU1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Telegram
          </a>
          <a
            href="https://www.linkedin.com/company/biotechtrek/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/biotechtrek?igsh=MXBrcmR6c2FkdXN1Ng=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Instagram
          </a>
        </div>
      </section>

      {/* <div className="mt-8">
        <Link to="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div> */}

      {/* Render the Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Contactus;