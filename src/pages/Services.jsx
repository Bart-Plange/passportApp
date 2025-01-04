import Card from "../components/Card";

const Services = () => {
  return (
    <div className="px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
        <Card
          title="Dual Citizens"
          description="Understand your rights and requirements as a dual citizen."
          buttonText="Learn More"
          buttonLink="/help"
        />
        <Card
          title="Elderly Applicants"
          description="Accessible services tailored for elderly applicants."
          buttonText="Get Assistance"
          buttonLink="/contact"
        />
      </div>
    </div>
  );
};

export default Services;
