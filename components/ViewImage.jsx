"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useState } from "react";

export default function ViewImage() {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    // Ensure texture is loaded only on the client side
    const loader = new THREE.TextureLoader();
    loader.load("/assets/chair.jpg", (loadedTexture) => {
      setTexture(loadedTexture);
    });
  }, []);

  if (!texture) return <div>Loading...</div>; // Loading state

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








