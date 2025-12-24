export default function Contact() {
  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Contact</h2>

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        fontSize: "1.2rem",
        fontWeight: "bold"
      }}>
        <img
          src="/assets/UBISOFT.png"
          alt="Ubi Soft logo"
          width="80"
          height="80"
        />
        <span>UBI_SOFT</span>
      </div>

      <p>Email: ayoubsmayenn@gmail.com</p>
      <p>Phone:  29966019</p>
      <p>Whatsup: +216 29966019</p>
    </section>
  );
}
