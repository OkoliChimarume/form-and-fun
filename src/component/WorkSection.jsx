import React from "react";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  return (
    <section className="py-32 px-6 text-[#1D1D1D]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-1 gap-6">
          <h2 className="text-[6rem] font-[arial]">Work</h2>
          <div className="">
            <p className="text-sm font-bold">Selected Work</p>
            <p className="text-gray-400 text-base">(22-25)</p>
          </div>
        </div>

        <section className="overflow-hidden whitespace-nowrap text-[#E5E5E5]">
          <div className="animate-slide flex">
            <p className="text-[6rem] font-[arial] tracking-tight px-8">
              MOTION SPATIAN VR GEN-AI AR GAMING VIRTUAL FASHION IMMERSE BRAND
            </p>
            <p className="text-[6rem] font-[arial] tracking-tight px-8">
              MOTION SPATIAN VR GEN-AI AR GAMING VIRTUAL FASHION IMMERSE BRAND
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <ProjectCard
            title="Oreo x Pacman"
            category="AR Experience"
            aspect="landscape"
            video="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642096/bheeicdi21w0hkxyqiby6vxovghp64qh2wan_qwmt7l.mp4"
          />
          <ProjectCard
            title="Doordash Summer of Dashpass"
            category="Campaign"
            aspect="portrait"
            video="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642676/YThAIwoXKB_576p_1744824072_ccmg6f.mp4"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Widllet"
            category="Brand Identity, App"
            aspect="portrait"
            video="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642080/bheeicea8cwvkf21vcnbg8jhx3wo0wyb42im_q9yvuz.mp4"
            soon={true}
          />
          <ProjectCard
            title="Powerade Mindzone"
            category="VR Experience"
            aspect="landscape"
            video="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642089/bheeicea3wowr2ifyqckn5737cnu42mewpr1_a8wqzo.mp4"
          />
        </div>
      </div>
    </section>
  );
}
