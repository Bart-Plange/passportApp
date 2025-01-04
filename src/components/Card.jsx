const Card = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-white p-6 rounded shadow-lg text-center">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={buttonLink}
        className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default Card;
