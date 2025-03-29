import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="pt-20 max-w-6xl mx-auto px-4 py-8 min-h-screen dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">
        Contact Us
      </h1>
      
      <p className="mb-6">
        We're here to help! Whether you have questions about job postings, account issues, or need assistance with your job search, feel free to reach out to us.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">How to Reach Us</h2>
        <p className="mb-2">
          <span className="mr-2">📧</span> Email:{" "}
          <a
            href="mailto:Biotechtrek.help@gmail.com"
            className="text-blue-500 hover:underline"
          >
            Biotechtrek.help@gmail.com
          </a>
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Support Hours</h2>
        <p className="mb-2">
          <span className="mr-2">🕘</span> Monday – Friday: 9 AM – 6 PM (IST)
        </p>
        <p className="mb-2">
          <span className="mr-2">📅</span> Closed on weekends and public holidays
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
        <p className="mb-4">
          If you're experiencing issues with the site, job postings, or applications, our support team is ready to help. Please include the following in your email:
        </p>
        <ul className="list-disc pl-8 space-y-2 mb-4">
          <li>Your name and contact information</li>
          <li>A brief description of the issue</li>
          <li>Any relevant details (e.g., job ID, error messages)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
        <p className="mb-4">
          Follow us on social media for updates and additional support channels:
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://t.me/+4UvyPy_vcB1hNjU1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
              alt="Telegram"
              className="w-6 h-6 mr-2"
            />
            Telegram
          </a>
          <a
            href="https://www.linkedin.com/company/biotechtrek/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="w-6 h-6 mr-2"
            />
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/biotechtrek?igsh=MXBrcmR6c2FkdXN1Ng=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-6 h-6 mr-2"
            />
            Instagram
          </a>
          {/* <a
            href="https://youtube.com/@biotechtrek?si=VMGFVkxPithB2pcd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
              alt="YouTube"
              className="w-6 h-6 mr-2"
            />
            YouTube
          </a>
          <a
            href="https://www.facebook.com/share/18DVtRU6v3/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-6 h-6 mr-2"
            />
            Facebook
          </a> */}
        </div>
      </div>
      
      <div className="mt-8">
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;