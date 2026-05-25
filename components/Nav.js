import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  ["About", "about"],
  ["Portfolio", "work"],
  ["Services", "services"],
  ["Contact", "contact"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "22px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled || menuOpen ? "var(--cream)" : "transparent",
          borderBottom:
            scrolled || menuOpen ? "1px solid var(--border)" : "none",
          transition: "background 0.4s, border-color 0.4s",
        }}
      >
        {/* Brand — fades in once scrolled past hero */}
        <motion.button
          className="pf"
          animate={{
            opacity: scrolled || menuOpen ? 1 : 0,
            y: scrolled || menuOpen ? 0 : -6,
          }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            fontSize: 17,
            fontWeight: 400,
            fontFamily: "var(--font-display)",
            letterSpacing: "0.06em",
            color: "var(--ink)",
            cursor: "pointer",
            padding: 0,
            pointerEvents: scrolled || menuOpen ? "auto" : "none",
          }}
        >
          Garden Bloom
        </motion.button>

        {/* Desktop inline links */}
        <div className="nav-desktop-links">
          {links.map(([l, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="pf"
              style={{
                background: "none",
                border: "none",
                fontSize: 15,
                fontWeight: 400,
                letterSpacing: "0.05em",
                color: scrolled || menuOpen ? "var(--ink)" : "#fff",
                cursor: "pointer",
                padding: 0,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--green)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  scrolled || menuOpen ? "var(--ink)" : "#fff")
              }
            >
              {l}
            </button>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px 6px",
            color: scrolled || menuOpen ? "var(--ink)" : "#fff",
            fontSize: 24,
            lineHeight: 1,
            transition: "color 0.3s",
          }}
        >
          {menuOpen ? "✕" : "≡"}
        </button>
      </motion.nav>

      {/* Mobile full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 99,
              background: "var(--cream)",
              padding: "100px 56px 56px",
              borderBottom: "1px solid var(--border)",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",

                gap: 12,
              }}
            >
              {links.map(([l, id], i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={() => go(id)}
                  className="pf"
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid var(--border)",
                    fontSize: "clamp(30px, 5vw, 52px)",
                    fontWeight: 400,
                    color: "var(--ink)",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: "14px 0",
                    letterSpacing: "0.02em",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--green)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      scrolled || menuOpen ? "var(--ink)" : "#fff")
                  }
                >
                  {l}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
