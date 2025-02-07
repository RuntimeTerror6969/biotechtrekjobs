import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";  // Import useLocation
import axios from "axios";

const AddJobs = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    category: "",
    companyName: "",
    salary: "",
    skillsRequired: "",
    employmentType: "full-time",
    workExperience: "any",
    applyLink: "",  
  });

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    if (location.state?.job) {
      const { job } = location.state;
      setFormData({
        title: job.title || "",
        description: job.description || "",
        location: job.location || "",
        category: job.category || "",
        companyName: job.companyName || "",
        salary: job.salary || "",
        skillsRequired: job.skillsRequired.join(", ") || "",  
        employmentType: job.employmentType || "full-time",
        workExperience: job.workExperience || "any",
        applyLink: job.applyLink || "",  
      });
    }

    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://bio-backend-kappa.vercel.app/api/categories"
        );
        setCategories(response.data);
      } catch (error) {
        setError("Failed to load categories");
      }
    };

    fetchCategories();
  }, [location.state]);  // Dependency array to ensure it runs when location changes

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      if (location.state?.job) {
        // If the job exists, update the job instead of posting a new one
        await axios.put(
          `https://bio-backend-kappa.vercel.app/api/jobs/update-job/${location.state.job._id}`,
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        // If no job is being edited, create a new one
        await axios.post(
          "https://bio-backend-kappa.vercel.app/api/jobs/post-job",
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      navigate("/jobs");
    } catch (err) {
      setError(err.response?.data?.msg || "Failed to post job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          {location.state?.job ? "Edit Job" : "Post a New Job"}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mt-2">
          Fill in the details to {location.state?.job ? "edit" : "post"} a job opening.
        </p>

        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          {/* Job Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Job Title *
            </label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Company Name *
            </label>
            <input
              type="text"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Description *
            </label>
            <textarea
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Job Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Skills Required */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Skills Required *
            </label>
            <input
              type="text"
              name="skillsRequired"
              required
              value={formData.skillsRequired}
              onChange={handleChange}
              placeholder="e.g., JavaScript, React, Node.js"
              className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Employment Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Employment Type *
            </label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="contract">Contract</option>
            </select>
          </div>

          {/* Work Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Work Experience *
            </label>
            <select
              name="workExperience"
              value={formData.workExperience}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              
              <option value="entry">0-1 years</option>
              <option value="mid">1-3 years </option>
              <option value="senior">3-5 years</option>
              <option value="senior">5 years</option>
              <option value="senior">More than 5 years</option>
              <option value="any">Any</option>

            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Location *
            </label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Salary */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Salary
            </label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="e.g., 50000"
              className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Apply Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Apply Link *
            </label>
            <input
              type="url"
              name="applyLink"
              required
              value={formData.applyLink}
              onChange={handleChange}
              placeholder="Enter the application link"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              {loading ? "Loading..." : location.state?.job ? "Update Job" : "Post Job"}
            </button>
            <Link to="/jobs" className="ml-4 text-sm text-blue-500 hover:underline">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
