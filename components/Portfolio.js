import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const portfolio = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=85",
    cat: "Wedding",
    title: "Anastasia & James · The Ritz",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=85",
    cat: "Bouquet",
    title: "Spring Editorial Series",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=85",
    cat: "Event",
    title: "Gala Dinner · Royal Ontario Museum",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=85",
    cat: "Decor",
    title: "Tablescape — Garden Party",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=85",
    cat: "Wedding",
    title: "Maria & Alex · Distillery District",
  },
  {
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&q=85",
    cat: "Floristry",
    title: "Autumn Harvest Collection",
  },
  {
    src: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=600&q=85",
    cat: "Editorial",
    title: "Vogue Living Shoot 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?w=600&q=85",
    cat: "Corporate",
    title: "Four Seasons — Weekly Program",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lb, setLb] = useState(null);
  const cats = ["All", "Wedding", "Event", "Corporate"];
  const shown =
    filter === "All" ? portfolio : portfolio.filter((p) => p.cat === filter);

  return (
    <section id="work" style={{ padding: "100px 48px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div
            className="flex flex-col lg:flex-row align-center justify-between mb-12 gap-8"
            style={{
              // display: "flex flex-col lg:flex-row",
              // alignItems: "lg:flex-end",
              // justifyContent: "space-between",
              marginBottom: 44,
              gap: 16,
            }}
          >
            <h2
              className="pf"
              style={{
                fontSize: "clamp(40px,5vw,64px)",
                fontWeight: 700,
                fontStyle: "italic",
                color: "var(--green)",
                lineHeight: 1,
              }}
            >
              Portfolio
            </h2>
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                justifyContent: "lg:flex-end ",
              }}
            >
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className="h-fit"
                  style={{
                    padding: "7px 16px",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: filter === c ? "var(--green)" : "#fff",
                    color: filter === c ? "#fff" : "var(--ink2)",
                    border: `1px solid ${filter === c ? "var(--green)" : "var(--border)"}`,
                    cursor: "pointer",
                    transition: "all 0.25s",
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <div
          className="flex flex-col lg:grid lg:grid-cols-3 gap-4 "
          style={{
            gap: 10,
            gridAutoRows: 280,
          }}
        >
          <AnimatePresence mode="popLayout">
            {shown.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                onClick={() => setLb(item)}
                style={{
                  gridColumn: item.wide ? "span 2" : "span 1",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "zoom-in",
                }}
                whileHover="h"
              >
                <motion.img
                  src={item.src}
                  alt={item.title}
                  variants={{ h: { scale: 1.05 } }}
                  transition={{ duration: 0.55 }}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLb(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.9)",
              zIndex: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 48,
              cursor: "zoom-out",
            }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.35 }}
              style={{ maxWidth: 900, width: "100%" }}
            >
              <img
                src={lb.src}
                alt={lb.title}
                style={{
                  width: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
