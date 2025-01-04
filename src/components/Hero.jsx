const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-gray-800 text-center px-4">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto space-y-8 md:space-y-0">
        {/* Text Section */}
        <div className="md:w-1/2 mt-20 text-left">
          <h1 className="text-7xl md:text-8xl font-bold mb-4">
            Ops! Passport So easy to get
          </h1>
          <p className="text-xl mb-6">
            Effortless passport application, renewal, and tracking system powered by modern technology.
          </p>
          <a
            href="/firsttimeapplicant"
            className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700"
          >
            Apply Now
          </a>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/passport1.png"
            alt="Passport Mockup"
            className="w-full max-w-xl lg:max-w-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
