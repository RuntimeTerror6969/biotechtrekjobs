// import { useState } from "react";
// import { jobs } from "../../data/dummyData";
// import JobCard from "./JobCard";
// import SearchBar from "./SearchBar";

// const JobList = () => {
//   const [filteredJobs, setFilteredJobs] = useState(jobs);

//   const handleSearch = ({ search, type, location }) => {
//     const filtered = jobs.filter((job) => {
//       const matchesSearch =
//         !search ||
//         job.title.toLowerCase().includes(search.toLowerCase()) ||
//         job.company.toLowerCase().includes(search.toLowerCase());
//       const matchesType =
//         !type || job.type.toLowerCase() === type.toLowerCase();
//       const matchesLocation =
//         !location ||
//         job.location.toLowerCase().includes(location.toLowerCase());
//       return matchesSearch && matchesType && matchesLocation;
//     });
//     setFilteredJobs(filtered);
//   };

//   return (
//     <div className="pt-20 max-w-4xl mx-auto p-6 dark:bg-gray-900 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 dark:text-white transition-colors duration-200">
//         Available Jobs
//       </h1>
//       <SearchBar onSearch={handleSearch} />
//       <div>
//         {filteredJobs.map((job) => (
//           <JobCard key={job.id} job={job} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobList;
import { useState, useEffect } from "react";
import api from "../../services/api";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";
import { useAuth } from "../../context/AuthContext";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { user } = useAuth();

  useEffect(() => {
    fetchJobs();
  }, [currentPage]);

  const fetchJobs = async (filters = {}) => {
    try {
      setLoading(true);
      setError("");
      const response = await api.get("/jobs/view-jobs", { 
        params: { 
          ...filters,
          page: currentPage,
          limit: 5
        } 
      });

      // Check if response.data exists and has the expected structure
      if (!response.data) {
        throw new Error("No data received from server");
      }

      // Handle both array response and paginated response
      const jobsData = Array.isArray(response.data) ? response.data : response.data.jobs;
      const totalPagesData = Array.isArray(response.data) 
        ? Math.ceil(response.data.length / 5) 
        : response.data.totalPages;

      if (!Array.isArray(jobsData)) {
        throw new Error("Invalid jobs data format");
      }

      setJobs(jobsData);
      setTotalPages(totalPagesData);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError(err.message || "Failed to fetch jobs");
      setJobs([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (filters) => {
    setCurrentPage(1); // Reset to first page when searching
    fetchJobs(filters);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="pt-20 max-w-4xl mx-auto p-6 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mt-12">Available Jobs</h1>
        {user?.role === "admin" && (
          <a
            href="/post-job"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Post New Job
          </a>
        )}
      </div>
      <SearchBar onSearch={handleSearch} />
      <div>
        {jobs.length === 0 ? (
          <p className="text-center py-10 text-gray-500">No jobs found</p>
        ) : (
          <>
            {jobs.map((job) => <JobCard key={job._id} job={job} />)}
            
            {/* Pagination Controls */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${
                  currentPage === 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                Previous
              </button>
              
              <span className="px-4 py-2">
                Page {currentPage} of {totalPages}
              </span>
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${
                  currentPage === totalPages
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default JobList;
