import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Nav from "./Nav";

export default function Header() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <>
      {isLoading ? null : <Nav />}

      <section className="w-full flex flex-col justify-center items-center mx-auto overflow-hidden transition-all duration-700 ease-in-out">
        <div
          className={`!max-w-[45.63rem] transition-all duration-500 ease-in-out ${
            isLoading
              ? "h-screen flex justify-center items-center bg-white"
              : "h-[40vh] lg:h-[50vh]"
          }`}
        >
          <DotLottieReact
            src="https://lottie.host/4d8e2b73-f933-4e2b-91bb-24e919a5b40c/qWMlTrXt5V.lottie"
            autoplay
            className="w-full h-full object-contain"
          />
        </div>

        <div
          className={`w-full rounded-[30px] mt-2 lg:mt-10 transition-opacity duration-700 ease-in-out relative ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Skeleton Loader */}
          {!isVideoLoaded && !isLoading && (
            <div className="video-skeleton">
              <div className="video-skeleton-container">
              </div>
            </div>
          )}

          <video
            src="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759604931/formandfunsizzle_k1h5n4.mp4"
            className={`w-full rounded-[10px] transition-opacity duration-500 ${
              isVideoLoaded ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoad}
            preload="auto"
          />
        </div>
      </section>
    </>
  );
}