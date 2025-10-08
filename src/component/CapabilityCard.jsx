import { useState, useRef } from "react";

export default function CapabilityCard({
  title,
  items,
  videoSrc,
  bgColor,
  hoverBgColor,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const isMobile = window.innerWidth < 768;

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`w-[20rem] md:w-[30rem] lg:w-[30rem] h-[33rem] ${
        isMobile ? "p-3" : ""
      } md:h-[40rem] lg:h-[43rem] rounded-xl cursor-pointer transition-all duration-500 ease-out ${
        isHovered ? "p-4 md:p-6" : "p-0"
      }`}
      style={{
        backgroundColor: isHovered || isMobile ? hoverBgColor : "transparent",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <article className="h-full">
        <figure
          className={`overflow-hidden rounded-lg flex justify-center items-center h-[30vh] lg:h-[55vh] mb-4 ${bgColor} transition-transform duration-500 ${
            isHovered ? "scale-[1.02] -translate-y-1" : "scale-100"
          }`}
        >
          <video
            ref={videoRef}
            className="w-full object-cover rounded-lg"
            src={videoSrc}
            muted
            loop
            playsInline
            preload="metadata"
          />
        </figure>

        <h3
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-black py-2 transition-all duration-500 ${
            isHovered ? "-translate-y-2" : "translate-y-0"
          }`}
        >
          {title}
        </h3>

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-1 text-black ">
          {items.map((item, i) => (
            <li key={i} className="text-sm">
              {item}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
