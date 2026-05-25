import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Lorem ipsum dolor sit amet?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    q: "Lorem ipsum dolor sit amet?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    q: "Lorem ipsum dolor sit amet?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    q: "Lorem ipsum dolor sit amet?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    q: "Lorem ipsum dolor sit amet?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ padding: "100px 48px", background: "#fff" }}>
      <div
        className="flex flex-col lg:grid lg:grid-cols-2 gap-0 lg:gap-20 items-start "
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
              marginBottom: 12,
            }}
          >
            Frequently asked
            <br />
            <em style={{ color: "var(--green)" }}>questions</em>
          </h2>
          <p
            style={{
              color: "var(--ink2)",

              fontWeight: 300,
            }}
          >
            Can't find your answer? Message us on Instagram or fill in the
            contact form below.
          </p>
        </FadeIn>
        <div>
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={i * 0.05} y={12}>
              <div style={{ borderBottom: "1px solid var(--border)" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "22px 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    className="pf"
                    style={{
                      fontSize: 17,
                      fontWeight: 500,
                      color: "var(--ink)",
                    }}
                  >
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      fontSize: 22,
                      color: "var(--green)",
                      lineHeight: 1,
                      minWidth: 22,
                      textAlign: "center",
                    }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        style={{
                          fontSize: 14,
                          lineHeight: 1.8,
                          color: "var(--ink2)",
                          fontWeight: 300,
                          paddingBottom: 22,
                        }}
                      >
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
