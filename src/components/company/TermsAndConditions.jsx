import React from "react";
import { Link } from "react-router-dom";
const TermsAndConditions = () => {
  return (
    <div className="pt-20 max-w-6xl mx-auto px-4 py-8 min-h-screen dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">
        Terms and Conditions for BiotechTrek Jobs
      </h1>
      <p className="mb-6">
        By accessing or using the BiotechTrek Jobs website and services
        provided, you agree to comply with and be bound by the following Terms
        and Conditions. If you do not agree to these Terms and Conditions, do
        not access or use the Site.
      </p>

      <h2 className="text-2xl font-bold mb-4">1. Use of the Site</h2>
      <p className="mb-4">
        <strong>Eligibility:</strong> You must be at least 18 years old and able
        to form legally binding contracts to use the Site.
      </p>
      <p className="mb-4">
        <strong>Account Creation:</strong> To post jobs or apply for jobs, users
        must create an account. You agree to provide accurate, current, and
        complete information and to update your details as necessary.
      </p>
      <p className="mb-4">
        <strong>Prohibited Use:</strong> You may not use the Site for any
        unlawful purposes or for any activity that could damage, disable, or
        interfere with the operation of the Site or the experience of other
        users.
      </p>

      <h2 className="text-2xl font-bold mb-4">2. Job Postings</h2>
      <p className="mb-4">
        <strong>Employer Responsibilities:</strong> Employers who post job
        openings must ensure that their job listings are accurate,
        non-discriminatory, and comply with all applicable laws. BiotechTrek
        Jobs reserves the right to remove any job post that violates these terms
        or is deemed inappropriate.
      </p>
      <p className="mb-4">
        <strong>Content Ownership:</strong> By posting a job, employers grant
        BiotechTrek Jobs a non-exclusive, worldwide license to use, display, and
        distribute the content on the Site.
      </p>
      <p className="mb-4">
        <strong>Job Post Removal:</strong> BiotechTrek Jobs reserves the right
        to remove any job post at any time without prior notice, for reasons
        including but not limited to inappropriate content or violations of
        these Terms and Conditions.
      </p>

      <h2 className="text-2xl font-bold mb-4">3. Job Seekers</h2>
      <p className="mb-4">
        <strong>Profile Information:</strong> Job seekers are responsible for
        providing accurate and up-to-date information in their profiles,
        resumes, and applications. You agree not to provide false or misleading
        information.
      </p>
      <p className="mb-4">
        <strong>Application Process:</strong> BiotechTrek Jobs facilitates the
        application process but does not guarantee the outcome of any
        application. The Site is not responsible for the hiring decisions of
        employers.
      </p>

      <h2 className="text-2xl font-bold mb-4">4. Privacy Policy</h2>
      <p className="mb-4">
        <strong>Data Collection:</strong> By using the Site, you consent to the
        collection, use, and sharing of your personal information as outlined in
        our{" "}
        <Link to="/privacy" className="text-blue-500 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
      <p className="mb-4">
        <strong>Third-Party Links:</strong> The Site may contain links to
        third-party websites. We are not responsible for the content or privacy
        practices of these external sites.
      </p>

      <h2 className="text-2xl font-bold mb-4">5. Payment and Fees</h2>
      <p className="mb-4">
        <strong>Subscription Fees:</strong> Access to certain features, such as
        posting job listings, may require a paid subscription. All fees are
        detailed on the Site, and by using the Service, you agree to the
        applicable pricing and billing terms.
      </p>
      <p className="mb-4">
        <strong>Refund Policy:</strong> Refunds are handled according to the
        specific terms outlined on our Payment and Subscription page. Please
        refer to that section for more details.
      </p>

      <h2 className="text-2xl font-bold mb-4">6. Content Restrictions</h2>
      <p className="mb-4">You agree not to:</p>
      <ul className="list-disc pl-8 mb-4">
        <li>Post content that is discriminatory, offensive, or harmful.</li>
        <li>Post false or misleading information.</li>
        <li>Use the Site to harass, defraud, or impersonate others.</li>
        <li>
          Share any content that infringes on the intellectual property rights
          of others.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">7. Disclaimer of Warranties</h2>
      <p className="mb-4">
        <strong>Service Availability:</strong> BiotechTrek Jobs makes no
        guarantee that the Site will be available at all times or be free from
        errors or disruptions.
      </p>
      <p className="mb-4">
        <strong>Accuracy of Information:</strong> While we strive to ensure
        accuracy, BiotechTrek Jobs does not guarantee that all job listings,
        resumes, and other information on the Site are accurate, complete, or up
        to date.
      </p>

      <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
      <p className="mb-4">
        To the maximum extent permitted by law, BiotechTrek Jobs is not liable
        for any direct, indirect, incidental, or consequential damages arising
        from the use of or inability to use the Site.
      </p>

      <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
      <p className="mb-4">
        <strong>Account Suspension:</strong> BiotechTrek Jobs may suspend or
        terminate a user's account at its sole discretion for violating these
        Terms and Conditions or for any other reason.
      </p>
      <p className="mb-4">
        <strong>Termination by User:</strong> Users may terminate their accounts
        at any time by following the appropriate steps on the Site.
      </p>

      <h2 className="text-2xl font-bold mb-4">10. Modifications to Terms</h2>
      <p className="mb-4">
        <strong>Changes to Terms:</strong> BiotechTrek Jobs reserves the right
        to modify these Terms and Conditions at any time. Changes will be posted
        on this page, and the effective date will be updated. Continued use of
        the Site after changes are posted constitutes your acceptance of those
        changes.
      </p>

      <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
      <p className="mb-4">
        If you have any questions about these Terms and Conditions, please
        contact us at:
      </p>
      <p className="mb-4">
        Email:{" "}
        <a
          href="mailto:contact@biotechtrek.com"
          className="text-blue-500 hover:underline"
        >
          Biotechtrek.help@gmail.com
        </a>
      </p>
    </div>
  );
};

export default TermsAndConditions;
