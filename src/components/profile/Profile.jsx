import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { LogOut } from "lucide-react";

const Profile = () => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState({
    fullName: "",
    phone: "",
    resume: null,
    skills: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 mt-20">Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Full Name</label>
          <input
            type="text"
            value={profile.fullName}
            onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Phone</label>
          <input
            type="tel"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Resume</label>
          <input
            type="file"
            onChange={(e) => setProfile({ ...profile, resume: e.target.files[0] })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Skills</label>
          <textarea
            value={profile.skills}
            onChange={(e) => setProfile({ ...profile, skills: e.target.value })}
            className="w-full p-2 border rounded"
            rows="4"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Update Profile
        </button>
      </form>
      <button onClick={logout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2">
        <LogOut className="w-5 h-5" /> Logout
      </button>
    </div>
  );
};

export default Profile;
