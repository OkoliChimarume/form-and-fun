// import { Plus } from "lucide-react";

// export default function ProjectCard({ title, category, aspect, video, soon }) {
//   return (
//     <a
//       href="#"
//       className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300"
//     >
//       <div
//         className={`${
//           aspect === "portrait" ? "aspect-[3/4]" : "aspect-video"
//         } bg-gradient-to-br relative`}
//       >
//         {soon && (
//           <div className="absolute top-6 right-6 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold z-10">
//             Coming soon
//           </div>
//         )}
//         <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all" />
//       </div>
//       <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <h3 className="text-white text-3xl md:text-4xl font-bold mb-3">
//           {title}
//         </h3>
//         <p className="text-gray-200 text-lg">{category}</p>
//         <Plus className="absolute top-8 right-8 text-white w-12 h-12" />
//       </div>
//     </a>
//   );
// }

import { Plus } from "lucide-react";
import { useState, useRef } from "react";

export default function ProjectCard({ title, category, aspect, video, soon }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
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
      <a
        href="#"
        className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 h-[36.6rem] w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`relative h-[36.6rem] w-full`}>
          <video
            src={video}
            className="h-full object-cover w-full"
            autoPlay
            loop
            muted
            playsInline
          />

          {soon && isHovered && (
            <div className="absolute bottom-[12px] left-[6px] bg-white text-black p-1 rounded-full text-[10px] z-20">
              Coming soon
            </div>
          )}

          {/* Dark Overlay when not hovered */}
          <div
            className={`absolute inset-0 transluscent-overlay transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={` ${
              aspect === "portrait" ? "text-black" : "text-white"
            } uppercase text-[15px] absolute top-0 right-0 left-0 flex justify-between p-4 to-transparent transition-opacity duration-300 ${
              !isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            <h3 className="w-[12ch]">{title}</h3>
            <p className="">{category}</p>

            <Plus
              className={`text-white w-10 h-10 transition-all duration-300 ${
                isHovered
                  ? "opacity-100 rotate-90 scale-100"
                  : "opacity-0 rotate-0 scale-75"
              }`}
            />
          </div>
        </div>
      </a>

  );
}
