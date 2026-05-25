import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import heroImage from "@/assets/heroImage.jpg";
import Image from "next/image";
const serviceData = [
  {
    title: "Wedding Florals",
    desc: "Full-service wedding florals — bridal bouquets, ceremony arches, reception tables, and grand installations. Every detail considered.",
    price: "From $3,500",
    img: heroImage,
  },
  {
    title: "Events & Galas",
    desc: "Corporate dinners, product launches, gallery openings. Dramatic centerpieces and installations that make rooms unforgettable.",
    img: heroImage,
  },
  {
    title: "Corporate Floral",
    desc: "Ongoing programs for offices, hotels, and hospitality venues. Elevate your everyday environment with weekly arrangements.",
    img: heroImage,
  },
];

export default function Services() {
  const [hov, setHov] = useState(null);
  return (
    <section
      id="services"
      style={{ padding: "100px 48px", background: "var(--off)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <h2
            className="pf"
            style={{
              fontSize: "clamp(36px,4.5vw,58px)",
              fontWeight: 500,
              lineHeight: 1.05,
              color: "var(--ink)",
              marginBottom: 6,
            }}
          >
            Studio services
          </h2>
          <p
            className="pf"
            style={{
              fontSize: "clamp(22px,2.8vw,34px)",
              fontStyle: "italic",
              color: "var(--green)",
              marginBottom: 56,
            }}
          >
            designed for every occasion
          </p>
        </FadeIn>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
          {serviceData.map((s, i) => (
            <FadeIn key={i} delay={i * 0.07} y={16}>
              <motion.div
                onHoverStart={() => setHov(i)}
                onHoverEnd={() => setHov(null)}
                animate={{
                  background: "#fff",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: "0 0 0 0",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: 300,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <motion.div
                    animate={{ scale: hov === i ? 1.06 : 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ position: "absolute", inset: 0 }}
                  >
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </motion.div>
                </div>
                <div style={{ padding: "24px 24px 28px" }}>
                  <h3
                    className="pf"
                    style={{
                      fontSize: 21,
                      fontWeight: 600,
                      color: "var(--ink)",
                      marginBottom: 10,
                      lineHeight: 1.2,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--ink2)",
                      fontWeight: 300,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
