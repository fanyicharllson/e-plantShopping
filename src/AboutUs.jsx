function AboutUs() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "60px auto",
        padding: "40px",
        background: "rgba(255,255,255,0.92)",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <h1
        style={{ color: "#2d6a4f", fontSize: "2.2rem", marginBottom: "12px" }}
      >
        🌿 About Paradise Nursery
      </h1>
      <p
        style={{
          color: "#555",
          fontSize: "1.1rem",
          lineHeight: "1.8",
          marginBottom: "20px",
        }}
      >
        Welcome to <strong>Paradise Nursery</strong> — your premier destination
        for beautiful, healthy houseplants. Founded with a deep love for nature,
        we believe every home deserves the calming, life-affirming presence of
        plants.
      </p>
      <p
        style={{
          color: "#555",
          fontSize: "1.1rem",
          lineHeight: "1.8",
          marginBottom: "20px",
        }}
      >
        Our carefully curated collection features air-purifying plants, exotic
        tropicals, elegant succulents, and lush ferns — each hand-selected for
        quality and beauty. Whether you're a seasoned plant parent or just
        getting started, we have the perfect green companion for you.
      </p>
      <h2
        style={{ color: "#40916c", fontSize: "1.4rem", marginBottom: "10px" }}
      >
        Our Mission
      </h2>
      <p style={{ color: "#555", fontSize: "1.05rem", lineHeight: "1.8" }}>
        To make the joy of plant parenthood accessible to everyone, delivering
        happiness one plant at a time — straight to your doorstep.
      </p>
    </div>
  );
}

export default AboutUs;
