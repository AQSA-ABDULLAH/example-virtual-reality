"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Box } from "@react-three/drei";
import * as THREE from "three";

export default function InteractiveScene() {
  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0 }}>
      <Canvas>
        {/* Add lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        
        {/* 3D Objects */}
        <Sphere args={[1, 32, 32]} position={[-2, 0, 0]} >
          <meshStandardMaterial color="orange" />
        </Sphere>

        <Box args={[2, 2, 2]} position={[2, 0, 0]}>
          <meshStandardMaterial color="green" />
        </Box>

        {/* Controls */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}
