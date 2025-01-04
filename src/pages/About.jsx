const About = () => {
  return (
    <div className="bg-gray-50 py-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Passport Office is dedicated to providing efficient and reliable passport 
            services to individuals and families. Established with the goal of simplifying 
            the passport application process, we prioritize transparency, accessibility, 
            and customer satisfaction.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Our mission is to ensure that every applicant—whether a first-time traveler, 
            frequent flyer, or a dual citizen—can access the services they need with ease 
            and confidence.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/about.png"
            alt="About"
            className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-5/6 xl:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
