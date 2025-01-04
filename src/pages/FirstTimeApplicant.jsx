import { useState } from "react";
import StatusTracker from "../components/StatusTracker";

const FirstTimeApplicant = () => {
  const [applicantDetails, setApplicantDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    selectedIDs: [],
  });

  const idOptions = [
    "Birth Certificate",
    "National ID Card - Ghana Card",
    "Driver's License",
    "Voter's Registration Card",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicantDetails({ ...applicantDetails, [name]: value });
  };

  const handleCheckboxChange = (id) => {
    setApplicantDetails((prevDetails) => {
      const { selectedIDs } = prevDetails;
      return {
        ...prevDetails,
        selectedIDs: selectedIDs.includes(id)
          ? selectedIDs.filter((selectedID) => selectedID !== id)
          : [...selectedIDs, id],
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(
      `Application Submitted!\nName: ${applicantDetails.name}\nSelected IDs: ${applicantDetails.selectedIDs.join(
        ", "
      )}`
    );
  };

  return (
    <div className="py-12 px-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8">
        First-Time Applicants Form
      </h1>

      {/* FAQ for First-Time Applicants */}
      <div className="mt-10 bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">First-Time Applicants FAQ</h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>Q:</strong> How do I apply for a passport?
            <p>A: You can apply through our online portal by filling out the application form.</p>
          </li>
          <li>
            <strong>Q:</strong> What documents do I need?
            <p>
              A: You will need proof of identity (e.g., a birth certificate) and a recent passport
              photo.
            </p>
          </li>
          <li>
            <strong>Q:</strong> How long does the process take?
            <p>A: The process typically takes between 4-6 weeks, depending on your location.</p>
          </li>
        </ul>
      </div>

      {/* Application Form */}
      <form
        onSubmit={handleFormSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto"
      >
        <h2 className="text-blue-500 font-bold text-2xl text-center">
          Fill out the Application Form after reading the FAQ
        </h2>
        <div className="space-y-4 pt-6">
          <input
            type="text"
            name="name"
            value={applicantDetails.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={applicantDetails.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="phone"
            value={applicantDetails.phone}
            onChange={handleInputChange}
            placeholder="Your Phone"
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="address"
            value={applicantDetails.address}
            onChange={handleInputChange}
            placeholder="Your Address"
            rows="4"
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* ID Selection */}
          <fieldset className="p-4 border-2 border-gray-300 rounded-lg">
            <legend className="text-lg font-semibold text-gray-700 mb-2">
              Select Your ID(s):
            </legend>
            <div className="space-y-2">
              {idOptions.map((id) => (
                <div key={id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={id}
                    name="selectedIDs"
                    value={id}
                    checked={applicantDetails.selectedIDs.includes(id)}
                    onChange={() => handleCheckboxChange(id)}
                    className="mr-2 h-5 w-5 text-blue-500"
                  />
                  <label htmlFor={id} className="text-gray-700">
                    {id}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Submit Application
          </button>
        </div>
      </form>

      {/* Status Tracker */}
      <div className="mt-10 max-w-lg mx-auto">
        <StatusTracker />
      </div>
    </div>
  );
};

export default FirstTimeApplicant;
