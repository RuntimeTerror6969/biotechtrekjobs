const ApplicationList = () => {
  const dummyApplications = [
    {
      id: 1,
      jobTitle: "Frontend Developer",
      company: "Tech Corp",
      status: "Under Review",
      appliedDate: "2024-01-15",
    },
    {
      id: 2,
      jobTitle: "Backend Developer",
      company: "Software Inc",
      status: "Rejected",
      appliedDate: "2024-01-10",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">My Applications</h2>
      <div className="space-y-4">
        {dummyApplications.map((app) => (
          <div
            key={app.id}
            className="border rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{app.jobTitle}</h3>
              <p className="text-gray-600">{app.company}</p>
              <p className="text-sm text-gray-500">
                Applied: {app.appliedDate}
              </p>
            </div>
            <div>
              <span
                className={`px-3 py-1 rounded-full ${
                  app.status === "Under Review"
                    ? "bg-yellow-100 text-yellow-800"
                    : app.status === "Rejected"
                    ? "bg-red-100 text-red-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {app.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ApplicationList;
