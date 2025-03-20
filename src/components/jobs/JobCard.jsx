import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Pencil, Trash2 } from 'lucide-react';

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null); 

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
    <div className="border dark:border-gray-700 rounded-lg p-4 md:p-6 mb-4 shadow-sm flex flex-col md:flex-row bg-white dark:bg-gray-800 transition-colors duration-200 gap-4">
      {/* Job Details */}
      <div className="flex-grow pb-4 border-b md:border-b-0">
        <h2 className="text-lg md:text-xl font-bold mb-1 dark:text-white">{job.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-2">{job.companyName}</p>
        <div className="flex flex-wrap items-center text-sm md:text-base gap-3 mb-2 text-gray-500 dark:text-gray-400">
          <span>📍 {job.location}</span>
          <span>₹ {job.salary}</span>
        </div>
        <p className="text-sm md:text-base dark:text-gray-300 mb-4">{job.description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {job.skillsRequired?.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-xs md:text-sm transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
          <span className="mr-4">📅 {new Date(job.dateOfPosting).toLocaleDateString()}</span>
          <span>{job.employmentType}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex md:items-center justify-end md:justify-start gap-2 md:gap-4">
        {userRole === 'candidate' && (
          <button 
            onClick={handleApply}
            className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Apply Now
          </button>
        )}
       
        {userRole === 'admin' && (
          <>
            {/* Edit Button - Text on Desktop, Icon on Mobile */}
            <button 
              onClick={handleEdit}
              className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              Edit Job
            </button>
            <button 
              onClick={handleEdit}
              className="md:hidden p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              <Pencil className="w-5 h-5" />
            </button>

            {/* Delete Button - Text on Desktop, Icon on Mobile */}
            <button 
              onClick={handleDelete}
              className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
              Delete Job
            </button>
            <button 
              onClick={handleDelete}
              className="md:hidden p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default JobCard;
