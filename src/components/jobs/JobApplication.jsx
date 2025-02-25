import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const JobApplication = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const job = state?.job;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "", 
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://bio-backend-kappa.vercel.app/api/applications/apply-job/${jobId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.msg || "Failed to submit application");
      }

      const data = await response.json();
      navigate("/applications", {
        state: { message: data.msg },
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!job) {
    return (
      <div className="max-w-4xl mx-auto p-6 mt-24">
        <div className="text-center">Loading job details...</div>
      </div>
    );
  }
  return (
    // Increased top padding for mobile view
    <div className="max-w-4xl mx-auto p-4 pt-16 sm:p-6 md:p-20">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-8 space-y-6 sm:space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 dark:text-white">
          Apply for {job.title}
        </h2>

        {/* Company Information Section */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-semibold dark:text-white">
            About the Company
          </h3>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6">
            <h4 className="font-bold text-lg mb-2 dark:text-white">
              {job.companyName}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {job.companyDescription ||
                "Join our innovative team and be part of something special."}
            </p>
          </div>
        </div>

        {/* Job Details Section */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-semibold dark:text-white">
            Job Details
          </h3>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6">
            {/* Change grid to stack on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-600 dark:text-gray-400">Location</p>
                <p className="font-medium dark:text-white">{job.location}</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400">Salary</p>
                <p className="font-medium dark:text-white">${job.salary}</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400">
                  Employment Type
                </p>
                <p className="font-medium dark:text-white">
                  {job.employmentType}
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400">Posted On</p>
                <p className="font-medium dark:text-white">
                  {new Date(job.dateOfPosting).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Description
                </p>
                <p className="dark:text-white">{job.description}</p>
              </div>

              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Required Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.skillsRequired?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-semibold dark:text-white">
            Submit Your Application
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="border dark:border-gray-700 rounded-lg p-4 sm:p-6">
              {/* Change grid to stack on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Resume (Google Drive Link)
                </label>
                <input
                  type="url"
                  name="resume"
                  value={formData.resume}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your Google Drive resume link"
                  className="w-full p-2 border rounded-md dark:border-gray-600"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Please provide a link to your resume on Google Drive.
                </p>
              </div>
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            {/* Adjust button layout for mobile */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 border rounded-lg dark:border-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 transition-colors duration-200"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;