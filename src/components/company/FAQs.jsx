import React from "react";

const FAQs = () => {
  return (
    <div className="pt-20 max-w-6xl mx-auto px-4 py-8 min-h-screen dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">
        Frequently Asked Questions (FAQs) for BiotechTrek Jobs
      </h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. About BiotechTrekJobs</h2>
        
        <div className="mb-4">
          <p className="font-semibold">Q: What is BiotechTrekJobs?</p>
          <p className="ml-5">A: BiotechTrekJobs is a specialized job portal focused on connecting job seekers with employers in the life sciences and pharmaceutical industries.</p>
        </div>
        
        <div className="mb-4">
          <p className="font-semibold">Q: Who can use BiotechTrekJobs?</p>
          <p className="ml-5">A: The platform is designed for life sciences professionals, students, job seekers, and employers looking to hire talent in biotechnology, pharmaceuticals, and related fields.</p>
        </div>
        
        <div className="mb-4">
          <p className="font-semibold">Q: Is BiotechTrekJobs free to use?</p>
          <p className="ml-5">A: Yes, job seekers can create a profile and apply for jobs.</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Job Seekers</h2>
        
        <div className="mb-4">
          <p className="font-semibold">Q: How do I create a job seeker account?</p>
          <p className="ml-5">A: Click on the "Sign Up" button, fill in the required details, upload your resume, and start applying for jobs.</p>
        </div>
        
        <div className="mb-4">
          <p className="font-semibold">Q: How do I search for jobs?</p>
          <p className="ml-5">A: Use the search bar to find jobs based on keywords, location, and job category.</p>
        </div>
        
        <div className="mb-4">
          <p className="font-semibold">Q: Can I apply for multiple jobs?</p>
          <p className="ml-5">A: Yes, you can apply for as many jobs as you qualify for.</p>
        </div>
        
        <div className="mb-4">
          <p className="font-semibold">Q: How can I update my resume?</p>
          <p className="ml-5">A: Log in to your account, go to your profile, and upload the latest version of your resume.</p>
        </div>
        
        <div className="mb-4">
          <p className="font-semibold">Q: Will employers contact me directly?</p>
          <p className="ml-5">A: Yes, if your profile matches a job posting, employers may contact you for further discussions.</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Employers & Recruiters</h2>
        
        <div className="mb-4">
          <p className="font-semibold">Q: How can I post a job?</p>
          <p className="ml-5">A: Sign up as an employer, complete your profile, and click on "Post a Job" to enter the job details.</p>
        </div>
        
        <div className="mb-4">
          <p className="font-semibold">Q: Are there paid job posting options?</p>
          <p className="ml-5">A: Yes, we offer premium job posting and employer branding options for increased visibility.</p>
        </div>
        
        <div className="mb-4">
          <p className="font-semibold">Q: How do I find candidates for my job openings?</p>
          <p className="ml-5">A: Employers can search our candidate database and use filters to find the right match for their job openings.</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Account & Privacy</h2>
        
        <div className="mb-4">
          <p className="font-semibold">Q: How do I reset my password?</p>
          <p className="ml-5">A: Click on "Forgot Password" in the profile section, enter your registered email, and follow the instructions to reset your password.</p>
        </div>
        
        <div className="mb-4">
          <p className="font-semibold">Q: Is my personal data safe?</p>
          <p className="ml-5">A: Yes, we prioritize user privacy and do not share personal details with third parties without consent.</p>
        </div>
        
        <div className="mb-4">
          <p className="font-semibold">Q: Can I delete my account?</p>
          <p className="ml-5">A: Yes, you can request account deletion through your profile settings or by contacting our support team.</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Support & Contact</h2>
        
        <div className="mb-4">
          <p className="font-semibold">Q: How can I contact BiotechTrekJobs for support?</p>
          <p className="ml-5">A: You can reach us via email or through our "Contact Us" page for any queries related to job postings, applications, or technical support.</p>
        </div>
        
        <div className="mb-4">
          <p className="font-semibold">Q: What should I do if I find fraudulent job postings?</p>
          <p className="ml-5">A: Please report suspicious listings using the "Report Job" option or contact our support team immediately.</p>
        </div>
        
        <div className="mt-6">
          <p>For further assistance, visit our Help Center or email us at <a href="mailto:Biotechtrek.help@gmail.com" className="text-blue-500 hover:underline">Biotechtrek.help@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;