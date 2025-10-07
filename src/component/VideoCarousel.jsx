import React, { useRef } from "react";

const videoUrls = [
  "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642111/bheeicedy3ihyzyn31iuum3m4cldsk8dqlxe_wh4lip.mp4",
  "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759639587/ILLpcsHOAB_576p_1744824343_vu4fee.mp4",
  "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642078/bheeicedz8a5tcbo6sr84repcz7zjtyfocua_zaf61j.mp4",
  "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759639587/GWazvydWJs_576p_1744824344_wyftge.mp4",
  "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759639607/LCVDnqXAon_576p_1751149542_a65jqv.mp4",
  "https://res.cloudinary.com/dm7vlpslq/video/upload/v1759639607/LCVDnqXAon_576p_1751149542_a65jqv.mp4",
];

export default function VideoCarousel() {
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleStart = (x) => {
    isDragging.current = true;
    carouselRef.current.classList.add("cursor-grabbing");
    startX.current = x - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMove = (x) => {
    if (!isDragging.current) return;
    const walk = (x - carouselRef.current.offsetLeft - startX.current) * 1.2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleEnd = () => {
    isDragging.current = false;
    carouselRef.current.classList.remove("cursor-grabbing");
  };

  return (
    <div className="w-full bg-inherit pb-10 select-none">
      <div
        ref={carouselRef}
        className="flex space-x-4 cursor-grab no-scrollbar overflow-hidden"
        onMouseDown={(e) => handleStart(e.pageX)}
        onMouseMove={(e) => handleMove(e.pageX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].pageX)}
        onTouchMove={(e) => handleMove(e.touches[0].pageX)}
        onTouchEnd={handleEnd}
      >
        {videoUrls.map((url, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-lg overflow-hidden shadow-md"
          >
            <video
              src={url}
              className="w-full h-[480px] object-cover"
              loop
              autoPlay
              muted
              playsInline
            />
          </div>
        ))}
      </div>
    </div>
  );
}
