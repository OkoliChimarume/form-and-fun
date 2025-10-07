import React from "react";
import Layout from "./Layout";
import Header from "../component/Header";
import StudioSection from "../component/StudioSection";
import VideoCarousel from "../component/VideoCarousel";
import WorkSection from "../component/WorkSection";
import CapabilityList from "../component/CapabilityCarousel";
import Awards from "../component/Awards";

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <StudioSection />
        <VideoCarousel />
        <WorkSection />
        <CapabilityList />
        <Awards />
      </Layout>
    </>
  );
}