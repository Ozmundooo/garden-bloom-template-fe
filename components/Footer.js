export default function Footer() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer style={{ background: "var(--ink)", padding: "40px 48px " }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="flex flex-col lg:flex-row align-center justify-between mb-12 gap-8"
          style={
            {
              // display: "flex",
              // justifyContent: "space-between",
              // alignItems: "flex-start",
            }
          }
        >
          <div>
            <div
              className="pf"
              style={{
                fontSize: 24,
                fontWeight: 400,
                color: "#fff",
                letterSpacing: "0.04em",
                marginBottom: 10,
                fontFamily: "var(--font-display)",
              }}
            >
              Garden Bloom
            </div>
          </div>
          <div style={{ display: "flex", gap: 48 }}>
            <div>
              <div
                style={{
                  letterSpacing: "",
                  textTransform: "uppercase",
                  color: "var(--green-mid)",
                  marginBottom: 16,
                }}
              >
                Contact
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {[
                  "hello@email.ca",
                  "+1 (416) 123-4567",
                  "123 Queen St W, Toronto, ON",
                  "Toronto, ON",
                ].map((t) => (
                  <div
                    key={t}
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.78)",
                      fontWeight: 300,
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
