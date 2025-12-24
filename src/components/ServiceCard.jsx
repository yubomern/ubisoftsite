export default function ServiceCard({ service }) {
  return (
    <div className="card">
      <img src={service.logo} alt={service.name} height="60" />
      <h3>{service.name}</h3>
    </div>
  );
}
