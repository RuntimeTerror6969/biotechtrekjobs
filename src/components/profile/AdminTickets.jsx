import React, { useState, useEffect } from "react";

const AdminTickets = () => {

  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const token = localStorage.getItem("token"); 
        const response = await fetch("https://bio-backend-kappa.vercel.app/api/profile/tickets", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.msg || "Failed to fetch tickets");
        }

        const data = await response.json();
        setTickets(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Support Tickets</h1>
      {tickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        <ul className="space-y-4">
          {tickets.map((ticket) => (
            <li key={ticket._id} className="p-4 border rounded shadow">
              <p><strong>Name:</strong> {ticket.name}</p>
              <p><strong>Email:</strong> {ticket.email}</p>
              <p><strong>Phone:</strong> {ticket.phone}</p>
              <p><strong>Topic:</strong> {ticket.topic}</p>
              <p><strong>Feedback:</strong> {ticket.feedback}</p>
              <p><strong>Created:</strong> {new Date(ticket.createdAt).toLocaleString()}</p>
              {ticket.userId && <p><strong>User ID:</strong> {ticket.userId}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminTickets;