import Hero from "../components/Hero";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="py-10 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-6">Our Services</h2>
        <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
          <Card
            title="First-Time Applicants"
            description="Step-by-step guidance for obtaining your first passport."
            buttonText="Start Application"
            buttonLink="/firsttimeapplicant"
          />
          <Card
            title="Renewals"
            description="Quick and hassle-free passport renewal services."
            buttonText="Start Renewal"
            buttonLink="/help"
          />
          <Card
            title="Family Applications"
            description="Dedicated services for families applying together."
            buttonText="Learn More"
            buttonLink="/help"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
