import React, { useState, useEffect, useRef } from "react";

export default function StudioSection() {
  const [visibleWords, setVisibleWords] = useState([]);
  const sectionRef = useRef(null);
  const text =
    "We are a global creative tech studio forging delightful experiences by blending design, technology, and storytelling. Driven to create value for people and brands through interaction";
  const words = text.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          words.forEach((_, index) => {
            setTimeout(() => {
              setVisibleWords((prev) => [...prev, index]);
            }, index * 80);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section ref={sectionRef} className="py-[5rem] bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="leading-tight mb-16 font-light flex flex-wrap items-center">
            <h4 className="text-[13px] mb-[3rem] uppercase tracking-wider text-[black]">
              The studio
            </h4>
            {words.map((word, index) => (
              <span
                key={index}
                className={`sm:text-[30px] md:text-[50px] text-[60px] inline-block mr-3 transition-all duration-500 ${
                  index === 0 ? "ml-[20%]" : ""
                } ${
                  visibleWords.includes(index)
                    ? "opacity-100 text-black"
                    : "opacity-30 text-primary"
                }`}
              >
                {word}
              </span>
            ))}
            <a
              href="/studio"
              className="px-6 py-3 text-sm mt-3 ml-3 rounded-full font-medium bg-[black] text-[white] hover:bg-[#E5E5E5] hover:text-[black] transition-all duration-300 transform hover:scale-105"
            >
              Learn more
            </a>
          </p>
        </div>
      </section>
      <section>
        
      </section>
    </div>
  );
}
