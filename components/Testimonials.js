import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroImage from "@/assets/heroImage.jpg";
import FadeIn from "./FadeIn";

const reviews = [
  {
    q: "Emma and her team turned our wedding into something I didn't even know I was dreaming of. Every corner of the venue felt like stepping into a living painting.",
    n: "Olivia & James Chen",
    e: "Wedding · The Hazelton Hotel",
    image: HeroImage,
  },
  {
    q: "We've worked with many florists for our events. Garden Bloom operates on a completely different level — their creativity and reliability are unmatched.",
    n: "Sarah Goldberg",
    e: "Events Director · TIFF",
    image: HeroImage,
  },
  {
    q: "My monthly arrangement subscription has genuinely changed how my home feels. I didn't know flowers could do that.",
    n: "Margot Reynolds",
    e: "Monthly Subscription",
    image: HeroImage,
  },
  {
    q: "The workshop was the best afternoon I've had in years. Emma's knowledge and warmth made it feel like a private masterclass.",
    n: "Priya Nair",
    e: "Workshop Attendee",
    image: HeroImage,
  },
];

export default function Testimonials() {
  const [a, setA] = useState(0);

  return (
    <section style={{ padding: "100px 48px", background: "var(--off)" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <h2
            className="pf"
            style={{
              fontSize: "clamp(36px,4.5vw,56px)",
              fontWeight: 500,
              color: "var(--ink)",
              marginBottom: 8,
            }}
          >
            What clients say
          </h2>
        </FadeIn>

        <div style={{ minHeight: 300 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 24,
              }}
            >
              <div
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: "1%",
                  overflow: "hidden",
                  position: "relative",
                  flexShrink: 0,
                  border: "2px solid var(--green-mid)",
                }}
              >
                <Image
                  src={reviews[a].image}
                  alt={reviews[a].n}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p
                className="pf"
                style={{
                  fontSize: "clamp(17px,2vw,24px)",
                  fontStyle: "italic",
                  lineHeight: 1.65,
                  color: "var(--ink)",
                  fontWeight: 400,
                  maxWidth: 620,
                }}
              >
                "{reviews[a].q}"
              </p>
              <div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--green)",
                    fontWeight: 500,
                    marginBottom: 3,
                  }}
                >
                  {reviews[a].n}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--ink3)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {reviews[a].e}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 36,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() =>
              setA((p) => (p - 1 + reviews.length) % reviews.length)
            }
            style={{
              width: 40,
              height: 40,
              borderRadius: "1px",
              border: "1px solid var(--green)",
              background: "transparent",
              color: "var(--green)",
              cursor: "pointer",
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--green)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--green)";
            }}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <span
            style={{
              fontSize: 12,
              color: "var(--ink3)",
              letterSpacing: "0.1em",
              minWidth: 40,
              textAlign: "center",
            }}
          >
            {a + 1} / {reviews.length}
          </span>

          <button
            onClick={() => setA((p) => (p + 1) % reviews.length)}
            style={{
              width: 40,
              height: 40,
              borderRadius: "1px",
              border: "1px solid var(--green)",
              background: "transparent",
              color: "var(--green)",
              cursor: "pointer",
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--green)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--green)";
            }}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
