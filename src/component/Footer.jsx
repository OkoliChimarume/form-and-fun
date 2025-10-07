import React from "react";

export default function Footer() {
  return (
    <footer className="w-full mt-[4rem]">
      <section>
        <div className="flex flex-col space-y-8">
          <div className="flex justify-between items-start pr-12 md:pr-36 w-full">
            <div className="basis-[40%] lg:basis-[100%]">
              <img src="/logo.svg" alt="logo" className="w-[40px] h-[40px]" />
            </div>
            <div className="flex-1 flex gap-[12rem]">
              <div className="flex justify-between w-[13rem] pb-8 gap-5">
                <div>
                  <h6 className="text-[#9A9A9A]">Menu</h6>
                  <ul>
                    <li>Studio</li>
                    <li>Contact</li>
                    <li>Work</li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-[#9A9A9A]">Social</h6>
                  <ul>
                    <li>Instagram</li>
                    <li>Linkedin</li>
                    <li>Behance</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col space-y-8 lg:gap-5 justify-start">
                <div>
                  <h6 className="text-[#9A9A9A]">Business enquires</h6>
                  <p>timmy7@gmail.com</p>
                </div>
                <div>
                  <h6 className="text-[#9A9A9A]">Join our team</h6>
                  <p>apply@forman.co</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section >
        <h1 className="w-full text-center text-[38vh] text-black">Form&fun</h1>{" "}
      </section>
    </footer>
  );
}
