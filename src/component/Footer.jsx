import React from "react";

export default function Footer() {
  return (
    <footer className="w-full mt-[4rem]">
      <section>
        <div className="flex justify-between items-start w-full text-black gap-6">
          <div className="">
            <img src="/logo.svg" alt="logo" className="w-[40px] h-[40px]" />
          </div>
          <div className=" flex flex-wrap gap-6 lg:gap-20 lg:basis-[50%]">
            <div className="flex justify-between w-[13rem] pb-8 gap-5 cursor-pointer">
              <div>
                <h6 className="text-[#9A9A9A]">Menu</h6>
                <ul>
                  <li className="hover:underline">Studio</li>
                  <li className="hover:underline">Contact</li>
                  <li className="hover:underline">Work</li>
                </ul>
              </div>
              <div>
                <h6 className="text-[#9A9A9A]">Social</h6>
                <ul>
                  <li className="hover:underline">Instagram</li>
                  <li className="hover:underline">Linkedin</li>
                  <li className="hover:underline">Behance</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col space-y-8 lg:gap-5 justify-start cursor-pointer">
              <div>
                <h6 className="text-[#9A9A9A]">Business enquires</h6>
                <p className="hover:underline">timmy7@gmail.com</p>
              </div>
              <div>
                <h6 className="text-[#9A9A9A]">Join our team</h6>
                <p className="hover:underline">apply@forman.co</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="w-full text-center text-[21vw] font-medium text-black">Form&fun</h1>{" "}
      </section>
    </footer>
  );
}
