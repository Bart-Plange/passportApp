import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold text-gray-700">404 - Page Not Found</h1>
      <p className="text-lg mt-4">Sorry, the page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
