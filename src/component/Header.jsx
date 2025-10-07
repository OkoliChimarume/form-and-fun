import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Header() {
  return (
    <section className="w-full flex flex-col justify-center items-center mx-auto ">
      <div className="!max-w-[45.63rem] h-[50vh]">
        <DotLottieReact
          src="https://lottie.host/4d8e2b73-f933-4e2b-91bb-24e919a5b40c/qWMlTrXt5V.lottie"
          // loop
          className=""
          autoplay
        />
      </div>

      <div className="w-full rounded-[30px] mt-10">
        <video
          src="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759604931/formandfunsizzle_k1h5n4.mp4"
          className="w-full rounded-[10px]"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
}
