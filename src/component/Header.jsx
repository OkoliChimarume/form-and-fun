import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Nav from "./Nav";

export default function Header() {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  };

  return (
    <>
      {isLoading ? null : <Nav />}

      <section className="w-full flex flex-col justify-center items-center mx-auto overflow-hidden transition-all duration-700 ease-in-out">
        <div
          className={`!max-w-[45.63rem] transition-all duration-500 ease-in-out ${
            isLoading
              ? "h-screen flex justify-center items-center bg-white"
              : "h-[50vh]"
          }`}
        >
          <DotLottieReact
            src="https://lottie.host/4d8e2b73-f933-4e2b-91bb-24e919a5b40c/qWMlTrXt5V.lottie"
            autoplay
            className="w-full h-full object-contain"
          />
        </div>

        <div
          className={`w-full rounded-[30px] mt-10 transition-opacity duration-700 ease-in-out ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          <video
            src="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759604931/formandfunsizzle_k1h5n4.mp4"
            className="w-full rounded-[10px]"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoad}
          />
        </div>
      </section>
    </>
  );
}
