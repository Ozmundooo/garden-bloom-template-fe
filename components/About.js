import FadeIn from "./FadeIn";
import heroImage from "@/assets/heroImage.jpg";
import Image from "next/image";
export default function About() {
  return (
    <section
      id="about"
      className="mob-pad mob-pad-v align-center items-center"
      style={{ padding: "100px 48px", background: "#fff" }}
    >
      <div
        style={{ maxWidth: 1200, margin: "0 auto" }}
        className=" flex flex-col lg:grid lg:grid-cols-2 gap-0 lg:gap-20 items-start "
      >
        <div>
          <FadeIn>
            <h2
              className="pf"
              style={{
                fontSize: "clamp(34px,3.8vw,54px)",
                fontWeight: 500,
                lineHeight: 1.1,
                color: "var(--ink)",
                marginBottom: 8,
              }}
            >
              Our concepts are always
            </h2>
            <h2
              className="pf"
              style={{
                fontSize: "clamp(34px,3.8vw,54px)",
                fontWeight: 700,
                fontStyle: "italic",
                lineHeight: 1.1,
                color: "var(--green)",
                marginBottom: 28,
              }}
            >
              fresh & relevant
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "var(--ink2)",
                fontWeight: 300,
                marginBottom: 18,
              }}
            >
              Our approach to event design stands out because we craft stylish
              and relevant stories — where the hero element is always{" "}
              <em
                style={{
                  fontFamily: "'Playfair Display',serif",
                  color: "var(--green)",
                }}
              >
                living flowers
              </em>
              .
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "var(--ink2)",
                fontWeight: 300,
                marginBottom: 32,
              }}
            >
              We never create identical projects. With us you get a creative
              approach{" "}
              <em
                style={{
                  fontFamily: "'Playfair Display',serif",
                  color: "var(--green)",
                }}
              >
                rooted in your taste and vision
              </em>
              , shaped around the atmosphere of your occasion.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} y={30}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
          >
            <Image
              src={heroImage}
              alt="Florist at work"
              style={{
                width: "100%",
                aspectRatio: "3/4",
                objectFit: "cover",
                gridRow: "span 2",
              }}
            />
            <Image
              src={heroImage}
              alt="Studio florals"
              style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }}
            />

            <div
              style={{
                padding: "20px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
