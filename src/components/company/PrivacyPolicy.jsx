import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="pt-20 max-w-6xl mx-auto px-4 py-8 min-h-screen dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">
        Privacy Policy for BiotechTrek Jobs
      </h1>
      
      <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
      <p className="mb-6">
        Welcome to BiotechTrekJobs, a job portal operated by BiotechTrek, dedicated to connecting job seekers and employers in the life sciences and pharmaceutical industries. This Privacy Policy outlines how we collect, use, protect, and share your personal information when you access our platform.
      </p>

      <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
      <p className="mb-4">
        <strong>Personal Information:</strong> When you register on BiotechTrekJobs, we may collect details such as your name, email address, contact number, resume, employment history, and job preferences.
      </p>
      <p className="mb-4">
        <strong>Employer Information:</strong> Employers may provide details including company name, contact information, and job postings.
      </p>
      <p className="mb-4">
        <strong>Usage Data:</strong> We automatically collect information on how you interact with our platform, including IP addresses, browser type, device information, and website activity.
      </p>
      <p className="mb-4">
        <strong>Cookies and Tracking Technologies:</strong> We use cookies to improve user experience, personalize content, and analyze site traffic.
      </p>

      <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
      <p className="mb-4">Your information is collected to:</p>
      <ul className="list-disc pl-8 mb-4">
        <li>Provide job-matching services and facilitate employer-job seeker connections.</li>
        <li>Enhance platform functionality, personalize job recommendations, and improve user experience.</li>
        <li>Send important communications such as job alerts, notifications, and updates.</li>
        <li>Prevent fraudulent activities, ensure security, and comply with legal obligations.</li>
        <li>Conduct research and analytics to improve our services.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
      <p className="mb-4">
        We do not sell, rent, or trade your personal information. However, we may share your information with:
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li><strong>Employers and Recruiters:</strong> Your profile and resume may be shared with employers based on your job preferences.</li>
        <li><strong>Service Providers:</strong> Third-party partners who assist with platform operations, analytics, and marketing.</li>
        <li><strong>Legal Authorities:</strong> If required by law, regulation, or legal process, we may disclose your information to regulatory bodies.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
      <p className="mb-4">
        We implement reasonable security measures to protect your personal data from unauthorized access, loss, or misuse. However, no system is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
      <p className="mb-4">
        <strong>Access & Update:</strong> You can review and edit your personal information at any time through your account settings.
      </p>
      <p className="mb-4">
        <strong>Opt-Out:</strong> You can unsubscribe from marketing communications and job alerts.
      </p>
      <p className="mb-4">
        <strong>Account Deletion:</strong> You may request the deletion of your account and associated data by contacting us.
      </p>

      <h2 className="text-2xl font-bold mb-4">7. Third-Party Links</h2>
      <p className="mb-4">
        BiotechTrekJobs may contain links to third-party websites. We are not responsible for the privacy practices of external sites and encourage users to review their policies before providing any personal information.
      </p>

      <h2 className="text-2xl font-bold mb-4">8. Retention of Data</h2>
      <p className="mb-4">
        We retain your information for as long as necessary to provide our services and comply with legal requirements. If you request account deletion, we will remove your data, except where retention is legally required.
      </p>

      <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
      <p className="mb-4">
        BiotechTrekJobs is not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors.
      </p>

      <h2 className="text-2xl font-bold mb-4">10. Changes to the Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated revision date.
      </p>

      <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
      <p className="mb-4">
        For any questions or concerns regarding this Privacy Policy, please contact us at:
      </p>
      <p className="mb-4">
        Email:{" "}
        <a
          href="mailto:Biotechtrek.help@gmail.com"
          className="text-blue-500 hover:underline"
        >
          Biotechtrek.help@gmail.com
        </a>
      </p>
      
      <p className="mt-8 mb-4">
        <Link to="/terms" className="text-blue-500 hover:underline">
          View Terms and Conditions
        </Link>
      </p>
    </div>
  );
};

export default PrivacyPolicy;