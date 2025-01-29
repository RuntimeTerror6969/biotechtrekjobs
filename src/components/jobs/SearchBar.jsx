import { useState } from "react";
import { useTheme } from "../../context/ThemeContext"; // Import the ThemeContext to use dark mode state

const SearchBar = ({ onSearch }) => {
  const { darkMode } = useTheme(); // Get the darkMode state
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    employmentType: "",
    workExperience: "",
    salary: "",
    dateOfPosting: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, value]) => value !== "")
    );
    onSearch(cleanFilters);
  };

  const handleReset = () => {
    setFilters({
      search: "",
      location: "",
      employmentType: "",
      workExperience: "",
      salary: "",
      dateOfPosting: "",
    });
    onSearch({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`mb-8 p-4 rounded-lg shadow ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          placeholder="Search jobs..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className={`p-2 border rounded w-full ${
            darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
          }`}
        />

        <input
          type="text"
          placeholder="Location..."
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className={`p-2 border rounded w-full ${
            darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
          }`}
        />

        <select
          value={filters.employmentType}
          onChange={(e) =>
            setFilters({ ...filters, employmentType: e.target.value })
          }
          className={`p-2 border rounded w-full ${
            darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
          }`}
        >
          <option value="">Employment Type</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="internship">Internship</option>
          <option value="any">Any</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <select
          value={filters.workExperience}
          onChange={(e) =>
            setFilters({ ...filters, workExperience: e.target.value })
          }
          className={`p-2 border rounded w-full ${
            darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
          }`}
        >
          <option value="">Experience Level</option>
          <option value="0-1 years">0-1 years</option>
          <option value="1-3 years">1-3 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="more than 5 years">5+ years</option>
          <option value="any">Any</option>
        </select>

        <select
          value={filters.dateOfPosting}
          onChange={(e) =>
            setFilters({ ...filters, dateOfPosting: e.target.value })
          }
          className={`p-2 border rounded w-full ${
            darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
          }`}
        >
          <option value="">Posted Date</option>
          <option value="24h">Last 24 hours</option>
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="all">All time</option>
        </select>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={handleReset}
          className={`px-4 py-2 ${
            darkMode
              ? "text-white hover:text-gray-200"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Reset
        </button>
        <button
          type="submit"
          className={`px-4 py-2 rounded ${
            darkMode
              ? "bg-blue-700 text-white hover:bg-blue-800"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
