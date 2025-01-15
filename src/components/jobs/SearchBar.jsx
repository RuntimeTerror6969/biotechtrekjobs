import { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    salary: "",
  });

  const handleSearch = () => {
    onSearch({ search, ...filters });
  };

  return (
    <div className="mb-8">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="p-2 border rounded"
        >
          <option value="">Job Type</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
        </select>
        <select
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="p-2 border rounded"
        >
          <option value="">Location</option>
          <option value="remote">Remote</option>
          <option value="onsite">Onsite</option>
        </select>
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
