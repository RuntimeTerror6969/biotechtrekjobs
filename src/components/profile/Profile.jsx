import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { LogOut, User, Phone, Code, Loader2, Mail, Lock, Save, ArrowLeft, Ticket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("personalInfo");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: "",
  });
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [tickets, setTickets] = useState([]);
  const [ticketsLoading, setTicketsLoading] = useState(false);
  const [ticketsError, setTicketsError] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/auth");
      return;
    }
    fetchUserProfile();
  }, [navigate]);

  const fetchUserProfile = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://bio-backend-kappa.vercel.app/api/profile/view-profile", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch profile");

      const data = await response.json();
      setProfile({
        fullName: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        skills: data.skills || "",
      });
    } catch (err) {
      setError("Failed to load profile data");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTickets = async () => {
    try {
      setTicketsLoading(true);
      setTicketsError(null);
      const response = await fetch("https://bio-backend-kappa.vercel.app/api/profile/tickets", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || "Failed to fetch tickets");
      }

      const data = await response.json();
      setTickets(data);
    } catch (err) {
      setTicketsError(err.message);
    } finally {
      setTicketsLoading(false);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      setIsSaving(true);
      const response = await fetch("https://bio-backend-kappa.vercel.app/api/profile/update-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          name: profile.fullName,
          email: profile.email,
          phone: profile.phone,
          skills: profile.skills,
        }),
      });

      if (!response.ok) throw new Error("Failed to update profile");

      setSuccess("Profile updated successfully");
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError("Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("New passwords don't match");
      return;
    }

    try {
      setIsSaving(true);
      const response = await fetch("https://bio-backend-kappa.vercel.app/api/profile/change-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          oldPassword: passwordData.oldPassword,
          newPassword: passwordData.newPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || "Failed to change password");
      }

      setSuccess("Password changed successfully");
      setPasswordData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err.message || "Failed to change password");
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  useEffect(() => {
    if (activeTab === "tickets" && user.role === "admin") {
      fetchTickets();
    }
  }, [activeTab, user.role]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500 dark:text-blue-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300">Loading your profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white mb-4 sm:mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-[calc(100vh-4rem)] sm:h-[calc(100vh-8rem)]">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 sm:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
              <div className="flex items-center">
                <div className="bg-white dark:bg-gray-700 rounded-full p-2 sm:p-3 mr-3 sm:mr-4 shadow-md">
                  <User className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-white">{profile.fullName || "Your Profile"}</h1>
                  <p className="text-blue-100 text-sm sm:text-base">{profile.email || "Email not available"}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-white dark:bg-gray-700 text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 sm:px-4 py-2 rounded-md font-medium transition-colors shadow-sm text-sm sm:text-base"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex" aria-label="Tabs">
              <button
                onClick={() => setActiveTab("personalInfo")}
                className={`w-1/${user.role === "admin" ? "3" : "2"} py-3 sm:py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === "personalInfo"
                    ? "border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600"
                }`}
              >
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Personal Information</span>
                  <span className="sm:hidden">Personal</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`w-1/${user.role === "admin" ? "3" : "2"} py-3 sm:py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === "security"
                    ? "border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600"
                }`}
              >
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <Lock className="w-4 h-4" />
                  <span>Security</span>
                </div>
              </button>
              {user.role === "admin" && (
                <button
                  onClick={() => setActiveTab("tickets")}
                  className={`w-1/3 py-3 sm:py-4 px-1 text-center border-b-2 font-medium text-sm ${
                    activeTab === "tickets"
                      ? "border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <Ticket className="w-4 h-4" />
                    <span>Tickets</span>
                  </div>
                </button>
              )}
            </nav>
          </div>

          {/* Status Messages */}
          {error && (
            <div className="mx-4 sm:mx-6 mt-4 p-3 sm:p-4 bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-md border border-red-200 dark:border-red-700 text-sm sm:text-base">
              {error}
            </div>
          )}
          {success && (
            <div className="mx-4 sm:mx-6 mt-4 p-3 sm:p-4 bg-green-50 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-md border border-green-200 dark:border-green-700 text-sm sm:text-base">
              {success}
            </div>
          )}
          {ticketsError && activeTab === "tickets" && (
            <div className="mx-4 sm:mx-6 mt-4 p-3 sm:p-4 bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-md border border-red-200 dark:border-red-700 text-sm sm:text-base">
              {ticketsError}
            </div>
          )}

          {/* Content */}
          <div className="p-4 sm:p-8 overflow-y-auto h-[calc(100%-13rem)] text-gray-700 dark:text-gray-200">
            {activeTab === "personalInfo" && (
              <form onSubmit={handleProfileUpdate} className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      <User className="w-4 h-4" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profile.fullName}
                      onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                      className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    <Code className="w-4 h-4" />
                    Skills
                  </label>
                  <textarea
                    value={profile.skills}
                    onChange={(e) => setProfile({ ...profile, skills: e.target.value })}
                    className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    rows="4"
                    placeholder="Enter your skills (e.g., JavaScript, React, Node.js)"
                  />
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Separate skills with commas</p>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 disabled:opacity-50"
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-5 h-5" />
                        Update Profile
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {activeTab === "security" && (
              <form onSubmit={handlePasswordChange} className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      value={passwordData.oldPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })}
                      className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder="Enter your current password"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                      className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder="Enter your new password"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                      className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder="Confirm your new password"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 disabled:opacity-50"
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      <>
                        <Lock className="w-5 h-5" />
                        Change Password
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {activeTab === "tickets" && user.role === "admin" && (
              <div className="max-w-4xl mx-auto">
                <h2 className="text-xl font-semibold mb-4">Support Tickets</h2>
                {ticketsLoading ? (
                  <div className="text-center">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-500 dark:text-blue-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-300">Loading tickets...</p>
                  </div>
                ) : tickets.length === 0 ? (
                  <p className="text-gray-600 dark:text-gray-300">No tickets found.</p>
                ) : (
                  <ul className="space-y-4">
                    {tickets.map((ticket) => (
                      <li key={ticket._id} className="p-4 border rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <p><strong>Name:</strong> {ticket.name}</p>
                          <p><strong>Email:</strong> {ticket.email}</p>
                          <p><strong>Phone:</strong> {ticket.phone}</p>
                          <p><strong>Topic:</strong> {ticket.topic}</p>
                          <p className="sm:col-span-2"><strong>Feedback:</strong> {ticket.feedback}</p>
                          <p className="sm:col-span-2">
                            <strong>Created:</strong> {new Date(ticket.createdAt).toLocaleString()}
                          </p>
                          {ticket.userId && (
                            <p className="sm:col-span-2"><strong>User ID:</strong> {ticket.userId}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;