import FadeIn from "./FadeIn";

const steps = [
  {
    n: "01",
    t: "Inquiry",
    d: "Fill out our inquiry form with your event details and vision. We respond within 24 hours.",
  },
  {
    n: "02",
    t: "Consultation",
    d: "A relaxed conversation — in studio or by video — to understand the feeling you want to create.",
  },
  {
    n: "03",
    t: "Floral Planning",
    d: "We develop a full proposal with mood boards, floral palette, and an itemised breakdown.",
  },
  {
    n: "04",
    t: "Design & Setup",
    d: "On the day, our team arrives early. We set up, style every detail, and stay until the moment is perfect.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-green py-[100px] px-12">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <h2
            className="pf font-medium text-white mb-[6px]"
            style={{ fontSize: "clamp(36px,4.5vw,58px)" }}
          >
            How we work
          </h2>
          <p
            className="pf italic mb-[60px]"
            style={{
              fontSize: "clamp(20px,2.5vw,30px)",
              color: "rgba(255,255,255,0.62)",
            }}
          >
            simple &amp; transparent
          </p>
        </FadeIn>
        <div
          className="grid relative"
          style={{ gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}
        >
          <div
            className="absolute h-[1px]"
            style={{
              top: 27,
              left: "12.5%",
              right: "12.5%",
              background: "rgba(255,255,255,0.22)",
            }}
          />
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1} y={20}>
              <div className="pr-7 relative">
                <div
                  className="w-[54px] h-[54px] rounded-full flex items-center justify-center mb-[22px]"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.38)",
                  }}
                >
                  <span className="pf text-[15px] text-white font-medium">
                    {s.n}
                  </span>
                </div>
                <h3 className="pf text-[21px] font-medium text-white mb-[10px]">
                  {s.t}
                </h3>
                <p
                  className="text-[13px] leading-[1.8] font-light"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {s.d}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
