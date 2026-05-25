import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "For weddings, we recommend 9–12 months ahead to secure your date. For events, 4–6 weeks is usually enough. Urgent requests — reach out directly and we'll do our best.",
  },
  {
    q: "Do you travel outside Toronto?",
    a: "Yes — we regularly work across the GTA and beyond. Destination weddings and out-of-province events are available with additional logistics planning.",
  },
  {
    q: "Is there a minimum spend?",
    a: "Our wedding minimum is $3,500. For events, $1,200. Bouquets and arrangements start from $180. Workshops are priced per person.",
  },
  {
    q: "Can I choose specific flowers?",
    a: "Absolutely. We always incorporate your preferences and colour palette. Our one condition: we work with seasonal, fresh stems for maximum beauty and longevity.",
  },
  {
    q: "Do you handle setup and takedown?",
    a: "Yes — full setup and supervised takedown is included in all wedding and event packages. For smaller orders, delivery and placement is available for an additional fee.",
  },
  {
    q: "Can arrangements be fully customised?",
    a: "Every single arrangement is made to order. From colour palette to bloom selection to vessel choice — we shape everything around your vision.",
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
