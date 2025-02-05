"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function ViewImage() {
  // Using a reliable direct 360-degree image URL
  const texture = useLoader(
    THREE.TextureLoader,
    "/assest/chair.jpg"
  );

  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0 }}>
      <Canvas camera={{ position: [0, 0, 0.1] }} style={{ width: "100%", height: "100%" }}>
        {/* 360 Environment */}
        <Sphere args={[500, 60, 40]} scale={[-1, 1, 1]}>
          <meshBasicMaterial map={texture} side={THREE.BackSide} />
        </Sphere>

        {/* Controls to move around */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}







