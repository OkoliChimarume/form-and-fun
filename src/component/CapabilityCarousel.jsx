import { useRef, useState, useEffect } from "react";
import CapabilityCard from "./CapabilityCard";
import {capabilities } from '../data'

export default function CapabilityCarousel() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div>
      <section className="overflow-hidden whitespace-nowrap text-[#E5E5E5] my-[2rem]">
        <div className="animate-slide flex">
          <p className="text-[3rem] lg:text-[6rem] font-[arial] tracking-tight px-8">
            MOTION SPATIAN VR GEN-AI AR GAMING VIRTUAL FASHION IMMERSE BRAND
          </p>
          <p className="text-[3rem] lg:text-[6rem] font-[arial] tracking-tight px-8">
            MOTION SPATIAN VR GEN-AI AR GAMING VIRTUAL FASHION IMMERSE BRAND
          </p>
        </div>
      </section>

      <section className="min-h-[50vh] md:min-h-[90vh] p-3 md:p-8 bg-white">
        <div className="w-full mx-auto">
          <p className="text-sm mb-2 text-black">Expertise & Capabilities</p>

          <div className="relative">
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full items-center justify-center hover:bg-gray-100 transition-all"
                aria-label="Scroll left"
              >
                ←
              </button>
            )}

            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full items-center justify-center hover:bg-gray-100 transition-all"
                aria-label="Scroll right"
              >
                →
              </button>
            )}

            <div
              ref={scrollRef}
              className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              onScroll={checkScroll}
            >
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 snap-start"
                  // className="flex-shrink-0 w-[90%] lg:w-[calc(33.333%-12px)] snap-start"
                >
                  <CapabilityCard {...capability} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>
    </div>
  );
}
