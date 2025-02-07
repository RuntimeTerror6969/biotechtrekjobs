import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null); 

  // Fetch user data to get role
  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await fetch('https://bio-backend-kappa.vercel.app/api/profile/view-profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` 
          }
        });
        if (response.ok) {
          const data = await response.json();
          setUserRole(data.role); 
        } else {
          console.error('Failed to fetch user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserRole();
  }, []);

  const handleApply = () => {
    if (job.applyLink) {
      // If the job contains an applyLink, navigate directly to that link
      window.open(job.applyLink, '_blank');
    } else {
    
      navigate(`/apply-job/${job._id}`, { state: { job } });
    }
  };

  const handleEdit = () => {
    
    navigate('/post-job', { state: { job } });
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this job?');
    if (!confirmDelete) return;

    try {
      const response = await fetch(`https://bio-backend-kappa.vercel.app/api/jobs/delete-job/${job._id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` 
        }
      });

      if (response.ok) {
        alert('Job deleted successfully');
        navigate('/jobs'); 
      } else {
        console.error('Failed to delete the job');
        alert('Failed to delete the job');
      }
    } catch (error) {
      console.error('Error deleting the job:', error);
      alert('Error deleting the job');
    }
  };

  return (
    <div className="border dark:border-gray-700 rounded-lg p-6 mb-4 shadow-sm flex bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="flex-grow">
        <h2 className="text-xl font-bold mb-2 dark:text-white">{job.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">{job.companyName}</p>
        <div className="mb-2">
          <span className="text-gray-500 dark:text-gray-400">
            📍 {job.location}
          </span>
          <span className="ml-4 text-gray-500 dark:text-gray-400">
            💰 ${job.salary}
          </span>
        </div>
        <p className="mb-4 dark:text-gray-300">{job.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {job.skillsRequired?.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span className="mr-4">
            📅 {new Date(job.dateOfPosting).toLocaleDateString()}
          </span>
          <span>{job.employmentType}</span>
        </div>
      </div>
      <div className="flex items-center">
        <button 
          onClick={handleApply}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Apply Now
        </button>
       
        {userRole === 'admin'  && (
          <button 
            onClick={handleEdit}
            className="ml-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-200"
          >
            Edit Job
          </button>
        )}
     
        {(userRole === 'admin' ) && (
          <button 
            onClick={handleDelete}
            className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
          >
            Delete Job
          </button>
        )}
      </div>
    </div>
  );
};

export default JobCard;
