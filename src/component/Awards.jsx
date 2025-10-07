import React from "react";
import { awardsData } from "../data";

const Awards = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16">
    
      <h2 className="text-[6vw] font-bold leading-none text-[#1D1D1D] mt-[6rem] mb-[5rem]">
        AN AWARD
        <br />
        WINNING STUDIO
      </h2>

      <div className="border-t border-gray-300">
        {awardsData.map((award) => (
          <div
            key={award.id}
            className="grid grid-cols-[0.5fr_2fr_1fr_1fr_60px] border-b border-gray-300 py-10 gap-x-6 items-start"
          >
            <p className="text-xs text-gray-600 tabular-nums">{award.id}</p>

            <h4 className="text-lg md:text-xl font-medium">{award.title}</h4>

            <div>
              <h5 className="text-xs text-gray-400 mb-1 uppercase tracking-wide">
                Project
              </h5>
              <p className="text-sm">{award.project}</p>
            </div>

            <div>
              <h5 className="text-xs text-gray-400 mb-1 uppercase tracking-wide">
                Category
              </h5>
              {award.categories.map((category, index) => (
                <p key={index} className="text-sm leading-snug">
                  {category}
                </p>
              ))}
            </div>

            <div>
              <h5 className="text-xs text-gray-400 mb-1 uppercase tracking-wide">
                Year
              </h5>
              <p className="text-sm tabular-nums">{award.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
