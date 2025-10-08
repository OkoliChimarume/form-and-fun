import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-[white] text-[black]">
      <div className="flex justify-between ml-[1rem] mr-[2rem] py-[0.6rem] items-center text-[15px] font-aeonik">
        <div className="flex justify-between items-center">
          <img src="/logo.svg" alt="logo" className="w-[28px] h-[28px]" />
        </div>
        {!isMobile && (
          <div className="font-aeonik">
            <p
              className={`flex justify-between items-center transition-transform duration-400 ease-in-out ${
                scrolled ? "-translate-y-[3rem]" : "translate-y-0"
              }`}
            >
              Form&Fun
            </p>
            <p
              className={`absolute left-[20vw] top-[10px] flex items-center justify-center transition-transform duration-400 ease-in-out ${
                scrolled
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[1rem]"
              }`}
            >
              Creative Technology Studio
            </p>
          </div>
        )}
        {!isMobile && (
          <div
            className={`flex justify-between items-center transition-transform duration-400 ease-in-out ${
              scrolled ? "-translate-y-[3rem]" : "translate-y-0"
            }`}
          >
            <p className="text-aeonik">Creative Technology Studio</p>
          </div>
        )}
        <div className="flex justify-between items-center flex-end">
          <nav className="flex justify-between gap-[1rem] items-center">
            <p>Studio</p>
            <p>Contact</p>
            <p>Work</p>
          </nav>
        </div>
      </div>
    </div>
  );
}
