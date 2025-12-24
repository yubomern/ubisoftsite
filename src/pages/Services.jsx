import { useSelector } from "react-redux";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const services = useSelector((state) => state.services);

  return (
    <section className="services grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4 py-8">
      {services.map((s, i) => (
        <ServiceCard key={i} service={s} />
      ))}
    </section>
  );
}
