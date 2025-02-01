import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await fetch('/api/applications/view-applications', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch applications');
      }

      const data = await response.json();
      setApplications(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 mt-20">Loading applications...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 mt-20">My Applications</h2>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 mt-20">My Applications</h2>
      
      {location.state?.message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {location.state.message}
        </div>
      )}

      <div className="space-y-4">
        {applications.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">No applications found.</p>
        ) : (
          applications.map((app) => (
            <div
              key={app._id}
              className="border rounded-lg p-4 flex justify-between items-center dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <div>
                <h3 className="font-bold dark:text-white">{app.job?.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{app.job?.companyName}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Applied: {new Date(app.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div>
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  Under Review
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ApplicationList;