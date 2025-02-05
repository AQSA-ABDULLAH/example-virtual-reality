"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import RotatingBox from "@/components/RotatingBox";
import RotatingSphere from "@/components/Circle";
import RotatingTorus from "@/components/RotatingTorus";
import TourKnot from "@/components/TourKnot";
import Leva from "@/components/leva";
import VRGame from "@/components/VrGame";

import Scene from "@/components/Scene";
import InteractiveScene from "@/components/InterectiveScene";

export default function Home() {


  return (
    <div style={{ textAlign: "center" }}>
      <section>
        <Canvas style={{ width: "90vw", height: "95vh" }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <RotatingBox position={[2, 0, 0]} args={[1, 1, 1]} color="orange" />
          <RotatingBox position={[-2, 0, 0]} args={[1, 1, 1]} color="orange" />
          <RotatingBox position={[2, 4, 0]} args={[1, 2, 0]} color="orange" />
          <RotatingBox position={[2, -4, 0]} args={[1, 2, 0]} color="orange" />
          <RotatingSphere position={[0, 2, 0]} radius={1} color="blue" />
          <RotatingTorus position={[0, -2, 0]} radius={2} tube={0.5} color="green" />
        </Canvas>
      </section>

      <section>
        <TourKnot />
      </section>

      <section>
        <Leva />
      </section>

      {/* <section>
        <VRGame />
      </section> */}

     
{/* 
      <section>
        <h2>MOVE THIS IMAGE IN 360 DEGREE</h2>
        <Scene />
      </section>

      <div>
        <h1>Interactive 3D Scene</h1>
        <InteractiveScene />
      </div> */}
    </div>
  );
}
