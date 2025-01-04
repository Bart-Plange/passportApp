import { useState } from 'react';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setIsSending(true); // Show sending state

    // Simulate a network request
    setTimeout(() => {
      setIsSending(false); // Hide sending state
      setIsSuccess(true); // Show success state
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6 sm:px-8 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>

        {/* Sending/Success state handling */}
        {isSending && (
          <div className="text-center mb-6">
            <div className="animate-spin h-12 w-12 border-4 border-t-4 border-blue-600 rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Sending your message...</p>
          </div>
        )}

        {isSuccess ? (
          <div className="text-center bg-green-100 text-green-700 p-6 rounded-lg shadow-lg transition-transform transform scale-105">
            <h2 className="text-2xl font-semibold mb-4">Success!</h2>
            <p>Your message has been sent successfully. We will get back to you soon.</p>
          </div>
        ) : (
          // Contact Form
          <form className="space-y-6 bg-white p-8 rounded-lg shadow-xl" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="6"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Contact Information */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Address</h2>
          <p className="text-gray-700 mb-2">123 Passport Office, Accra</p>
          <p className="text-gray-700 mb-2">Email: <a href="mailto:info@passportoffice.com" className="text-blue-600">info@passportoffice.com</a></p>
          <p className="text-gray-700">Phone: <a href="tel:+1234567890" className="text-blue-600">+123 456 7890</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
