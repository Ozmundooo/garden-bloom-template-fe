import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    service: "",
    budget: "",
    pinterest: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const ch = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const inp = {
    width: "100%",
    padding: "12px 0",
    background: "transparent",
    border: "none",
    borderBottom: "2px solid var(--border)",
    fontSize: 14,
    color: "var(--ink)",
    outline: "none",
    fontWeight: 300,
    transition: "border-color 0.25s",
  };
  const lbl = {
    display: "block",
    fontSize: 13,

    textTransform: "uppercase",
    color: "var(--ink3)",
    marginBottom: 6,
  };

  return (
    <section
      id="contact"
      style={{ padding: "100px 48px", background: "var(--off)" }}
    >
      <div
        className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-start "
        style={{
          maxWidth: 1200,
        }}
      >
        <FadeIn>
          <h2
            className="pf"
            style={{
              fontSize: "clamp(34px,3.8vw,50px)",
              fontWeight: 500,
              lineHeight: 1.05,
              color: "var(--ink)",
              marginBottom: 6,
            }}
          >
            Let's create
          </h2>
          <h2
            className="pf"
            style={{
              fontSize: "clamp(34px,3.8vw,50px)",
              fontStyle: "italic",
              fontWeight: 700,
              color: "var(--green)",
              marginBottom: 36,
            }}
          >
            something beautiful
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {[
              ["Location", "123 Queen St W, Toronto, ON"],
              ["Email", "hello@email.ca"],
              ["Phone", "+1 (416) 123-4567"],
            ].map(([l, v]) => (
              <div key={l}>
                <div
                  style={{
                    fontSize: 14,

                    textTransform: "uppercase",
                    color: "var(--green)",
                    marginBottom: 3,
                  }}
                >
                  {l}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "var(--ink2)",
                    fontWeight: 300,
                  }}
                >
                  {v}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/90 rounded-lg "
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 24,
                justifyContent: "center",
              }}
            >
              <h3
                className="pf"
                style={{
                  fontSize: 32,
                  fontWeight: 500,
                  color: "var(--ink)",
                  marginBottom: 10,
                }}
              >
                Thank you!
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: "var(--ink2)",
                  fontWeight: 300,
                }}
              >
                We've received your inquiry and will be in touch within 48
                hours. We can't wait to create something beautiful together.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-12 items-start "
              style={{}}
            >
              {[
                { k: "name", l: "Your Name", s: 1, t: "text", r: true },
                { k: "email", l: "Email Address", s: 1, t: "email", r: true },
                {
                  k: "date",
                  l: "Event Date",
                  s: 1,
                  t: "text",
                  p: "e.g. June 14, 2026",
                },
                {
                  k: "service",
                  l: "Service Needed",
                  s: 1,
                  t: "text",
                  p: "e.g. Wedding",
                },
                { k: "budget", l: "Approximate Budget", s: 1, t: "text" },
                {
                  k: "pinterest",
                  l: "Pinterest Board (optional)",
                  s: 1,
                  t: "url",
                },
              ].map(({ k, l, s, t, r, p }) => (
                <div
                  key={k}
                  className="w-full"
                  style={{ gridColumn: `span ${s}`, paddingBottom: 22 }}
                >
                  <label style={lbl}>{l}</label>
                  <input
                    type={t}
                    value={form[k]}
                    onChange={ch(k)}
                    required={r}
                    placeholder={p || ""}
                    style={inp}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--green)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border)")
                    }
                  />
                </div>
              ))}
              <div
                className="w-full"
                style={{ gridColumn: "span 2", paddingBottom: 22 }}
              >
                <label style={lbl}>Message & Inspiration</label>
                <textarea
                  value={form.message}
                  onChange={ch("message")}
                  rows={3}
                  style={{ ...inp, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--green)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <div className="w-full" style={{ gridColumn: "span 2" }}>
                <button
                  type="submit"
                  style={{
                    padding: "13px 44px",
                    background: "var(--green)",
                    color: "#fff",
                    border: "none",
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "background 0.25s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.background = "var(--green-bright)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.background = "var(--green)")
                  }
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
