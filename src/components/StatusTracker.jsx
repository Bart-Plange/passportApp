import { useState } from "react";
const StatusTracker = () => {
  const [trackingID, setTrackingID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tracking status for ID: ${trackingID}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-4">Track Your Passport Status</h2>
      <input
        type="text"
        placeholder="Enter Tracking ID"
        value={trackingID}
        onChange={(e) => setTrackingID(e.target.value)}
        className="w-full p-3 border rounded mb-4"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Track
      </button>
    </form>
  );
};

export default StatusTracker;
