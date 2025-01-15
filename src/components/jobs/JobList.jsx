import { useState } from "react";
import { jobs } from "../../data/dummyData";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";

const JobList = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleSearch = ({ search, type, location }) => {
    const filtered = jobs.filter((job) => {
      const matchesSearch =
        !search ||
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase());
      const matchesType =
        !type || job.type.toLowerCase() === type.toLowerCase();
      const matchesLocation =
        !location ||
        job.location.toLowerCase().includes(location.toLowerCase());
      return matchesSearch && matchesType && matchesLocation;
    });
    setFilteredJobs(filtered);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};
export default JobList;