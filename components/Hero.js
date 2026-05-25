import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import HeroImage from "@/assets/heroImage.jpg";
import Link from "next/link";

export default function Hero() {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 700], [0, 130]);
  const op = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <>
      {/* Full-bleed hero */}
      <section
        style={{
          position: "relative",
          height: "90vh",
          overflow: "hidden",
        }}
      >
        {/* Parallax image */}
        <motion.div
          style={{
            position: "absolute",
            inset: "-15% 0",
            y: imgY,
          }}
        >
          <Image
            src={HeroImage}
            alt="Floral arrangement"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </motion.div>

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.38) 100%)",
          }}
        />

        {/* Brand name — large, centered near top */}
        <motion.div
          style={{ opacity: op }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center "
          initial={false}
        >
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#edeae0] text-center"
            style={{
              fontSize: "clamp(52px, 13vw, 176px)",
              fontWeight: 300,
              fontFamily: "var(--font-display)",
              textAlign: "center",
              textShadow: "0 2px 48px rgba(0,0,0,0.18)",
            }}
          >
            Garden Bloom
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              fontWeight: 400,
            }}
            className="text-xl lg:text-3xl text-off max-w-xl text-center mb-8"
          >
            Curated floral arrangements for weddings, events, and everyday
            moments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row gap-4 "
            style={{
              marginTop: 20,
            }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-10 py-3 bg-green text-white border-2 border-green uppercase font-medium transition-colors duration-300 hover:bg-light cursor-pointer"
            >
              Start Your Inquiry
            </button>{" "}
            <button
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-10 py-3 bg-white text-green border-2 border-green uppercase font-medium transition-colors duration-300 hover:bg-light cursor-pointer"
            >
              Start Your Inquiry
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Ticker band */}
      <div
        style={{
          overflow: "hidden",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "12px 0",
          whiteSpace: "nowrap",
          background: "var(--off)",
        }}
      >
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          style={{ display: "inline-flex" }}
        >
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="font-medium"
              style={{
                color: "var(--green)",
                textTransform: "uppercase",
                padding: "0 3px",
              }}
            >
              · Floristry · Weddings · Events · Decor · Bouquets · Workshops
            </span>
          ))}
        </motion.div>
      </div>
    </>
  );
}
