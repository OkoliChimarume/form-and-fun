import React from "react";
import Layout from "./Layout";
import StudioSection from "../component/StudioSection";
import VideoCarousel from "../component/VideoCarousel";
import WorkSection from "../component/WorkSection";
import CapabilityList from "../component/CapabilityCarousel";
import Awards from "../component/Awards";

export default function Home() {
  return (
    <>
      <Layout>
        <StudioSection />
        <VideoCarousel />
        <WorkSection />
        <CapabilityList />
        <Awards />
      </Layout>
    </>
  );
}