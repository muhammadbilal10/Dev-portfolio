import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold my-8 text-center">
          Our
          <span className="text-primary"> Services</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
