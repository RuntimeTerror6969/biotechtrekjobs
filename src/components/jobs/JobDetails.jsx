import React from "react";

const JobDetails = ({ job }) => {
  if (!job) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-600">
        <strong>Company:</strong> {job.company}
      </p>
      <p className="text-gray-600">
        <strong>Location:</strong> {job.location}
      </p>
      <p className="text-gray-600">
        <strong>Experience:</strong> {job.experience}
      </p>
      <p className="text-gray-600">
        <strong>Salary:</strong> {job.salary}
      </p>
      <p className="text-gray-600">
        <strong>Description:</strong> {job.description}
      </p>
      <button className="btn-primary mt-4 p-2 bg-blue-500 text-white rounded">
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;